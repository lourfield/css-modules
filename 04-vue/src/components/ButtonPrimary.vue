<template>
<button v-bind:class="$style.button"><slot></slot></button>
</template>

<script>
export default {
    name: 'button-primary'
}
</script>

<style module>
.button {
    
    /* Extend .button class to apply the basic button styles */
    composes: button from "./../css/button.css";
    
    color: #fff;
    background-color: #9b4dca;
    border: 0.1rem solid #9b4dca;
}

.button[disabled] {
    cursor: default;
    opacity: .5;
}

.button[disabled]:focus,
.button[disabled]:hover {
    background-color: #606c76;
    border-color: #606c76;
}

.button:focus,
.button:hover {
    background-color: #606c76;
    border-color: #606c76;
    color: #fff;
    outline: 0;
}
</style>
