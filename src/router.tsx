import { createBrowserRouter } from 'react-router-dom';
import { HomeLayout } from './components/layouts';
import { PATHS } from './helpers/constants';
import { Resources } from 'pages/resources';
import { Models } from './pages/models';
import { Home } from './pages/home';

export const router = createBrowserRouter([
  {
    element: <HomeLayout />,
    children: [
      {
        path: PATHS.ROOT,
        element: <Home />,
      },
      {
        path: PATHS.MODELS,
        element: <Models />,
      },
      {
        path: PATHS.RESOURCES,
        element: <Resources />,
      },
    ],
  },
]);
