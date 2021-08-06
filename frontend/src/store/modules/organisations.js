const state = {
    organisations: [],
};

const getters = {
    organisations: state => state.organisations,
};

const actions = {
    fetchOrganisations({ commit }, scope = 'local') {
        this.api.get(`/organisations/index/${scope}`).then(response => {
            commit('setOrganisations', response.data);
        }).catch(function(error) {
            // handle error
            console.log("API ERROR", error.response.data);
        });
    }
};

const mutations = {
    setOrganisations: (state, organisations) => (state.organisations = organisations),
};

export default {
    state,
    getters,
    actions,
    mutations
};