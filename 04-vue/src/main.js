import Vue from 'vue';
import Hero from './components/Hero.vue';

new Vue({
    el: '#content',
    render: h => h(Hero)
});
