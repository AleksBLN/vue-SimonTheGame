<template>
  <div id="app">
		<h1 @click="play">Simon Says</h1>
      <Popup
        v-if="lose"
        @play="play"
        @closePopup="closePopup"
      >
        Вы продержались {{this.turn - 1}} раундов!
      </Popup>
      <div class="menu">
        <GameInfo @play="play" :lose="lose" :turn="turn" />
        <GameOptions @toggleDifficulty="toggleDifficulty" />
      </div>
      <GameBoard
        @one="one"
        @two="two"
        @three="three"
        @four="four"
        @oneClick="oneClick"
        @twoClick="twoClick"
        @threeClick="threeClick"
        @fourClick="fourClick"
        :buttonColor="buttonColor"
      />

  </div>
</template>

<script>
import GameBoard from "@/components/GameBoard"
import GameInfo from "@/components/GameInfo"
import GameOptions from "@/components/GameOptions"
import Popup from "@/components/Popup"


export default {
  name: 'App',
  components: {
      GameBoard,
      GameInfo,
      GameOptions,
      Popup
  },
  data() {
    return {
      inGame: false,
      difficulty: "normal",
      gameOrder: [],
      playerOrder: [],
      lose: false,
      turn: 0,
      compTurn: null,
      flash: 0,
      intervalId: 0,
      buttonColor: "",
    }
  },
  methods: {
    toggleDifficulty(value) {
      this.difficulty = value;
    },
    getInterval(difficulty) {
      switch (difficulty) {
        case "easy":
          return 1500
        case "normal":
          return 1000
        case "hard":
          return 400
      }
    },
    play() {
      this.inGame = true
      this.gameOrder = []
      this.playerOrder = []
      this.lose = false
      this.turn = 1
      this.flash = 0
      this.intervalId = 0
      for (let i = 0; i < 20; i++) {
        this.gameOrder.push(Math.floor(Math.random() * 4) + 1)
      }
      this.compTurn = true
      this.intervalId = setInterval(this.gameTurn, this.getInterval(this.difficulty))
    },
    gameTurn() {
      if (this.flash === this.turn) {
        clearInterval(this.intervalId)
        this.compTurn = false
        this.buttonColor = ""
      } if (this.compTurn) {
        this.buttonColor = ""
        setTimeout(() => {
          switch (this.gameOrder[this.flash]) {
            case 1:
              this.one()
              break
            case 2:
              this.two()
              break
            case 3:
              this.three()
              break
            case 4:
              this.four()
              break
          }
          this.flash++
        }, 2)
      }
    },
    one() {
      let audio = new Audio(require("@/assets/sounds/1.mp3"))
      audio.play()
      this.buttonColor = "Red"
    },
    two() {
      let audio = new Audio(require("@/assets/sounds/2.mp3"))
      audio.play()
      this.buttonColor = "Blue"
    },
    three() {
      let audio = new Audio(require("@/assets/sounds/3.mp3"))
      audio.play()
      this.buttonColor = "Yellow"
    },
    four() {
      let audio = new Audio(require("@/assets/sounds/4.mp3"))
      audio.play()
      this.buttonColor = "Green"
    },
    oneClick() {
      if (this.inGame) {
        this.playerOrder.push(1)
        this.check()
        this.one()
        setTimeout(() => {
          this.buttonColor = ""
        }, 300)
      } else {
        this.one()
        setTimeout(() => {
          this.buttonColor = ""
        }, 300)
      }
    },
    twoClick() {
      if (this.inGame) {
        this.playerOrder.push(2)
        this.check()
        this.two()
        setTimeout(() => {
          this.buttonColor = ""
        }, 300)
      } else {
        this.two()
        setTimeout(() => {
          this.buttonColor = ""
        }, 300)
      }

    },
    threeClick() {
      if (this.inGame) {
        this.playerOrder.push(3)
        this.check()
        this.three()
        setTimeout(() => {
          this.buttonColor = ""
        }, 300)
      } else {
        this.three()
        setTimeout(() => {
          this.buttonColor = ""
        }, 300)
      }

    },
    fourClick() {
      if (this.inGame) {
        this.playerOrder.push(4)
        this.check()
        this.four()
        setTimeout(() => {
          this.buttonColor = ""
        }, 300)
      } else {
        this.four()
        setTimeout(() => {
          this.buttonColor = ""
        }, 300)
      }
    },
    check() {
      if (this.playerOrder[this.playerOrder.length - 1] !== this.gameOrder[this.playerOrder.length - 1])
        this.lose = true
      if (this.turn === this.playerOrder.length && !this.lose) {
        this.turn++
        this.playerOrder = []
        this.compTurn = true
        this.flash = 0
        this.intervalId = setInterval(this.gameTurn, this.getInterval(this.difficulty))
      }
    },
    closePopup() {
      this.inGame = false
      this.gameOrder = [],
      this.playerOrder = [],
      this.lose = false,
      this.turn = 0,
      this.compTurn = null,
      this.flash = 0,
      this.intervalId = 0,
      this.buttonColor = ""
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 540px;
	margin: 0 auto;
}
.menu {
  display: flex;
}
</style>
