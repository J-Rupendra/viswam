import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Credentials from './components/Credentials';
import Intro from './components/Intro';
import AppLayout from './components/AppLayout';
import Browse from './components/Browse';
import MovieListContainer from './components/MovieListContainer';
import MovieDetailsContainer from './components/MovieDetailsContainer';
import SearchMovies from './components/SearchMovies';
import { Suspense, lazy } from 'react';
import ShimmerShorts from './components/ShimmerShorts';


function App() {

  const ShortsContainer = lazy(()=>import("./components/ShortsContainer"))

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
        },
        {
          path: '/search',
          element: <SearchMovies />
        },
        {
          path: '/shorts',
          element:  <Suspense fallback={<ShimmerShorts />} > <ShortsContainer /> </Suspense>
        }

      ]

    }
  ])

  return (
    <RouterProvider router={appRoutes} />
  );
}

export default App;
