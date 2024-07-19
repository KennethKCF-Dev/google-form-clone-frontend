import './App.css';
import React, { useEffect } from 'react';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import FormCreatePage from './pages/FormCreatePage';
import FormListPage from './pages/FormListPage';
import FormFillPage from './pages/FormFillPage'
import Navbar from './components/Navbar';
import styled from 'styled-components';
import FormSubmittedPage from './pages/FormSubmittedPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Body = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;

function App() {
  const location = useLocation();
  
  const changeBgColor = location.pathname === '/form';

  useEffect(() => {
    document.body.style.backgroundColor = changeBgColor ? "white" : "var(--secondary)";
  }, [location.pathname]);

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover={false}
        theme="light"/>
      <Navbar />
      <Body>
        <Routes>
          <Route path="/form" element={<FormListPage />} />
          <Route path="/create" element={<FormCreatePage />} />
          <Route path="/form/:formId" element={<FormFillPage />} />
          <Route path="/submitted/:formId" element={<FormSubmittedPage />} />

          <Route path="*" element={<Navigate to="/form" replace />} />
        </Routes>
      </Body>
    </div>
  );
}

export default App;