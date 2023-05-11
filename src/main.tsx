import App from './App'
import './index.css'
import { Provider } from 'react-redux'
import store from './redux/store'
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';


const container = document.getElementById('root');
const root = createRoot(container as HTMLDivElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App /> 
    </Provider>
  </StrictMode>
);
