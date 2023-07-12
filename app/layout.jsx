import "@/styles/global.css";

export const metadata = {
  title: "Landing page",
  description: "Develop a landing page as  a task challenge",
};

function layout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="px-[10%]">{children}</main>
      </body>
    </html>
  );
}

export default layout;
