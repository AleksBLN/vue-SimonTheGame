<template>
    <div class="game-info">
        <h2>Раунд {{turn}}</h2>
        <button @click="$emit('play')">Начать</button>
    </div>
</template>

<script>
export default {
    props: {
        turn: Number,
    }
}
</script>

<style lang="scss">
.game-info {
    width: 50%;
    button {
        width: 45%;
        padding: 8px 10px;
        font-size: 16px;
        font-weight: 700;
        text-transform: uppercase;
        border: 1px solid $borderColor;
        margin-top: 10px;
        color: $backgroundColor;
        background: $repeatButton;
        border-radius: 3px;
        cursor: pointer;
        outline: none;
        &:hover {
            background: $greenPressed;
        }
    }
}
</style>