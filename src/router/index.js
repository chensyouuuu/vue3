import { createRouter, createWebHistory,RouterView } from 'vue-router'


//注册路由
const routes = [
    {
        path: '/',
        name: '首页',
        component: () => import('../view/index.vue'),
        meta:{title:"首页"}
    },
    {
        path: '/demo1',
        name: 'demo1',
        component: () => import('../view/demo1.vue')
    },
    {
        path: '/demo2',
        name: 'demo2',
        component: RouterView,
        children:[
            {
                path:"child1",
                name:'child1',
                component: () => import('../view/demo2/child1.vue'),
            },
            {
                path:"child2",
                name:'child2',
                component: () => import('../view/demo2/child2.vue'),
            }
        ]
    },
    {
        path: '/demo3',
        name: 'echarts',
        component: () => import('../view/demo3.vue')
    },
    {
        path: '/demo4',
        name: 'demo4',
        component: () => import('../view/demo4.vue')
    },
    
];
const router = createRouter({
    // createWebHashHistory()是使用hash模式路由
    // createWebHistory()是使用history模式路由
    history: createWebHistory(),
    routes
});

export default router;