"use client";

import { Toaster } from "react-hot-toast";

const Toast = () => {
  return (
    <Toaster
      position="top-center"
      toastOptions={{
        duration: 3000,
        style: {
          background: '#fff',
          color: '#000',
        },
        success: {
          duration: 3000,
          iconTheme: {
            primary: 'green',
            secondary: 'white',
          },
        },
        error: {
          duration: 4000,
        },
      }}
    />
  );
};

export default Toast;