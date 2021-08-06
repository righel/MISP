import { createRouter, createWebHistory } from 'vue-router'
import Me from '../views/Users/Me'
import AddUser from '../views/Users/Add'
import IndexUsers from '../views/Users/Index'

const routes = [{
        path: '/spa',
        name: 'Me',
        component: Me
    },
    {
        path: '/spa/users/view/me',
        name: 'Users',
        component: Me,
    },
    {
        path: '/spa/admin/users/index',
        name: 'IndexUsers',
        component: IndexUsers,
    },
    {
        path: '/spa/admin/users/add',
        name: 'AdminAddUser',
        component: AddUser,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router