<template>
	<div>
		<div class="red" :class="{lightRed: buttonColor === 'Red'}" @click="$emit('oneClick')"></div>
		<div class="green" :class="{lightGreen: buttonColor === 'Green'}" @click="$emit('fourClick')"></div>
		<div class="yellow" :class="{lightYellow: buttonColor === 'Yellow'}" @click="$emit('threeClick')"></div>
		<div class="blue" :class="{lightBlue: buttonColor === 'Blue'}" @click="$emit('twoClick')"></div>
	</div>

</template>

<script>
export default {
	props: {
		buttonColor: String
	}
}
</script>

<style lang="scss">
.green {
  position: absolute;
  height: 250px;
  width: 250px;
  border-radius: 250px 0 0 0;
  -webkit-border-radius: 250px 0 0 0;
  background: $greenButton;
  top: 50%;
  left: 50%;
  margin: -250px 0px 0px -250px;
  border-style: solid;
  border-width: 5px;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
}

.red {
  position: absolute;
  height: 250px;
  width: 250px;
  border-radius: 0 250px 0 0;
  -webkit-border-radius: 0 250px 0 0;
  background: $redButton;
  top: 50%;
  left: 50%;
  margin: -250px 0px 0px 0px;
  border-style: solid;
  border-width: 5px;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
}

.yellow {
  position: absolute;
  height: 250px;
  width: 250px;
  border-radius: 0 0 0 250px;
  -webkit-border-radius: 0 0 0 250px;
  background: $yellowButton;
  top: 50%;
  left: 50%;
  margin: 0px -250px 0px -250px;
  border-style: solid;
  border-width: 5px;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
}

.blue {
  position: absolute;
  height: 250px;
  width: 250px;
  border-radius: 0 0 250px 0;
  -webkit-border-radius: 0 0 250px 0;
  background: $blueButton;
  top: 50%;
  left: 50%;
  margin: 0px 0px -250px 0px;
  border-style: solid;
  border-width: 5px;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
}

.lightRed {
	background: $redPressed;
}

.lightBlue {
	background: $bluePressed;
}

.lightYellow {
	background: $yellowPressed;
}

.lightGreen {
	background: $greenPressed;
}
</style>