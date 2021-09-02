# ADui Blog Website
> 个人博客站，前端项目

## 项目架构
> [Vue 3.0](https://v3.cn.vuejs.org/)
> 
> [Ant Design of Vue 2.x](https://2x.antdv.com/components/overview-cn/)

## 项目运行
```shell
$ git clone https://gitee.com/aduia/adui-blog-website.git
$ cd /adui-blog-website
$ npm install
$ npm run serve
```
## 项目结构
```
|-- adui-blog-website
    |-- .browserslistrc
    |-- .gitignore
    |-- babel.config.js
    |-- LICENSE
    |-- package-lock.json
    |-- package.json
    |-- README.md
    |-- tsconfig.json
    |-- tslint.json
    |-- vue.config.js
    |-- public
    |   |-- favicon.ico
    |   |-- index.html
    |-- src
        |-- App.vue
        |-- main.ts
        |-- settings.js
        |-- shims-vue.d.ts
        |-- api 接口集合
        |-- assets 资源文件
        |-- components 自定义组件
        |   |-- TransparentCard.vue
        |   |-- charts
        |       |-- CalendarChart.vue
        |-- icon 图标文件
        |-- layout
        |   |-- AppMain.vue
        |   |-- Footer.vue
        |   |-- Header.vue
        |   |-- Index.vue
        |-- router 路由文件
        |   |-- index.ts
        |-- store
        |   |-- index.ts
        |-- styles 样式文件
        |   |-- index.less
        |   |-- loading.css
        |   |-- normalize.css
        |   |-- scrollbar.less
        |   |-- variable.less
        |-- svg
        |   |-- gitee.svg
        |-- utils axios配置文件
        |   |-- request.ts
        |-- views
            |-- Article
            |   |-- Details.vue
            |   |-- Index.vue
            |   |-- Miscellaneous.vue
            |-- Home
                |-- Article.vue
                |-- Index.vue
                |-- Info.vue
                |-- Miscellaneous.vue
```
© ADui
