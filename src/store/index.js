import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import {get } from '../utils/tool'
export default new Vuex.Store({
    state: {
        anchor: [],
        voice: [],
        albums: [],
    },
    mutations: {
        loadAnchor(state, payload) {
            state.anchor = payload
        },
        loadVoice(state, payload) {
            state.voice = payload
        },
        loadAlbums(state, payload) {
            state.albums = payload
        },
    },
    actions: {
        search({ commit }, payload) {
            console.log(payload);
            console.log(`https://m.ximalaya.com/m-revision/page/search?kw=${payload}&core=all&page=1&rows=10`);
            get(`https://m.ximalaya.com/m-revision/page/search?kw=${payload}&core=all&page=1&rows=10`).then(res => {
                console.log(res);
                commit('loadAnchor', res.data.userViews.users)
                commit('loadVoice', res.data.trackViews.tracks)
                commit('loadAlbums', res.data.albumViews.albums)
            })
        },
    },
    modules: {}
})