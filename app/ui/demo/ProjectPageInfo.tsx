'use client';

import { Project } from "@/app/lib/definitions";
import { myRepoBlameMain, myRepoCommitMain, myRepoMain } from "@/app/lib/placeholder-data";
import { faGithub, faRev } from "@fortawesome/free-brands-svg-icons";
import { faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export function ProjectPageInfo({ project }: { project: Project }) {
  return (
    <div className='p-4'>
      <Link href={project.link} target="_blank">
        <FontAwesomeIcon icon={project.icon} className="rotate-[15deg]" /> {project.name}
      </Link>
      <div className="p-4 max-w-md">
        {project.desc}
      </div>
      <div>
        <div>
          <Link href={myRepoMain + project.pagePath} target="_blank">
            <FontAwesomeIcon icon={faGithub}/>
            {' '}源码：<code>{project.pagePath}</code>
          </Link>
        </div>
        <div>
          <Link href={myRepoBlameMain + project.pagePath} target="_blank">
            <FontAwesomeIcon icon={faRev} />
            {' '}Blame
          </Link>
        </div>
        <div>
          <Link href={myRepoCommitMain + project.pagePath} target="_blank">
            <FontAwesomeIcon icon={faClockRotateLeft} />
            {' '}提交记录
          </Link>
        </div>
      </div>
    </div>
  );
}
