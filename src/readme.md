- react 项目初始化之优化
    1. git 版本控制系统也是工程化的一部分
    2. 开源思维 找 + 供
    3. 加速

- 页面layout
    App 组件
    1. 页面级别组件共享布局方案
        header + 动态路由租价（Routes + Route path） + footer

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
    document.documentElement.style.fontSize = document.documentElement.clientWidth / 3.75 + "px"
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



##  Link组件自动创建a标签，附带histroy功能
