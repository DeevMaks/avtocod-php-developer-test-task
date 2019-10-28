import axios from 'axios';
const api_url = '/api/messages';

export default {
    state:{
        messagesList: [],
    },
    getters:{
        MESSAGES_LIST: state => state.messagesList,
    },
    mutations:{
        SET_MESSAGES_LIST: (state, payload) => state.messagesList = payload,
        ADD_MESSAGE: (state, payload) => state.messagesList.push(payload),
        MUTATE_MESSAGE: (state, payload) => state.messagesList = state.messagesList.map(
            el => el.id === payload.id ? payload : el
        ),
        REMOVE_MESSAGE: (state, id) => state.messagesList = state.messagesList.filter(
            el => el.id !== id
        )
    },
    actions:{
        LOAD_MESSAGES_LIST: ({commit, dispatch}, filters) => {
            return new Promise((resolve, reject) => {
                axios({url: `${api_url}`, method: 'GET', data: filters})
                    .then(resp => {
                        commit('SET_MESSAGES_LIST', resp.data);
                        resolve(resp);
                    })
                    .catch(err => {

                        reject(err);
                    })
            })
        },

        LOAD_MESSAGE: ({commit, dispatch}, id) => {
            return new Promise((resolve, reject) => {
                axios({url: `${api_url}/${id}`, method: 'GET'})
                    .then(resp => {
                        commit('SET_MESSAGE', resp.data);
                        resolve(resp);
                    })
                    .catch(err => {

                        reject(err);
                    })
            })
        },

        CREATE_MESSAGE: ({commit, dispatch}, data) => {
            return new Promise((resolve, reject) => {
                axios({url: `${api_url}`, method: 'POST', data})
                    .then(resp => {
                        commit('MUTATE_MESSAGE', resp.data);
                        resolve(resp);
                    })
                    .catch(err => {

                        reject(err);
                    })
            })
        },

        UPDATE_MESSAGE: ({commit, dispatch}, data) => {
            return new Promise((resolve, reject) => {
                axios({url: `${api_url}/${data.id}`, method: 'PUT', data})
                    .then(resp => {
                        commit('ADD_MESSAGE', resp.data);
                        resolve(resp);
                    })
                    .catch(err => {

                        reject(err);
                    })
            })
        },

        DELETE_MESSAGE: ({commit, dispatch}, id) => {
            return new Promise((resolve, reject) => {
                axios({url: `${api_url}/${id}`, method: 'DELETE'})
                    .then(resp => {
                        commit('REMOVE_MESSAGE', resp.data);
                        resolve(resp);
                    })
                    .catch(err => {

                        reject(err);
                    })
            })
        },

    },
};
