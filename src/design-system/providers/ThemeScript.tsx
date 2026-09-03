import Script from "next/script";

const themeScript = `(function(){var t;try{t=localStorage.getItem("portfolio-theme")}catch(e){}if(t!=="light"&&t!=="dark")t=matchMedia("(prefers-color-scheme:dark)").matches?"dark":"light";var r=document.documentElement;r.classList.toggle("dark",t==="dark");r.style.colorScheme=t})()`;

export default function ThemeScript() {
  return (
    <Script
      id="theme-initialization"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{ __html: themeScript }}
    />
  );
}
