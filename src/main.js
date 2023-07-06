import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import './style.css'
import App from './App.vue'
import Landing from "./routes/Landing.vue";
import Products from './routes/Products.vue'
import Resources from './routes/Resources.vue'
import Token from './routes/Token.vue'
import About from './routes/About.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'Landing', component: Landing},
        {path: '/products', name: 'Products', component: Products},
        {path: '/resources', name: 'Resources', component: Resources},
        {path: '/token', name: 'token', component: Token},
        {path: '/about', name: 'about', component: About},

    ]
})


createApp(App)
    .use(router)
    .mount('#app')
