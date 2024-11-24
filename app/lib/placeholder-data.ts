import { faHashtag } from "@fortawesome/free-solid-svg-icons";
import { Project } from "./definitions";


const gameTtt: Project = {
  id: 'game-ttt',
  name: '井字棋游戏',
  desc: '本项目来自于 React 官方快速入门教程：井字棋游戏。',
  href: '/demo/game-ttt',
  icon: faHashtag,
};

const projects: Project[] = [
  gameTtt,
];

export { projects, gameTtt };