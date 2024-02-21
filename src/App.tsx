import './css/App.css'
import { RouterProvider} from 'react-router-dom';
import router from './routes';
import { ShoppingCartProvider } from './context/ShoppingCartContext';

function App() {

  return (
    <div className='flex h-full w-full bg-zinc-950'>
      <ShoppingCartProvider>
        <RouterProvider router={router}/>
      </ShoppingCartProvider>
    </div>
  )
}

export default App
