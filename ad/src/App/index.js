import { Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from '../containers/Home'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Login from '../containers/Login';
import Registration from '../containers/Registration';
import ResetPwd from '../containers/ResetPwd';


function App() {
  return ( 
    <>
        <Header />
        <Routes>
          <Route exact path='/'  element={ <Home /> } />
          <Route path='/login'  element={ <Login /> } />
          <Route path='/registration' element={ <Registration /> } />
          <Route path='/resetPwd' element={ <ResetPwd /> } />
          <Route path='/*' element={ <span style={{color: "black"}}>404 page not found</span> } />
        </Routes>
        <Footer />
    </>
  );
}

export default App;
