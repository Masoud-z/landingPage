import "@/styles/global.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export const metadata = {
  title: "Landing page",
  description: "Develop a landing page as  a task challenge",
};

function layout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

export default layout;
