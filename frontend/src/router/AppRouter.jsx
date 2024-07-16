import { createBrowserRouter } from "react-router-dom";
import { Register, ErrorPage  } from "../pages"
import { RegisterComponente } from "../components/register/RegisterComponente2";
import { AuthUser } from "../pages/AuthUser";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Register />,
        errorElement: <ErrorPage />
    },
    {
		path: 'auth',
		element: <AuthUser />,
		errorElement: <ErrorPage />,
	},
    {
        path: "/register",
        element: <RegisterComponente />,
        errorElement: <ErrorPage />
    },
])