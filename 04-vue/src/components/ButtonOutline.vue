<template>
<button v-bind:class="$style.button" v-on:click="goToSource"><slot></slot></button>
</template>

<script>
export default {
    name: 'button-outline',
    methods: {
        goToSource(event) {
            let src = event.currentTarget.getAttribute('src');
            
            if ( src ) {
                window.open( src, '_blank' );
            }
        }
    }
}
</script>

<style module>
.button {
    
    /* Extend .button class to apply the basic button styles */
    composes: button from "./../css/button.css";
    
    background-color: transparent;
    color: #9b4dca;
    border: 0.1rem solid #9b4dca;
}

.button:focus,
.button:hover {
    background-color: transparent;
    border-color: #606c76;
    color: #606c76;
}

.button[disabled]:focus,
.button[disabled]:hover {
    border-color: inherit;
    color: #9b4dca;
}
</style>
