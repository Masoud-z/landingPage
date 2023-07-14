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
      <footer className="mt-[30vh] px-[10%] py-[10vh] bg-slate-800 flex justify-between items-center text-slate-500">
        <div className="logo">Masoud</div>
        <p className="font-normal text-xs ">© Masoud. All rights reserved.</p>
      </footer>
    </html>
  );
}

export default layout;
