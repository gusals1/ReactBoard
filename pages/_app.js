import { Global } from '@emotion/react'
import { globalStyles } from '../src/commons/styles/globalStyles';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

function App({ Component, pageProps }) {

  const client = new ApolloClient({
    
    uri:"http://backend-practice.codebootcamp.co.kr/graphql",
    // uri:"http://backend-example.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache() // 컴퓨터의 메모리에다가 벡엔드에서 받아온 데이터 임시로 저장해 놓기. => 나중에 더 자세히 다룸.
  })

  return (
    <>
      <Global styles={globalStyles}/>
      
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    
    </>
    
  )
}

export default App;