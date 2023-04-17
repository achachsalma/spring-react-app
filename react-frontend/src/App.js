import logo from './logo.svg';
import './App.css';
import{BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import ListEmployeeComponent from './components/employee/ListEmployeeComponent';
import Header from './components/Header';
import Footer from './components/Footer';
import CreateEmployeeComponent from './components/employee/CreateEmployeeComponent';
import UpdateEmployeeComponents from './components/employee/UpdateEmployeeComponents';
import ViewEmployeeComponent from './components/employee/ViewEmployeeComponent';
import DownloadPdf from './components/employee/DownloadPdf';
function App() {
  return (
    <div>
       <Router>
        <div className='container'>
          <Header/>
          <div className='container'>
              <Switch>
                <Route path="/" exact component={ListEmployeeComponent}/>
                <Route path="/employees" component={ListEmployeeComponent}/>
                <Route path="/add-employee" component={CreateEmployeeComponent}/>
                <Route path="/update-employee/:id" component={UpdateEmployeeComponents}/>
                <Route path="/view-employee/:id" component={ViewEmployeeComponent}/>
                <DownloadPdf/>
              </Switch>
          </div>
          <Footer/>
          <DownloadPdf/>
        </div>
       </Router>
   
    
    </div>
   
  );
}

export default App;
