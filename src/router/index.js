import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/overview',
    children: [{
      path: 'overview',
      name: 'Overview',
      component: () => import('@/views/overview/index'),
      meta: { title: '总体情况总览', icon: 'dashboard', activeMenu: 'overview' }
    }]
  },

  {
    path: '/tracing',
    component: Layout,
    redirect: '/tracing/page1',
    name: 'Tracing',
    meta: { title: '报警救援全程跟踪', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'page1',
        name: 'Tracing1',
        component: () => import('@/views/tracing/page1'),
        meta: { title: '跟踪页面', icon: 'table', activeMenu: 'tracing' }
      },
      {
        path: 'page2',
        name: 'Tracing2',
        component: () => import('@/views/tracing/page2'),
        meta: { title: '跟踪页面-进行中', icon: 'tree', activeMenu: 'tracing' }
      }
    ]
  },

  {
    path: '/workorder',
    component: Layout,
    children: [
      {
        path: '',
        name: 'WorkOrder',
        component: () => import('@/views/workorder/index'),
        meta: { title: '指派工单', icon: 'link', activeMenu: 'tracing' }
      }
    ]
  },

  {
    path: '/records',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Records',
        component: () => import('@/views/records/index'),
        meta: { title: '报警日志', icon: 'form', activeMenu: 'records' }
      }
    ]
  },

  {
    path: '/history',
    component: Layout,
    children: [
      {
        path: '',
        name: 'History',
        component: () => import('@/views/history/index'),
        meta: { title: '救援历史记录', icon: 'form', activeMenu: 'history' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
