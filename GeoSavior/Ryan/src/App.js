import Login from './Pages/Login';
import Register from './Pages/Register';
import{
  createBrowserRouter,
  RouterProvider,
  Route,
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path:"/login",
    element: <Login/>
  },
  {
    path:"/register",
    element: <Register/>
  },
])

function App() {

  return (
    <div>
     
      <RouterProvider router={router}/>
    </div>
  
  );
}

export default App;
