import { GoogleOAuthProvider } from "@react-oauth/google"
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AuthProvider } from './context/AuthProvider'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// import { Auth0Provider } from '@auth0/auth0-react'

const client = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  // <Auth0Provider
  //   domain={`dev-bby531fhm6sglk7j.us.auth0.com`}
  //   clientId={`JLhXgM0xSRpQvJoTQbwAwGpTqdJtdCsc`}
  //   redirectUri={window.location.origin}

  // >
  <QueryClientProvider client={client}>
    <AuthProvider>
      <GoogleOAuthProvider clientId={`183852561589-lato7j05g878ral5tusueio0or5j6t8a.apps.googleusercontent.com`}>
        <div className='bg-[#FAFAFA]'>
          <App />
        </div>
      </GoogleOAuthProvider>
    </AuthProvider>
  </QueryClientProvider>
  // </Auth0Provider>
)
