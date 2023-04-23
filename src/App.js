import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router';
import store from "./redux/store";
import { Provider } from "react-redux";
import Home from './home';
import Search from './search';
import Profile from './profile';
import Login from './login';
import Details from './details';
import Register from './register';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route
              path='/'
              element={<Home />} />
            <Route
              path='/search'
              element={<Search />} />
            <Route
              path='/search/:searchTerm'
              element={<Search />} />
            <Route
              path='/profile'
              element={<Profile />} />
            <Route path="/profile/:username" element={<Profile />} />
            <Route
              path='/login'
              element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route
              path='/details/:did'
              element={<Details />} />

          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
