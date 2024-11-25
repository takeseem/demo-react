import Link from "next/link";
import styles from './ui/home.module.css';
import { projects } from './lib/placeholder-data';
import { Project } from "./lib/definitions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";


export default function Home() {

  const curYear = new Date().getFullYear();

  return (
    <div className="app">
      <header className="app-header">
        <h1>Demo React</h1>
        <Link href="../" className="app-back">
          <FontAwesomeIcon icon={faHouse} />
          TAKESEEM
        </Link>
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
  return (
    <div className={styles.projectsPanel}>
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
}

function ProjectCard(project: Project) {
  return (
    <Link href={project.href} className={styles.projectCard}>
      <h2 className="text-lg font-semibold text-gray-100">{project.name}</h2>
      <p className="mt-2 text-gray-400">{project.desc}</p>
    </Link>
  );
}