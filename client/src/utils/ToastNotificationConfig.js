import React from 'react';
import styled from '@emotion/styled';
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const WrappedToastContainer = styled(ToastContainer)`
  .Toastify__toast-container {
    background-color: rgba(30, 25, 79);
  }
  .Toastify__toast {
    background-color: rgba(30, 25, 79);
    text-align: center;
    color: #d05888;
    font: 300 bold 1.1rem 'Roboto', sans-serif;
  }
  .Toastify__toast--error {
    background-color: rgba(30, 25, 79);
    text-align: center;
    color: #d05888;
    font: 300 bold 1.1rem 'Roboto', sans-serif;
  }
  .Toastify__toast--success {
    background-color: rgba(30, 25, 79);
    text-align: center;
    color: #d05888;
    font: 300 bold 1.1rem 'Roboto', sans-serif;
    height: 100px;
    margin-top: 70%;
  }
  .Toastify__toast-body {
    background-color: rgba(30, 25, 79);
  }
`;

function ToastNotificationConfig() {
  return (
    <WrappedToastContainer
      transition={Zoom}
      hideProgressBar={true}
      closeButton={false}
      position="top-center"
      autoClose={1000}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  );
}

export default ToastNotificationConfig;
