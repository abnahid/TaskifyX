import AdminRoute from "@/context/AdminRoute";
import PrivateRoute from "@/context/PrivateRoute";
import AboutPage from "@/Page/AboutPage";
import BiodataDetailsPage from "@/Page/BiodataDetailsPage";
import ContactPage from "@/Page/ContactPage";
import ApprovedContactRequest from "@/Page/Dashboard/AdminHome/ApprovedContactRequest";
import CheckoutPage from "@/Page/Dashboard/Payment/CheckoutPage";
import PaymentHistory from "@/Page/Dashboard/Payment/PaymentHistory";
import EditBiodataPage from "@/Page/Dashboard/UserHome/EditBiodataPage";
import MyContactRequestPage from "@/Page/Dashboard/UserHome/MyContactRequestPage";
import MyFavouritesPage from "@/Page/Dashboard/UserHome/MyFavouritesPage";
import ViewBiodataPage from "@/Page/Dashboard/UserHome/ViewBiodataPage";
import MembershipPlansPage from "@/Page/MembershipPlansPage";
import UpcomingPage from "@/Page/UpcomingPage";
import { createBrowserRouter } from "react-router-dom";
import GotMarried from "../Page/Dashboard/UserHome/GotMarried";
import UserHome from "../Page/Dashboard/UserHome/UserHome";
import Dashboard from "./../layouts/Dashboard";
import MainLayout from "./../layouts/MainLayout";
import AppSidebar from "./../Page/Biodata/appSidebar";
import AdminHome from "./../Page/Dashboard/AdminHome/AdminHome";
import ApprovedPremium from "./../Page/Dashboard/AdminHome/ApprovedPremium";
import ManageUsers from "./../Page/Dashboard/AdminHome/ManageUsers";
import ErrorPage from "./../Page/ErrorPage";
import Home from "./../Page/Home";
import LoginPage from "./../Page/LoginPage";
import Register from "./../Page/Register";

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
          path: "/about-us",
          element: <AboutPage />,
        },
        {
          path: "/contact-us",
          element: <ContactPage />,
        },
        {
          path: "/biodatas",
          element: <AppSidebar />,
        },
        {
          path: "/biodata-details/:biodataId",
          element: (
            <PrivateRoute>
              <BiodataDetailsPage />
            </PrivateRoute>
          ),
          loader: ({ params }) =>
            fetch(
              `https://matrimony-nexus-server.vercel.app/biodatas/${params.biodataId}`
            ),
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
        {
          path: "/membership-plans-page",
          element:
            <PrivateRoute>
              <MembershipPlansPage />
            </PrivateRoute>
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/up-coming-page",
          element: <UpcomingPage />,
        },
        {
          path: "/checkout/:biodataId",
          element: (
            <PrivateRoute>
              <CheckoutPage />
            </PrivateRoute>
          ),
          loader: ({ params }) =>
            fetch(
              `https://matrimony-nexus-server.vercel.app/biodatas/${params.biodataId}`
            ),
        },
      ],
    },
    {
      path: "dashboard",
      element: (
        <PrivateRoute>
          <Dashboard />
        </PrivateRoute>
      ),
      errorElement: <ErrorPage />,
      children: [
        {
          path: "userHome",
          element: <UserHome />,
        },
        {
          path: "editBiodata",
          element: <EditBiodataPage />,
        },
        {
          path: "viewBiodata",
          element: <ViewBiodataPage />,
        },
        {
          path: "myContactRequests",
          element: <MyContactRequestPage />,
        },
        {
          path: "favouritesBiodata",
          element: <MyFavouritesPage />,
          loader: () =>
            fetch("https://matrimony-nexus-server.vercel.app/biodatas"),
        },
        {
          path: "paymentHistory",
          element: <PaymentHistory />,
        },
        {
          path: "GotMarried",
          element: <GotMarried />,
        },
        // admin Route
        {
          path: "adminHome",
          element: (
            <AdminRoute>
              <AdminHome />
            </AdminRoute>
          ),
        },
        {
          path: "manageUsers",
          element: (
            <AdminRoute>
              <ManageUsers />
            </AdminRoute>
          ),
        },
        {
          path: "approvedPremium",

          element: (
            <AdminRoute>
              <ApprovedPremium />
            </AdminRoute>
          ),
        },
        {
          path: "approvedContactRequests",
          element: (
            <AdminRoute>
              <ApprovedContactRequest />
            </AdminRoute>
          ),
        },
      ],
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
