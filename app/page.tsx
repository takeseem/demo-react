import Link from "next/link";
import styles from './ui/home.module.css';


export default function Home() {

  const curYear = new Date().getFullYear();

  return (
    <div className="app">
      <header className="app-header">
        <h1>Demo React</h1>
      </header>
      <main className="app-main">
        <ProjectsContainer />
      </main>
      <footer className="app-footer">
          <span>
            © {curYear} <a href="https://www.takeseem.com" target="_blank" className="text-lg">TAKESEEM</a>&nbsp;
            基于 <a href="https://nextjs.org">Next.js</a> 和 <a href="https://tailwindcss.com">Tailwind CSS</a> 构建
          </span>
          <span>
            <a href="https://github.com/takeseem/demo-react">GitHub</a>
          </span>
      </footer>
    </div>
  );
}

function ProjectsContainer() {

  const projects = [
    { title: '井字棋游戏', desc: '本项目来自于 React 官方快速入门教程：井字棋游戏。', href: '/game-ttt' },
  ];

  return (
    <div className={styles.projectsPanel}>
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
}

function ProjectCard({ title, desc, href }: { title: string; desc: string, href: string }) {
  return (
    <Link href={href} className={styles.projectCard}>
      <h2 className="text-lg font-semibold text-gray-100">{title}</h2>
      <p className="mt-2 text-gray-400">{desc}</p>
    </Link>
  );
}