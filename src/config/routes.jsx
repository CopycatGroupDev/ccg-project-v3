import { Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Labs from "../pages/Labs";
import Print from "../pages/Print";
import Shop from "../pages/Shop";
import Solutions from "../pages/Solutions";
import Sevres from "../pages/Sevres";
import Boulogne from "../pages/Boulogne";
import Comptoirs from "../pages/Comptoirs";
import About from "../pages/About";
import Contact from "../pages/Contact";
import RSE from "../pages/RSE";
import Mentions from "../pages/Mentions";
import Confi from "../pages/Confi";
import Admin from "../pages/Admin";

const routes = [
    {path: '/', element: <Home />},
    {path: '/admin', element: <Admin />},
    {path: '/solutions', element: <Solutions />},
    {path: '/shop', element: <Shop />},
    {path: '/print', element: <Print />},
    {path: '/labs', element: <Labs />},
    {path: '/comptoirs/', element: <Comptoirs />},
    {path: '/boulogne', element: <Boulogne />},
    {path: '/sevres', element: <Sevres />},
    {path: '/about', element: <About />},
    {path: '/contact', element: <Contact />},
    {path: '/rse', element: <RSE />},
    {path: '*', element: <Navigate to={'/'} />},
    {path: '/mentions', element: <Mentions />},
    {path: '/confidentialité', element: <Confi />},
];

export default routes;