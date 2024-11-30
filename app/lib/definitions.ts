import { IconProp } from "@fortawesome/fontawesome-svg-core";

export type Project = {
  id: string;
  name: string;
  desc: string;
  href: string;
  icon: IconProp;
  pagePath: string;
  link: string;
}

const h1Style = { fontSize: "1.5rem", fontWeight: "bold", };
const btnStyle = {
  border: "1px solid gray",
  borderRadius: "0.5rem",
  padding: "0.5rem"
};

export { h1Style, btnStyle };