
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './routes/routes';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <RouterProvider router={router}>
    
   </RouterProvider>
  );
}

export default App;
