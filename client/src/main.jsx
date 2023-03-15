import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { GoogleOAuthProvider } from "@react-oauth/google"
import { AuthProvider } from './context/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <GoogleOAuthProvider clientId={`183852561589-lato7j05g878ral5tusueio0or5j6t8a.apps.googleusercontent.com`}>
        <div className='bg-[#FAFAFA]'>
          <App />
        </div>
      </GoogleOAuthProvider>
    </AuthProvider>
  </React.StrictMode>,
)
