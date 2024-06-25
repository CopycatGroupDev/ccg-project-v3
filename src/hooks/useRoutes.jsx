import { Route, Routes, useNavigate } from "react-router-dom";
import routes from "../config/routes";

export default function useRoutes() {
    return {
        Routes : () => <Routes>
            {routes.map(({ path, element }) => <Route
                key={path}
                path={path}
                element={element}
            />)}
        </Routes>,
        routes,
        navigate : useNavigate(),
        get: (path) => routes.find(route => route.path === path)
    }
}