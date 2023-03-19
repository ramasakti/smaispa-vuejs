const index = {
    template: `<h1>Index</h1>`
}

const kontak = {
    template: `<h1>Kontak</h1>`
}

const item = {
    template: `<h1>Item</h1>`
}

const routes = [
    {
        path: '/',
        component: index
    },
    {
        path: '/kontak',
        component: kontak
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

}

const vjs = new Vue({
    el: '#app',
    router,
    data,
    methods: {

    }
})