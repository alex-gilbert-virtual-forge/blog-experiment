// apollo
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../lib/apolloClient';
// styled-componets
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Header from '../comps/header/header';
import '../styles/globals.css';

const GlobalStyle = createGlobalStyle`


  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Work Sans', sans-serif;
  }
`;

const theme = {
  colors: {
    primary: '#0070f3',
  },
};

export default function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  );
}
