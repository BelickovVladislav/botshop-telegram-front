import VueRouter from 'vue-router';
import HelloWorld from './components/HelloWorld';
import CatalogOfGoods from '@/app/pages/catalog-of-goods/catalog-of-goods';

export const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: HelloWorld },
        { path: '/catalog-of-goods', component: CatalogOfGoods }
    ],
})
