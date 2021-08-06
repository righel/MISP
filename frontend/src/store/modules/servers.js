const state = {
    servers: [],
};

const getters = {
    servers: state => state.servers,
};

const actions = {
    fetchServers({ commit }) {
        this.api.get('/servers').then(response => {
            commit('setServers', response.data);
        }).catch(function(error) {
            // handle error
            console.log("API ERROR", error.response.data);
        });
    }
};

const mutations = {
    setServers: (state, servers) => (state.servers = servers),
};

export default {
    state,
    getters,
    actions,
    mutations
};