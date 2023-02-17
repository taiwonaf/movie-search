import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Layout
import { IndexLayout } from "./components";
// pages
import { Home } from "./pages";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <IndexLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
