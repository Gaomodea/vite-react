
import { createBrowserRouter } from 'react-router-dom'
import Article from "../page/Article";
import Login from '../page/Login'
import About from '../page/Article/components/About';
import Info from '../page/Article/components/Info';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/article/:id',
    element: <Article />,
    children: [
      {
        // path: 'about',
        index: true,
        element: <About />
      },
      {
        path: 'info',
        element: <Info />
      }
    ]
  },
  {
    path: '*',
    element: <div>没找到页面</div>
  }
])

export default router