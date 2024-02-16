import './App.css'
import Seperator from './components/Seperator'
import Footer from './components/footer/Footer'
import Home from './components/main/Home'
import Navbar from './components/navbar/Navbar'
import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";
import BookAppointment from './components/main/BookAppointment'
import Medicines from './components/main/Medicines'
import AboutDoctor from './components/main/AboutDoctor'
import Contact from './components/main/Contact'
import Login from './components/main/Login'
import NewLogin from './components/main/NewLogin'
import News from './components/main/News'


function App() {
  // const apikey = process.env.REACT_APP_NEWS_API;
  // const apikey = f82887cc76c041428e32cafe69cd060e;
  // const pageSize = 5;
  return (
    <>

     <Router>
     <Navbar/>
     

      <Switch>
        {/* <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route> */}

        <Route exact  path='/' element={<Home/>}></Route>
        <Route exact  path='/bookappointment' element={<BookAppointment/>}> </Route>
        <Route exact path='/Medicines' element={<Medicines/>}></Route>
        {/* <Route exact path='/health' element={<News  apikey={f82887cc76c041428e32cafe69cd060e} setkey="health" pageSize={5} country="in" category="health" />}></Route> */}
        {/* <Route exact path='/' element={<News setProgress={setProgress} apikey={apikey} key="general" pageSize={5} country="in" category="general" />}></Route> */}

        <Route exact path='/News' element={<News/>}></Route>
        <Route exact path='/AboutDoctor' element={<AboutDoctor/>}></Route>
        <Route exact path='/Contact' element={<Contact/>}></Route>
        <Route exact path='/Login' element={<NewLogin/>}></Route>

        {/* <Route exact path='/Login' element={<Login/>}></Route> */}

        {/* <Route exact path='/Login' element={<Login/>}></Route> */}
        
        {/* <Route exact path="/health"><News apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health"/></Route>  */}
      </Switch>



     {/* <Home/> */}
    </Router>
     <Footer/>
    
    </>
  )
}

export default App
