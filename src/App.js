import React from 'react'
import {BrowserRouter,Route} from 'react-router-dom'
// import EditorCopy from './copy'
// import Editors from './Editor'
import Editor2 from './Editor2'
// import Froala from './froala'


function App(props){
    return(
        <BrowserRouter>
        <div>
          {/* <Route path="/" component={Editors}/> */}
           {/* <Route path="/" component={EditorCopy}/>  */}
        {/* <Route path="/" component={Froala}/> */}
        <Route path="/" component={Editor2}/>
          
    
        </div>
        </BrowserRouter>
    )
}
export default App