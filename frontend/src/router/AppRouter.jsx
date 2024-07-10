import { createBrowserRouter } from "react-router-dom";
import { Register, ErrorPage  } from "../pages"


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Register />,
        errorElement: <ErrorPage />
    }
])