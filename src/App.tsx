import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Toaster } from 'react-hot-toast'

import Router from './routes'

import GlobalStyle from './style'

import { store } from './store'

function App() {
  return (
    <Provider store={store}> 
      <Toaster />
      <BrowserRouter>
        <GlobalStyle />
        <Router />
      </BrowserRouter>
    </Provider>
  )
}


/*
       _=,_         
    o_/6 /#\        
    \__ |##/        
     ='|--\         
       /   #'-.     
       \#|_   _'-. /
        |/ \_( # |" 
       C/ ,--___/   
*/



export default App
