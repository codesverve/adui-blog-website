import {createStore} from 'vuex';

export default createStore({
  state: {
    selectedCategory: undefined,
  },
  mutations: {
    SET_SELECTED_CATEGORY: (state, categoryId) => {
      state.selectedCategory = categoryId;
    },
  },
  actions: {
    setCategoryId({commit}, params) {
      commit('SET_SELECTED_CATEGORY', params);
    },
  },
  getters: {
    selectedCategory: (state) => state.selectedCategory,
  },
  modules: {},
});
