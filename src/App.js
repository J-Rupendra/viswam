import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Credentials from './components/Credentials';
import Intro from './components/Intro';
import AppLayout from './components/AppLayout';
import Browse from './components/Browse';
import MovieListContainer from './components/MovieListContainer';
import MovieDetailsContainer from './components/MovieDetailsContainer';

function App() {

  const appRoutes = createBrowserRouter([
    {
      path:'/',
      element: <AppLayout />,
      children: [
        {
          path: '/',
          element: <Home />,
          children:[
            {
              path: '/',
              element: <Intro />
            },
            {
              path: '/login',
              element: <Credentials />
            }
          ]
        },
        {
          path: '/browse',
          element: <Browse />
        },
        {
          path: '/movieList/:category',
          element: <MovieListContainer />
        },
        {
          path: '/moviePreview/:movieId',
          element: <MovieDetailsContainer />
        }

      ]

    }
  ])

  return (
    <RouterProvider router={appRoutes} />
  );
}

export default App;
