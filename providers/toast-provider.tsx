'use client';

import { Toaster, ToastBar } from 'react-hot-toast';

export const ToastProvider = () => {
  return (
    <Toaster position="top-center">
      {(t) => (
        <ToastBar toast={t}>
          {({ icon, message }) => (
            <>
              {icon}
              {message}
            </>
          )}
        </ToastBar>
      )}
    </Toaster>
  );
};
