import React from 'react';
import Header from './Component/Header/Header';
import {
 BrowserRouter,Routes,Route,Navigate

} from "react-router-dom";
import Home from './Component/Pages/Home';
import Error from './Component/Pages/Error';
import SignUp from './Component/Pages/Signup';
import Screenotp from './Component/Pages/Screenotp';
import FindBogo from './Component/Pages/FindBogo';
import Payment from './Component/Pages/Payment';
import PaymentSuccess from './Component/Pages/PaymentSuccess';
import SearchRestaurant from './Component/Pages/SearchRestaurant';
import Footer from './Component/Footer/Footer';
import ReadMore from './Component/Header/SubHeader';
import Menu from './Component/Pages/Menu';
import PrivacyPolicy from './Component/Pages/PrivacyPolicy';

import TermsConditions from './Component/Pages/Terms&Conditions';
import QuestionAnswer from './Component/Pages/Question&Answer';
import ReferralSignup from './Component/Pages/ReferralSignup';
function App() { 

 //const BASE_URL = process.env.REACT_APP_BASE_URL;
//  console.log(window.location.pathname);
//  console.log(window.location.pathname ==="/BOGOmazing/public/PrivacyPolicy" ? null : <Header/>)
 //window.location.pathname !="/BOGOmazing/public/PrivacyPolicy" ? "herje" : "dddddfd";

 //if (pathname === "/PrivacyPolicy") return null;
  
   return (
    
    <>
   
<BrowserRouter>
<div className='blocksize'>
{ (window.location.pathname == process.env.REACT_APP_BASE_URL+"PrivacyPolicy") || (window.location.pathname ==process.env.REACT_APP_BASE_URL+"Terms&Conditions") || (window.location.pathname == process.env.REACT_APP_BASE_URL+"Question&Answer") ? null :<Header />}
{/* <Header /> */}
<Routes>
  <Route path={process.env.REACT_APP_BASE_URL+""} element={<Home />}></Route>
  <Route path={process.env.REACT_APP_BASE_URL+"SearchRestaurant"} element={<SearchRestaurant />}></Route>
  <Route path={process.env.REACT_APP_BASE_URL+"SignUp"} element={<SignUp />}></Route>
  <Route path={process.env.REACT_APP_BASE_URL+"otp"} element={<Screenotp />}></Route>
  <Route path={process.env.REACT_APP_BASE_URL+"find/:token"} element={<FindBogo />}></Route>
  <Route path={process.env.REACT_APP_BASE_URL+"Payment/:token"} element={<Payment />}></Route>
  <Route path={process.env.REACT_APP_BASE_URL+"PaymentSuccess"} element={<PaymentSuccess />}></Route>
  <Route path={process.env.REACT_APP_BASE_URL+"ReadMore"} element={<ReadMore />}></Route>
  <Route path={process.env.REACT_APP_BASE_URL+"Menu/:id"} element={<Menu />}></Route>
  <Route path={process.env.REACT_APP_BASE_URL+"PrivacyPolicy"} element={<PrivacyPolicy />}></Route>
  <Route path={process.env.REACT_APP_BASE_URL+"Terms&Conditions"} element={<TermsConditions />}></Route>
  <Route path={process.env.REACT_APP_BASE_URL+"Question&Answer"} element={<QuestionAnswer />}></Route>
  <Route path={process.env.REACT_APP_BASE_URL+"ReferralSignup"} element={<ReferralSignup />}></Route>
  <Route path={process.env.REACT_APP_BASE_URL+"*"} element={<Error/>}></Route>
  {/* <Route path={"/*"} element={<Navigate to={process.env.REACT_APP_BASE_URL}/>}></Route> */}
</Routes>
{/* <Routes>   
   <Route path={""} element={<Home />}></Route>
   <Route path={"/"} element={<Home />}></Route>
  <Route path={"/home"} element={<Home />}></Route>
  <Route path={"/SearchRestaurant"} element={<SearchRestaurant />}></Route>
  <Route path={"/SignUp"} element={<SignUp />}></Route>
  <Route path={"/otp/:token"} element={<Screenotp />}></Route>
  <Route path={"/find/:token"} element={<FindBogo />}></Route>
  <Route path={"/Payment/:token"} element={<Payment />}></Route>
  <Route path={"/PaymentSuccess"} element={<PaymentSuccess />}></Route>
  <Route path={"/ReadMore"} element={<ReadMore />}></Route>
  <Route path={"/Menu/:id"} element={<Menu />}></Route>
  <Route path={"/PrivacyPolicy"} element={<PrivacyPolicy />}></Route>
  <Route path={"/Terms&Conditions"} element={<TermsConditions />}></Route>
  <Route path={"/Question&Answer"} element={<QuestionAnswer />}></Route>
</Routes> */}

{ (window.location.pathname == process.env.REACT_APP_BASE_URL+"PrivacyPolicy") || (window.location.pathname ==process.env.REACT_APP_BASE_URL+"Terms&Conditions") || (window.location.pathname == process.env.REACT_APP_BASE_URL+"Question&Answer") ? null :<Footer />}
</div>
</BrowserRouter>

     </>
   );
 }


export default App;
