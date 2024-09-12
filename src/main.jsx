import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ConfigProvider } from 'antd';
import es_ES from 'antd/locale/fr_FR';
import App from './App.jsx'
import 'antd/dist/reset.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ConfigProvider locale={es_ES}>
      <App />
    </ConfigProvider>    
  </StrictMode>,
)
