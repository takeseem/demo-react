'use client';

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { projects } from "../../lib/placeholder-data";
import styles from "./demo.module.css";
import { usePathname } from "next/navigation";
import clsx from "clsx";

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