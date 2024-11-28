import { faBrain, faHashtag, faT } from "@fortawesome/free-solid-svg-icons";
import { Project } from "./definitions";

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

const projects: Project[] = [
  gameTtt, reactThink, reactTypeScript,
];

export {
  myBlog, myRepo, myRepoMain, myRepoCommitMain, myRepoBlameMain,
  projects, gameTtt, reactThink, reactTypeScript,
 };