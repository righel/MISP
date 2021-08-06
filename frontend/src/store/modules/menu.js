// import axios from 'axios'

const state = {
    menuItems: [],
};

const getters = {
    menuItems: state => state.menuItems,
};

const actions = {
    async fetchMenu({ commit }) {
        // TODO: API endpoint to return users menu
        // const response = await axios.get("users/menu");
        // commit('setMenu', response.data);

        const menuItems = {
            home: { id: 1, name: "Home", url: "/", children: [] },
            eventActions: {
                id: 2,
                name: "Event Actions",
                children: [
                    [
                        { id: 200, name: "List Events", url: "/events", children: [] },
                        { id: 201, name: "Add Event", url: "/events/add", children: [] },
                        {
                            id: 202,
                            name: "List Attributes",
                            url: "/attributes",
                            children: [],
                        },
                        {
                            id: 203,
                            name: "Search Attributes",
                            url: "/attributes/search",
                            children: [],
                        },
                    ],
                ],
            },
            dashboard: { id: 3, name: "Dashboard", url: "/", children: [] },
            galaxies: { id: 4, name: "Galaxies", url: "/", children: [] },
            inputFilters: { id: 5, name: "Input Filters", url: "/", children: [] },
            globalActions: {
                id: 6,
                name: "Global Actions",
                url: "/",
                children: [
                    [{
                            id: 600,
                            name: "News",
                            url: "/news",
                            children: [],
                        },
                        {
                            id: 601,
                            name: "My Profile",
                            url: "/spa/users/view/me",
                            spa: true,
                            children: [],
                        },
                        {
                            id: 602,
                            name: "My Settings",
                            url: "/user_settings/index/user_id:me",
                            children: [],
                        },
                        {
                            id: 603,
                            name: "Set Setting",
                            url: "/user_settings/setSetting",
                            children: [],
                        },
                        {
                            id: 604,
                            name: "Organisations",
                            url: "/organisations/index",
                            children: [],
                        },
                        {
                            id: 605,
                            name: "Role Permissions",
                            url: "/roles/index",
                            children: [],
                        },
                    ],
                    [{
                        id: 606,
                        name: "List Object Templates",
                        url: "/attributes",
                        children: [],
                    }, ],
                    [{
                            id: 607,
                            name: "List Sharing Groups",
                            url: "/attributes",
                            children: [],
                        },
                        {
                            id: 608,
                            name: "Add Sharing Group",
                            url: "/attributes",
                            children: [],
                        },
                    ],
                ],
            },
            syncActions: { id: 7, name: "Sync Actions", url: "/", children: [] },
            administration: {
                id: 8,
                name: "Administration",
                url: "/admin/users/add",
                children: [
                    [{
                            id: 801,
                            name: "List Users",
                            url: "/spa/admin/users/index",
                            spa: true,
                            children: [],
                        },
                        {
                            id: 802,
                            name: "Add User",
                            url: "/spa/admin/users/add",
                            spa: true,
                            children: [],
                        },
                    ]
                ]
            },
            logs: { id: 9, name: "Logs", url: "/", children: [] },
            api: { id: 10, name: "API", url: "/", children: [] },
        };

        commit('setMenu', menuItems);
    },
};

const mutations = {
    setMenu: (state, menuItems) => (state.menuItems = menuItems),
};

export default {
    state,
    getters,
    actions,
    mutations
};