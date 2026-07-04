import React from 'react';
import { createRoot } from 'react-dom/client';

function App() {
  return (
    <div style={{ padding: 40, fontFamily: 'sans-serif' }}>
      <h1>Bridge-Base Alpha Installer</h1>
      <p>Welcome! This wizard will guide you through the setup of your secure Bridge-Base Alpha node.</p>
      <ul>
        <li>System checks (Docker, WireGuard)</li>
        <li>Network configuration</li>
        <li>WireGuard key generation</li>
        <li>Password and DuckDNS setup</li>
        <li>Port forwarding help</li>
        <li>Launch and status dashboard</li>
      </ul>
      <button disabled>Start Setup (UI coming next)</button>
    </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);
