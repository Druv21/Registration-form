import './App.css';
import Otp_validation from './components/Otp_validation';
import Form_details from './components/Form_details';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return(
    <>
      <BrowserRouter>
       <Switch>
         <Route path='/' exact component={Otp_validation}/>
         <Route path='/form2' exact component={Form_details}/>
       </Switch>
     </BrowserRouter>
    </>
   );
}

export default App;