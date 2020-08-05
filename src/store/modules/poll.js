import { fetchPolls, fetchPoll } from '@/api/poll';

const poll = {
  state: {
    polls: [],
    poll: '',
  },
  getters: {
    polls(state) {
      return state.polls;
    },
    poll(state) {
      return state.poll;
    },
  },
  mutations: {
    SET_POLLS(state, data) {
      state.polls = data;
    },
    SET_POLL(state, data) {
      state.poll = data;
    },
  },
  actions: {
    async FETCH_POLLS({ commit }) {
      try {
        const response = await fetchPolls();
        commit('SET_POLLS', response.data.data);
        return response;
      } catch (error) {
        console.log(error);
      }
    },
    async FETCH_POLL({ commit }, id) {
      try {
        const response = await fetchPoll(id);
        commit('SET_POLL', response.data.data);
        return response;
      } catch (error) {
        console.log(error);
      }
    },
  },
};

export default poll;
