import "@/styles/global.css";

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
