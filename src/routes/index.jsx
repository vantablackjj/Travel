import config from '../config';
import Home from '../pages/Home';
import Sidebar from '../components/Layout/DefaultLayout/Sidebar';
const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
    },
];
// No need auth to access
const privateRoutes = [];
// need auth to access

export { publicRoutes, privateRoutes };
