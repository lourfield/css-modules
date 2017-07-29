<template>
<div v-bind:class="$style.hero">
    <div v-bind:class="$style.container">
        <h1 v-bind:class="$style.hero__heading">The Progressive Intergalactic Framework</h1>
                
        <button-primary>Get Started</button-primary>
        <button-outline src="https://github.com/vuejs/vue">Github</button-outline>
    </div>
</div>
</template>

<script>
import ButtonOutline from './ButtonOutline.vue';
import ButtonPrimary from './ButtonPrimary.vue';

export default {
    name: 'hero',
    components: {
        ButtonPrimary,
        ButtonOutline
    }
}
</script>

<style module>
.container {
    max-width: 940px;
    margin-right: auto;
    margin-left: auto;
}
.hero {
    padding: 80px;
}
.hero__heading {
    color: #212a34;
    margin-top: 0;
    margin-bottom: 30px;
    font-weight: normal;
    font-size: 2.75em;
    line-height: 1.5em;
}
</style>
