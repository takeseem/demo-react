'use client';

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { myRepo, projects } from "../../lib/placeholder-data";
import styles from "./demo.module.css";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function SideNav() {
  const pathname = usePathname();
  return (
    <div className={styles.sideNav}>
      <Link href="/" className={clsx(
            styles.logoLink,
            {
              'text-blue-700': pathname === '/demo',
            },
            {
              'hover:text-blue-600': pathname !== '/demo',
            },
          )}>
        <FontAwesomeIcon icon={faGlobe} className="rotate-[15deg]" />
        <p>Demo React</p>
      </Link>
      <NavLinks />
      <div className="grow"/>
      <div>
        <Link href={myRepo} className={styles.navLink} target="_blank">
          <FontAwesomeIcon icon={faGithub} className="rotate-[15deg]" /> demo-react
        </Link>
        <div/>
      </div>
    </div>
  );
}

function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {projects.map((project) => {
        return (
          <Link key={project.id} href={project.href} className={clsx(
            styles.navLink,
            {
              'text-blue-600': pathname === project.href,
            },
            {
              'hover:text-blue-600': pathname !== project.href,
            },
          )}>
            {project.icon &&
              <FontAwesomeIcon icon={project.icon} />
            }
            <p>{project.name}</p>
          </Link>
        );
      })}
    </>
  );
}