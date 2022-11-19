# VuePress2-demo

## What is it?（本项目是啥）

It is an example of a static document site built based on [VuePress 2.x](https://github.com/vuepress/vuepress-next) to help you quickly obtain a document project with basic configuration, just run it.

它是基于 VuePress2.x 搭建的一个静态文档站点示例，帮助你快速获得一个已经做好基本配置的文档项目，只需运行就可以。


---
## How to use it?（如何使用）

### 1. Clone to local（克隆到本地）

```sh
# clone repo
git clone git@github.com:Barry-Flynn/VuePress2-demo.git

# install dependencies
yarn install
```

### 2. Run Development Command（运行开发命令）

```sh
# run development command
yarn docs:dev
```

The document site enables the hot load service at [http://localhost:8080/](http://localhost:8080/) by default.

文档站点默认在 [http://localhost:8080/](http://localhost:8080/) 启用热加载服务。

### 3. Adjust content as needed（按需调整内容）

Go to [VuePress 2.x official website](https://v2.vuepress.vuejs.org/) and adjust the configuration and directory structure according to your needs.

前往 [VuePress 2.x 官网](https://v2.vuepress.vuejs.org/)，按照你的需要调整配置和目录结构。

### 4. Packaging and Deployment（打包和部署）

```sh
# run packaging command
yarn docs:build
```

The packaged page will be in the `docs/.vuepress/dist/` directory by default. You can refer to the official website and deploy it to the appropriate server.

打包后的页面默认会在 `docs/.vuepress/dist/` 目录，你可以参考官网，部署到适当的服务器。


---
## Anything else to watch out for?（其他注意点）

- This project has configured the basic directory structure of documents in many languages for you, such as Chinese in `/zh` and English in `/en`. You can modify the default language in the configuration file `/.vuepress/config.ts`.

  > 本项目已为你配置好多语言文档的基本目录结构，比如中文在 `/zh` ，英文在 `/en`，你可以在配置文件 `/.vuepress/config.ts` 中修改默认语言。

- In order to maintain the juxtaposition and intuitiveness of multiple document directories, I put the files related to the default language in a separate directory instead of the docs root directory. This means that you need to keep `docs/README.md` exactly the same as `docs/zh/README.md` in the default language folder. However, this is not complicated. You just need to replace the `docs/READMEmd` in the root directory every time you change the `docs/zh/READMEmd` in the default language folder.
  
  > 为了保持多文档目录的并列性和直观性，我将默认语言的相关文件也放在了一个单独的目录中，而不是放在 docs 根目录里。这就意味着你需要保持 `docs/READMEmd` 和默认语言文件夹下的 `docs/zh/READMEmd` 一模一样。但这并不复杂，你只需在每次修改了默认语言文件夹下的 `docs/zh/READMEmd` 后，将根目录下的 `docs/READMEmd` 也替换掉即可。
