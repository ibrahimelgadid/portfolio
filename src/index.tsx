import ReactDOM from 'react-dom/client';
import {routes} from './routes/routes';
import {RouterProvider} from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <RouterProvider router={routes} />
);


