import './App.css';
import Form from './components/Form';
import Form1 from './components/Form1';
import Form2 from './components/Form2';
import Form3 from './components/Form3';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return(
    <>
      <BrowserRouter>
       <Switch>
         <Route path='/' exact component={Form} />
         <Route path='/form1' exact component={Form1} />
         <Route path='/form2' exact component={Form2} />
         <Route path='/form3' exact component={Form3} />
       </Switch>
     </BrowserRouter>
    </>
   );
}

export default App;