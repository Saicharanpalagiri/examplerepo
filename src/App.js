import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import AppRoutes from './routes/AppRoutes';
import { Provider } from 'react-redux';
import store from './reduxPart/Store';
import { ChakraProvider } from '@chakra-ui/react';
import Header from './components/Header';

function App() {
  return (
    <div className='App'>
      <Provider store={store}>
   <BrowserRouter>
   <ChakraProvider>
    <Header/>
   <AppRoutes/>
   </ChakraProvider>
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
