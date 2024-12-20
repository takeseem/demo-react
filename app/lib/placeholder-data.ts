import { faBrain, faHandshake, faHashtag, faStore, faT } from "@fortawesome/free-solid-svg-icons";
import { Project } from "./definitions";
import { faUikit } from "@fortawesome/free-brands-svg-icons";

const myBlog = "https://www.takeseem.com";
const myRepo = "https://github.com/takeseem/demo-react";
const myRepoMain = myRepo + "/tree/main";
const myRepoCommitMain = myRepo + "/commits/main";
const myRepoBlameMain = myRepo + "/blame/main";

const gameTtt: Project = {
  id: 'game-ttt',
  name: '井字棋游戏',
  desc: '本项目来自于 React 官方快速入门教程：井字棋游戏。本教程将引导你逐步实现一个简单的井字棋游戏，并且不需要你对 React 有任何了解。在此过程中你会学习到一些编写 React 程序的基本知识，完全理解它们可以让你对 React 有比较深入的理解。',
  href: '/demo/game-ttt',
  icon: faHashtag,
  pagePath: "/app/demo/game-ttt/page.tsx",
  link: "https://zh-hans.react.dev/learn/tutorial-tic-tac-toe",
};

const reactThink: Project = {
  id:'react-think',
  name: 'React 哲学',
  desc: '本项目来自于 React 官方文档：React 哲学。',
  href: '/demo/react-think',
  icon: faBrain,
  pagePath: "/app/demo/react-think/page.tsx",
  link: `${myBlog}/code/fe/react/react-think.html`,
};

const reactTypeScript: Project = {
  id: 'react-typescript',
  name: '使用 TypeScript',
  desc: 'TypeScript 是一种向 JavaScript 代码添加类型定义的常用方法，天然支持 JSX。',
  href: '/demo/react-typescript',
  icon: faT,
  pagePath: "/app/demo/react-typescript/page.tsx",
  link: "https://zh-hans.react.dev/learn/typescript",
};

const reactJsx: Project = {
  id: 'react-jsx',
  name: '描述 UI',
  desc: 'React 是一个用于构建用户界面（UI）的 JavaScript 库，用户界面由按钮、文本和图像等小单元内容构建而成。React 帮助你把它们组合成可重用、可嵌套的 组件。从 web 端网站到移动端应用，屏幕上的所有内容都可以被分解成组件。在本章节中，你将学习如何创建、定制以及有条件地显示 React 组件。',
  href: '/demo/react-jsx',
  icon: faUikit,
  pagePath: "/app/demo/react-jsx/page.tsx",
  link: `${myBlog}/code/fe/react/react-learn-01-ui.html`,
};

const reactAddInter: Project = {
  id: 'react-add-inter',
  name: 'React 交互',
  desc: '界面上的控件会根据用户的输入而更新。例如，点击按钮切换轮播图的展示。在 React 中，随时间变化的数据被称为状态（state）。你可以向任何组件添加状态，并按需进行更新。在本章节中，你将学习如何编写处理交互的组件，更新它们的状态，并根据时间变化显示不同的效果。',
  href: '/demo/react-add-inter',
  icon: faHandshake,
  pagePath: "/app/demo/react-add-inter/page.tsx",
  link: `${myBlog}/code/fe/react/react-learn-02-add-inter.html`,
};

const reactState: Project = {
  id: 'react-state',
  name: 'React 状态管理',
  desc: '随着你的应用不断变大，更有意识的去关注应用状态如何组织，以及数据如何在组件之间流动会对你很有帮助。冗余或重复的状态往往是缺陷的根源。在本节中，你将学习如何组织好状态，如何保持状态更新逻辑的可维护性，以及如何跨组件共享状态。',
  href: '/demo/react-state',
  icon: faStore,
  pagePath: "/app/demo/react-state/page.tsx",
  link: `${myBlog}/code/fe/react/react-learn-03-state.html`,
};

const reactEscape: Project = {
  id: 'react-escape',
  name: 'React 脱围机制',
  desc: 'Escape Hatches：有些组件可能需要控制和同步 React 之外的系统。例如，你可能需要使用浏览器 API 聚焦输入框，或者在没有 React 的情况下实现视频播放器，或者连接并监听远程服务器的消息。在本章中，你将学习到一些脱围机制，让你可以“走出” React 并连接到外部系统。大多数应用逻辑和数据流不应该依赖这些功能。',
  href: '/demo/react-escape',
  icon: faStore,
  pagePath: "/app/demo/react-escape/page.tsx",
  link: `${myBlog}/code/fe/react/react-learn-04-escape.html`,
};


const projects: Project[] = [
  gameTtt, reactThink, reactTypeScript, reactJsx, reactAddInter, reactState,
  reactEscape, 
];

export {
  myBlog, myRepo, myRepoMain, myRepoCommitMain, myRepoBlameMain,
  projects, gameTtt, reactThink, reactTypeScript, reactJsx, reactAddInter,
  reactState, reactEscape, 
 };