import './App.css';
import React from 'react';
import { Route, Routes, BrowserRouter} from 'react-router-dom';
import Layout from './components/layout/Layout';
const Home = React.lazy(() => import('./pages/Home'));

function App() {

  return (
    <BrowserRouter>
       <Routes>
        <Route path="/" element={<Layout />}>
        
          <Route index element={<Home />} />
        
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App;
