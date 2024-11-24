import type { Metadata } from "next";
import "../ui/globals.css";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import SideNav from "../ui/demo/SideNav";
import styles from "../ui/demo/demo.module.css";

config.autoAddCss = false

export const metadata: Metadata = {
  title: "Demo 项目演示",
  description: "Demo 项目演示",
};

export default function Layout({ children, }: { children: React.ReactNode }) {
  return (
    <div className={styles.demoApp}>
      <SideNav />
      <div className={styles.demoMain}>
        {children}
      </div>
    </div>
  );
}
