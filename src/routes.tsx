import {createBrowserRouter} from 'react-router-dom';

import { Home } from './pages/Home';
import { Cadastro } from './pages/Cadastro';
import { Entrega } from './pages/Entrega';
import { Final } from './pages/Final';

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
    {
        path: '/final',
        element: <Final />
    }
]);

export default router;