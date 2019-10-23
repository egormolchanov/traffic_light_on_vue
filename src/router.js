import VueRouter from 'vue-router'
import Red from './components/Red'
import Green from './components/Green'
import Yellow from './components/Yellow'

export default new VueRouter({
    routes: [
        {
            path: '/red',
            component: Red
        },
        {
            path: '/green',
            component: Green
        },
        {
            path: '/yellow',
            component: Yellow
        },
    ],
    mode: 'history'
})