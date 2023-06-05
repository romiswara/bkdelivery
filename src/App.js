import React from 'react'
import './App.css';
import router from './router';
import { RouterProvider } from 'react-router-dom';
function App({children}) {


  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
