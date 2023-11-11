import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import RecipeDetail from './page/RecipeDetail';

function App() {


  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<RecipeDetail />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
