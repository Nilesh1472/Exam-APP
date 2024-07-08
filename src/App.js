import './App.css';
import Basic_Info from './Basic';
import Navbar from './Navbar';
import Exam from './Exam';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Register from './Register';
import Thanks from './Thank';
function App() {
  return (
    <div className="App">
       <Router>
      <Navbar/>  
      <Routes>
      <Route path={"/"} element={<Register/>}/>
        <Route path={"/basic"} element={<Basic_Info/>}/>
        <Route path={"/exam"} element={<Exam/>}/> 
        <Route path={"/thanks"} element={<Thanks/>}/>          
      </Routes>
     </Router>
 </div>
  );
}

export default App;
