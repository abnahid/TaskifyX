import PrivateRoute from "@/context/PrivateRoute";
import About from "@/Page/About";
import AddTask from "@/Page/AddTask";
import ContactPage from "@/Page/ContactPage";
import LoginPage from "@/Page/LoginPage";
import Register from "@/Page/Register";
import Tasks from "@/Page/Tasks";
import TasksUpdate from "@/Page/TasksUpdate";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../Page/ErrorPage";
import Home from "../Page/Home";


const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "addtask",
          element: <AddTask />,
        },
        {
          path: "tasks",
          element: <Tasks />,
        },
        {
          path: "/tasks/update/:id",
          element: (
            <PrivateRoute>
              <TasksUpdate />
            </PrivateRoute>
          ),
        },
        {
          path: "contact",
          element: <ContactPage />,
        },
        {
          path: "about-us",
          element: <About />,
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
        {
          path: "/register",
          element: <Register />,
        },

      ]
    },

  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

export default router;
