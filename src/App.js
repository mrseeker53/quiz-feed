import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Analytics from './components/Analytics/Analytics';
import Blog from './components/Blog/Blog';
import Dashboard from './components/Dashboard/Dashboard';
import Main from './layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      // Route as Layout
      path: '/',
      element: <Main></Main>,
      // Nested route as Outlet
      children: [
        {
          path: '/',
          element: <Dashboard></Dashboard>
        },
        {
          path: '/analytics',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Analytics></Analytics>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        }
      ]
    },
    // Route for 404 page
    {
      path: '*',
      element:
        <div className='mt-52'>
          <p className='text-5xl text-red-400 font-semibold mb-4'>404... Not Found!</p>
          <p className='text-2xl text-red-900'>: : The server can not find the requested resource</p>
        </div>
    }
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
