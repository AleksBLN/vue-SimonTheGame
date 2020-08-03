<template>
    <div class="message">
        <slot></slot>
        <button
            class="repeat"
            @click="$emit('play')"
        >
            Сыграть ещё
        </button>
        <button
            class="close"
            @click="$emit('closePopup')"
        >
            ОК
        </button>
    </div>
</template>

<script>
export default {
};
</script>

<style scoped lang="scss">
.message {
    display: flex;
    max-width: 400px;
    height: 200px;
    position: fixed;
    z-index: 9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    padding: 30px 50px;
    border: solid 2px $borderColor;
    background: $backgroundColor;
    box-shadow: 10px 10px 20px rgba(0,0,0,0.5);
    button {
        width: 45%;
        padding: 8px 10px;
        font-size: 16px;
        font-weight: 700;
        text-transform: uppercase;
        border: 1px solid $borderColor;
        margin-top: 10px;
        color: $backgroundColor;
        border-radius: 3px;
        cursor: pointer;
        outline: none;
        &.repeat {
            background: $repeatButton;
            &:hover {
            background: $greenPressed;
            }
        }
        &.close {
            background: $closeButton;
            &:hover {
            background: $redPressed;
            }
        }
    }
}
</style>