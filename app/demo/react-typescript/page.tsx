'use client';

import { reactTypeScript } from "@/app/lib/placeholder-data";
import { ProjectPageInfo } from "@/app/ui/demo/ProjectPageInfo";


export default function Page() {
  return (
    <main>
      <ProjectPageInfo project={reactTypeScript} />
    </main>
  );
}
