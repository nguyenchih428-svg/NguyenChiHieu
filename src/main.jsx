import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// Import App component chính
import App from './App';

// Import các file CSS toàn cục
import './index.css'; 
import './App.css';

/**
 * ReactDOM.createRoot: 
 * Tìm phần tử có id='root' trong file public/index.html 
 * và render ứng dụng React vào đó.
 */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* BrowserRouter: Bọc ngoài cùng để kích hoạt tính năng điều hướng (Routes/Route) cho toàn app */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);