import './App.css';
import Form from './components/Form';
import Form2 from './components/Form2';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return(
    <>
      <BrowserRouter>
       <Switch>
         <Route path='/' exact component={Form}/>
         <Route path='/form2' exact component={Form2}/>
       </Switch>
     </BrowserRouter>
    </>
   );
}

export default App;