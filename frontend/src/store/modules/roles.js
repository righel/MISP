const state = {
    roles: [],
};

const getters = {
    roles: state => state.roles,
};

const actions = {
    fetchRoles({ commit }) {
        this.api.get('/roles').then(response => {
            commit('setRoles', response.data);
        }).catch(function(error) {
            // handle error
            console.log("API ERROR", error.response.data);
        });
    }
};

const mutations = {
    setRoles: (state, roles) => (state.roles = roles),
};

export default {
    state,
    getters,
    actions,
    mutations
};