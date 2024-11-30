import { faBrain, faHandshake, faHashtag, faT } from "@fortawesome/free-solid-svg-icons";
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

const projects: Project[] = [
  gameTtt, reactThink, reactTypeScript, reactJsx, reactAddInter,
];

export {
  myBlog, myRepo, myRepoMain, myRepoCommitMain, myRepoBlameMain,
  projects, gameTtt, reactThink, reactTypeScript, reactJsx, reactAddInter,
 };