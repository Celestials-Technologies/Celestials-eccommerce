import { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState('');
  
  return (
    <div className="App">
      <Header setSidebarOpen={setSidebarOpen} />
      <Sidebar sidebarOpen={sidebarOpen} />
    </div>
  );
}

export default App;
