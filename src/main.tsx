import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './theme';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import store from 'src/redux/app/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </ChakraProvider>, 
  </StrictMode>,
  document.getElementById('root')
);
