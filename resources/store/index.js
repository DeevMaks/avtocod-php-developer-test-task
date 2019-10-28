import Vue from 'vue';
import Vuex from 'vuex';

import messages_list from './modules/messages';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{},
    getters:{},
    mutations:{},
    actions:{},
    modules: {
        messages_list
    }
});
