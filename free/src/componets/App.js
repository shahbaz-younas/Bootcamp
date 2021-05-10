import React from 'react';
import { ApolloProvider } from '@apollo/client/react';
import client from '../config/gql_config';
import Students from './students';
import './App.css'
function App() {
  return (
    
      <ApolloProvider client={client}>
        <div>
      <Students/>
      </div>
  </ApolloProvider>
     
    
  );
}
export default App;
