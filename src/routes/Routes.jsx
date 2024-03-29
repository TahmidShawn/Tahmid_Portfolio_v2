import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Home from "../pages/Home/Home";


const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [{
            path: '/',
            element: <Home></Home>
        }]
    }
])
export default Routes;