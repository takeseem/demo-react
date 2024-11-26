import { faBrain, faHashtag } from "@fortawesome/free-solid-svg-icons";
import { Project } from "./definitions";

const myBlog = "https://www.takeseem.com";
const myRepo = "https://github.com/takeseem/demo-react";

const gameTtt: Project = {
  id: 'game-ttt',
  name: '井字棋游戏',
  desc: '本项目来自于 React 官方快速入门教程：井字棋游戏。',
  href: '/demo/game-ttt',
  icon: faHashtag,
};

const reactThink: Project = {
  id:'react-think',
  name: 'React 哲学',
  desc: '本项目来自于 React 官方文档：React 哲学。',
  href: '/demo/react-think',
  icon: faBrain,
};

const projects: Project[] = [
  gameTtt, reactThink
];

export { myBlog, myRepo, projects, gameTtt, reactThink };