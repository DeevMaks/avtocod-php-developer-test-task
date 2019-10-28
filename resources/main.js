import 'core-js/es6/promise'
import 'core-js/es6/string'
import 'core-js/es7/array'

import Vue from 'vue';
import { store } from './store';
import axios from 'axios'

Vue.component('messages_list', require('./components/messages_list.vue').default);

window.Vue = require('vue');

Vue.prototype.$axios = axios

const app = new Vue({
  el: '#app',
  store,
});
