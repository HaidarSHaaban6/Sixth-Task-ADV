import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import BlogPage from "./Pages/BlogPage/BlogPage.tsx";
import RecentBlogPostsPage from "./Pages/RecentBlogPostsPage/RecentBlogPostsPage.tsx";
import NewsletterPage from "./Pages/NewsletterPage/NewsletterPage.tsx";
import store from "./Redux/Store";
import { Provider } from "react-redux";
import AboutPage from "./Pages/AboutPage/AboutPage.tsx";
import ProjectsPage from "./Pages/ProjectsPage/ProjectsPage.tsx";
import NavBarComponent from "./Components/NavBarComponent/NavBarComponent.tsx";

const router = createBrowserRouter([
  { path: "/", element: <BlogPage /> },
  { path: "/blog/:id", element: <RecentBlogPostsPage /> },
  { path: "/newsletter", element: <NewsletterPage /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/projects", element: <ProjectsPage /> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
