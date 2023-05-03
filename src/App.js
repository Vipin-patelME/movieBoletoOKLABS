
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LayOut from './pages/LayOut';
import Home from './pages/Home';
import SignIn from './pages/auth/SignIn';
import SignUp from './pages/auth/SignUp';
import NotFound from './pages/NotFound';
import { allPublicRoutes } from './routes/publicRoutes';
import { Provider } from 'react-redux';
import store from './app/store';


function App() {

  return (
      <Provider store={store} >
        <Routes>
          <Route path='/' element={<LayOut/>}>
            <Route index element={<Home /> }/>
            {
              allPublicRoutes?.map((eachRoute, idx) =>
              <Route key={idx} path={eachRoute.path} element={eachRoute.element} />
              )
            }
          </Route>
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </ Provider>
  );
}

export default App;
