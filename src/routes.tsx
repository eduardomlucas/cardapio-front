import {createBrowserRouter} from 'react-router-dom';

import { Home } from './pages/Home';
import { Cadastro } from './pages/Cadastro';
import { Entrega } from './pages/Entrega';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/cadastro',
        element: <Cadastro />
    },
    {
        path: '/entrega',
        element: <Entrega />
    },
]);

export default router;