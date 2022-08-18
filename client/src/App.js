import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/home/Home';
import Hotel from './pages/hotels/Hotel';
import List from './pages/list/List';
import Login from './pages/login/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home/>}></Route>
        <Route path="/hotels" element={ <List/>}></Route>
        <Route path="/hotels/:id" element={ <Hotel/>}></Route>
        <Route path="/login" element={ <Login/>}></Route>
      </Routes>
    
    <div className="App">
      {/* <h1>Hello World</h1> */}
    </div>

    </BrowserRouter>

  );
}

export default App;
