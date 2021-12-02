import { Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from '../components/Header';
import Footer from '../components/Footer';
// import Login from '../containers/Login';
import Registration from '../containers/Registration';


function App() {
  return ( 
    <>
        <Header />
        <Routes>
          {/* <Route path='/' element={ <Login /> } /> */}
          <Route path='/registration' element={ <Registration /> } />
          <Route path='/*' element={ <span style={{color: "black"}}>404 page not found</span> } />
        </Routes>
        <Footer />
    </>
  );
}

export default App;
