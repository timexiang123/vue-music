export default [
    {
        path:"/",
        redirect:"/recommend"
    },
    {
        path:"/recommend",
        component:()=>import("../views/recommend/recommend")
    },
    {
        path:"/singer",
        component:()=>import("../views/singer/singer-list")
    },
    {
        path:"/top-list",
        component:()=>import("../views/top/top-list")
    },
    {
        path:"/search",
        component:()=>import("../views/search/search")
    },
    {
        path:"*",
        redirect: "/"
    }
]
