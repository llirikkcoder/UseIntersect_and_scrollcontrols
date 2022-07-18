import { createRoot } from 'react-dom/client'

import { Logo } from '@pmndrs/branding'
import './styles.css'
import { App } from './App'
import history from "./history";
// import { BrowserRouter as Router, Route } from "react-router-dom";


function Overlay() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', width: '100%', height: '100%' }}>
      <a href="https://pmnd.rs/" style={{ position: 'absolute', top: 40, left: 90, fontSize: '13px' }}>
        media
        <br />
        lounge24
      </a>
      <div style={{ position: 'absolute', top: 40, right: 40, fontSize: '13px' }}>10/17/2021</div>
    </div>
  )
}

const rootElement = document.getElementById("root");

createRoot(document.getElementById('root')).render(
  // <Router history={history}>
    <App />
  // </Router>
)
