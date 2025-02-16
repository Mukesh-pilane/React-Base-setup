import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'react-toastify/dist/ReactToastify.css';
import './index.css'
import Loader from './components/Loader/Loader.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <Suspense fallback={<Loader />}>
      <App />
  </Suspense>
)

