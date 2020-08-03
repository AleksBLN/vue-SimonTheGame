<template>
    <div class="game-options">
        <h2>Уровень сложности:</h2>
        <input type="radio" name="mode" value="easy" @change="$emit('toggleDifficulty', 'easy')">Легкий<br>
        <input type="radio" name="mode" value="normal" @change="$emit('toggleDifficulty', 'normal')" checked>Средний<br>
        <input type="radio" name="mode" value="hard" @change="$emit('toggleDifficulty', 'hard')">Сложный<br>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>