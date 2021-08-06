import { createStore } from 'vuex'
import menu from './modules/menu';
import users from './modules/users';
import organisations from './modules/organisations';
import roles from './modules/roles';
import servers from './modules/servers';

export default createStore({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        menu,
        users,
        organisations,
        roles,
        servers
    }
})