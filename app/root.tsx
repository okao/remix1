import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "@remix-run/react";
import stylesheet from "~/tailwind.css";
import customStyles from "~/index.css";
import { type IStaticMethods } from "preline/preline";
import { useEffect } from "react";
import SideBar from "~/components/layout/sidebar";
import AdBanner from "./components/layout/adBanner";


// export const links: LinksFunction = () => [
//   { rel: "stylesheet", href: stylesheet },
// ];

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  { rel: "stylesheet", href: customStyles },
];


declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}
if (typeof window !== "undefined") {
  require("preline/preline");
}

export default function App() {
  const location = useLocation();

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);

  return (
    <html lang="dv" dir="rtl">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div className="mx-auto lg:w-[86%] h-screen">
          <AdBanner />
          <SideBar />
          <Outlet />
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
