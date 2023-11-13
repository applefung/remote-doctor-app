import "./App.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import DoctorDetail from "./pages/Doctors/Detail";
import DoctorList from "./pages/Doctors";

// import { Provider } from "react-redux";

const router = createBrowserRouter([
  {
    path: "/doctors",
    element: <DoctorList />,
    // children: [
    //   {
    //     path: ':id',
    //     element: <DoctorDetail />
    //   }
    // ]
  },
  {
    path: "/doctors/:id",
    element: <DoctorDetail />,
  },
  {
    path: "*",
    element: <DoctorList />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
