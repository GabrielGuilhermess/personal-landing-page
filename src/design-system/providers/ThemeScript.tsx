const themeScript = `(function(){var t=localStorage.getItem("portfolio-theme");if(!t)t=matchMedia("(prefers-color-scheme:dark)").matches?"dark":"light";document.documentElement.classList.toggle("dark",t==="dark")})()`;

export default function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: themeScript }} />;
}
