"use client"
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import "./globals.css";



interface RootLayoutProps {
  children: ReactNode;
}


const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <head>
        <title>My Next.js App</title>
      </head>
      <body>
        <Provider store={store}>
          {children}
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;