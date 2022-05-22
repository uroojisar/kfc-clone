import React from 'react';
import './App.css';
import Header from './Components/header/header.component';
import HomePage from './Pages/homepage/homepage.component';
import StoreLocator from './Pages/storelocator/storelocator.component';
import SignInAndSignUp from './Pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

//npm i react-router-dom
// Switch is replaced by Routes in version 6
import {Route, Routes} from 'react-router-dom';
import Footer from './Components/footer/footer.component';



const App = () => (
    <div class="app">
    <Header/>
    <Routes>
      {/* 'component' prop is replaced by 'element' prop in react-router-dom version 6 */}
      <Route exact path='/' element={<HomePage/>}/>
      <Route path='/locations' element={<StoreLocator/>}/>
      <Route path='/signin' element={<SignInAndSignUp/>}/>
    </Routes>
    <Footer/>
    </div>
);

export default App;
