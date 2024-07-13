import { createBrowserRouter } from "react-router-dom";
import { Register, ErrorPage  } from "../pages"
import { RegisterComponente } from "../components/register/Register";
import { LoaderComponent } from "../Loader/Loader";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Register />,
        errorElement: <ErrorPage />
    },
    {
        path: "/register",
        element: <RegisterComponente />,
        errorElement: <ErrorPage />
    },
])