const state = {
    user: null,
    users: [],
};

const getters = {
    user: state => state.user,
    users: state => state.users,
};

const actions = {
    fetchUser({ commit }, id) {
        this.api.get(`/users/view/${id}`).then(response => {
            commit('setUser', response.data);
        }).catch(function(error) {
            // handle error
            console.log("API ERROR", error.response.data);
        });
    },
    fetchUsers({ commit }, page = 1) {
        this.api.get(`/admin/users/index/page:${page}`).then(response => {
            commit('setUsers', response.data);
        }).catch(function(error) {
            // handle error
            console.log("API ERROR", error.response.data);
        });
    },
    addUser(_, user) {
        return new Promise((resolve, reject) => {
            this.api.post('/admin/users/add', user).then(response => {
                resolve(response);
            }, error => {
                console.log("API ERROR", error.response.data);
                reject(error);
            })
        });
    }
};

const mutations = {
    setUser: (state, user) => (state.user = user),
    setUsers: (state, users) => (state.users = users),
};

export default {
    state,
    getters,
    actions,
    mutations
};