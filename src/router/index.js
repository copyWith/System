import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Index from '@/components/Index'
import New from '@/components/New'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Login',
            component: Login
        },
        {
            path: '/Index',
            name: 'Index',
            component: Index,
            children: [
                {
                    path: '/Index/',
                    name: 'New',
                    component: New
                }
            ]
        }

    ]
})
