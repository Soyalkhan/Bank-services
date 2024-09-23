import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'; // Use createRoot from react-dom/client
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from 'react-router-dom';
import TermsAndConditions from './pages/TermsAndConditions.jsx';
import Layout from './Layout.jsx';
import Home from './components/Home.jsx';
import CustomerDetailsForm from './components/CustomerDetailsForm.jsx';
import RefundAndCancellationPolicy from './pages/RefundAndCancellationPolicy.jsx';

// Create your router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path='' element={<Home/>}/>
      <Route path="/RefundAndCancellationPolicy" element={<RefundAndCancellationPolicy />} />
      <Route path="/CustomerDetailsForm" element={<CustomerDetailsForm />} />
      <Route path="/TermsAndConditions" element={<TermsAndConditions/>} />
    </Route>
  )
);

// Correct usage of createRoot from react-dom/client
const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
