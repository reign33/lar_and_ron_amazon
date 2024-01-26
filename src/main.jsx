// import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
// import App from "./App";
// import { BrowserRouter } from "react-router-dom";
import store from "./redux/store";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <BrowserRouter>
//     <Provider store={store}>
//       <App /> 
//     </Provider>
// </BrowserRouter>
// );

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);