- react 项目初始化之优化
    1. git 版本控制系统也是工程化的一部分
    2. 开源思维 找 + 供
    3. 加速

- 页面layout
    App 组件
    1. 页面级别组件共享布局方案
        header + 动态路由租价（Routes + Route path） + footer
    2. 二级路由 layout 升级 
        使用 <Outlet />
        - 在路由配置中，一级路由 children
            可以设置多个二级路由
        - context 上下文环境
            Route.context
            path -> 二级路由 Order

- header 组件的版本化及配置
    1. 页面中layout 固定部分，不属于页面组件的内部，属于layout
    2. BOM location.pathname 第一版本

- 图标字体库
    1. font-awesome
        方便，缺点：没有制定性
    2. iconfont 网站找，下载代码包
        - iconfont 添加到项目 下载到本地 放入项目assets/fonts目录
        - import './assets/font/iconfont.css'
        - <i className="iconfont icon-shouye"></i>
    3. 先快实现，后慢优化

- tabbar 底栏组件
    1. 属于App，不属于任何页面组件
    2. Link location active
        classname 字体也会变色（图标也属于文字）&.active{color: }
    3. flex:1 + 内部flex-direction: column
        外部flex：多个a标签
        内部flex：图标 + 汉字纵向居中

- 切页面之前 移动端先自适应页面
    html fontSize 动态计算
    `document.documentElement.style.fontSize = document.documentElement.clientWidth / 3.75 + "px"`
    不要用px 用rem

- 城市选择功能
    1. city.json 城市数据(fastmock)
        - 缺点：每次需要重新请求数据
        - 下一个版本使用配置文件
            缺点：项目包有点大，启动慢
    2. 接口都放在 api/requset 方便管理
    3. Link to 复杂版本接受一个对象
        {
            pathname: '/home',
            search: `name=${item.nm}`
        }
        import { useSearchParams } from 'react-router-dom'
        const [search] = useSearchParams()
        const cityName = search.get('name') || ''

- 子组件不做数据请求，由父组件统一传过来
    子组件不做复杂状态，用props 传过来

- 幻灯片功能
    1. 使用了swiper
    2. 全局引用css
    3. 固定的html 结构
        .swiper-container > .swiper-wrapper > .swiper.slide{n} 
        .swiper-pagination 分页 
    4. 组件化挂在后 useEffect
        实现幻灯片功能 `new Swiper('.btn_banners')`
    5. 遇到的问题
        pagination 不太好用
        Swiper 被实例化多次
        使用useEffect 第二个参数为[] --> 执行一次
        全局变量 swiper 实例化前判断一下是否为空

- 仿站原则与做法
    1. 想去哪家公司就访哪家
    2. 首页一模一样
        但又不用完全实现
    3. 不重要的的功能切页面
    4. 不要让动态部分影响页面加载
        固定高度 rem = 本身高度 / html高度
    5. styled-components生成的类名为何是乱码？

- css in js 类名逻辑
    1. 多人协作时，类名可能发生冲突
    2. 组件
        - 页面级别组件
        - npm 第三方组件
        - 一般组件
        - 通用组件
        - 样式组件
        ...
    3. style-components 
        生成hash 类名 绝对不冲突
        最外层就好
    4. 在jsx 里直接写 className="demo" 没有生成hash 类名的能力
        styled-components 等 css in js 时，就可以

- 开发套路及最优方案
    1. 接口都放在api 目录下
    2. 接口请求在路由级别组件发生，子组件不用去做
    3. 子组件只负责jsx 提供和styled-components css in js
    4. font-awesome 图标很多

- 延迟加载路由组件
    1. 引入文件，会立即执行
    2. 只需要首页一个组件
        如果可以少加载一点，首页打开更快
    3. 但是 router 配置所有路由
    4. React.lazy 延迟按需（切换路由）加载
        `const HomeDetail = lazy(() => import('./pages/HomeDetail'))`
            非首页 其他页面级别路由应采用按需加载
    5. 延迟加载组件，要为其提供Suspense
        react 提供一个组件，在还没有加载js 组件前，可以先用fallback 提供加载等待，增强界面友好度

- antd-mobile 
    antd 的移动版 手机版
    1. NavBar
    2. navigate(-1)

- 单页应用tabbar 不显示功能开发调试
    1. 有些二级页面
    2. 完全匹配
    3. 部分匹配 lastIndexOf 动态路由
        - 正则
            `/^(\/[\w]+)\//`
    4. bug 过程
        forEach来做
            每一项都有一个执行函数，return 不会终止外部函数的运行
            断点调试 解决
    5. 项目记录里最好有一个断点调试说明

- 工具函数库 lodash
    跨应用实现
    请写注释
    上班前期多写注释 

- 最佳项目模板，添加一个routes 文件夹
    SPA 专属的
    1. 专门处理路由，方便管理
        routes/index.jsx 路由地图
    2. 组件化思维，封装成组件就可以抽离，
        以一个组件引入
    3. 精简首页，方便管理
        layout 没有污染首页

- 当组件深度比较大时
    相对路径变得复杂
    工程化 vite 支持
        vite.config.js 配置 路径别名
    resolve: {
        alias: {
        // "@": "/src" 第二种写法
        "@": path.resolve(__dirname, 'src')
        // __dirname  物理路径，根目录地址
        }
    }

- NavLink 比Link 更专业
    比如要给激活路由（active）添加样式时
    二级路由里，使用useEffect + NavLink


##  Link组件自动创建a标签，附带histroy功能
