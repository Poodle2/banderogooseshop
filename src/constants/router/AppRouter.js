import {createBrowserRouter} from "react-router-dom";
import {Layout} from "../layout/Layout";
import {Pages} from "../../pages/Pages";
import {TableOrder} from "../table/TableOrder";

export const AppRouter = createBrowserRouter([{
        path: '/',
        element: <Layout/>,
        children: [
            {
                element: <Pages/>,
                index: true
            },
            {
                element: <TableOrder/>,
                path: '/order'
            }
        ]
    }]
)