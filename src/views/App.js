// import logo from './logo.svg';
import './App.scss';
import AboutComponent from './Base/AboutComponent';
import LoginComponent from './Auth/LoginComponent';
import HomeComponent from './Base/HomeComponent';
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import ParentComponent from './Base/ParentComponent';

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
          <Route path='/login' element={<LoginComponent />}/>
          <Route path='/' element={<ParentComponent />}>
              <Route path='/about' element={<AboutComponent />} />
              <Route index element={<HomeComponent />}/>
          </Route>
          
      </Routes>
    </BrowserRouter>
  );
}
export default App;
