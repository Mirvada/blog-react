import App from "app/App";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { createBrowserRouter } from "react-router";

export const routes = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: MainPage },
      { path: "about", Component: AboutPage },
    ],
  },
]);3