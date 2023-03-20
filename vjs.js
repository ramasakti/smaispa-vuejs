const routes = [
    {
        path: '/dashboard',
        component: dashboard,
    },
    {
        path: '/web',
        component: web
    },
    {
        path: '/item',
        component: item
    },
]

const router = new VueRouter({
    routes
})

const data = {
    url: window.location.hash,
}

const vjs = new Vue({
    el: '#app',
    router,
    data,
    methods: {
        leftnav() {
            document.getElementsByClassName('nav-btn pull-left')[0].click()
        }
    }
})