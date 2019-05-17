import Vue from 'vue';
import VueRouter from 'vue-router';
import Top from './views/Top.vue';
import Upload from './views/Upload.vue';

Vue.use(VueRouter);
const routes = [
    {
        path: '/',
        name: 'top',
        component: Top
    },
    {
        path: '/upload',
        name: 'upload',
        component: Upload
    },
];

export default new VueRouter({
    routes: routes
});
