import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import "./style.scss";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Profile from "./pages/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="app">
        <div className="container">
          <RouterProvider router={router} />
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
