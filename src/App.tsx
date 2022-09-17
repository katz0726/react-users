import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme/theme';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './router/Router';

export const app_name = "ユーザ管理アプリ";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
