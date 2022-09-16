import { Keeper } from './Keeper';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/keeper' element={<Keeper />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
