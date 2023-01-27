import { createStore } from "vuex";

export default createStore({
    state: {
        isLoggedIn: false,
        countCart: 0
    },
    mutations: {
        updateUser(state, payload) {
            state.isLoggedIn = payload;
        },
        updateCartCount(state, payload) {
            state.countCart = payload
        }
    },
    actions: {
        loginFunction({ commit }, payload) {
            commit("updateUser", payload);
        },
        countCartItem({ commit }, payload) {
            commit("updateCartCount", payload);
        }
    },
    getters: {
        login(state) {
            return state.isLoggedIn
        },
        cartCount(state) {
            return state.countCart
        }
    },
    modules: {},
});