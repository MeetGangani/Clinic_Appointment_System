import "./App.css";
import Seperator from "./components/Seperator";
import Footer from "./components/footer/Footer";
import Home from "./components/main/Home";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";
import BookAppointment from "./components/main/BookAppointment";
import Medicines from "./components/main/Medicines";
import AboutDoctor from "./components/main/AboutDoctor";
import Contact from "./components/main/Contact";
// import Login from './components/main/Login'
// import NewLogin from './components/main/NewLogin'
import News from "./components/main/News";
import Register from "./components/main/Authentication/Register";
import Login from "./components/main/Authentication/Login";
import Notification from "./components/notifications/Notification";

function App() {
  const pageSize = 5;
 
  return (
    <>
      <Router>

      {/* <Navbar/> */}

      <Switch>
     {/* <Route> exact path="/" element={<Register/>}</Route> */}
     <Route exact path='/' element={<Register/>}></Route>
     <Route exact path='/Login' element={<Login/>}></Route>
     <Route exact path='/navbar' element={<Navbar/>}></Route>
     <Route exact path='/notigication' element={<Notification/>}></Route>


      <Route exact  path='/home' element={<Home/>}></Route>
        <Route exact  path='/bookappointment' element={<BookAppointment/>}> </Route>
        <Route exact path='/Medicines' element={<Medicines/>}></Route>
     
      <Route exact path='/News' element={<News pageSize={pageSize}/>}></Route>
        <Route exact path='/AboutDoctor' element={<AboutDoctor/>}></Route>
        <Route exact path='/Contact' element={<Contact/>}></Route>
        {/* <Route exact path='/Login' element={<Login/>}></Route> */}
    {/* <Route exact path="/register" element={<Register/>}></Route> */}

    

      </Switch>

      </Router>
      <Footer/>

     
    </>
  );
}

export default App;
