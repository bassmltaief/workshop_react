import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainVideo from './companent/MainVideo';
import SuggVideo from './companent/SuggVideo';
import Comman from './companent/Comman';

function App() {
  return (
    <div className='container-fluid'>
     <div className='row'>
      <MainVideo/>
      <SuggVideo/>
      </div>
      <div style={{marginTop:'-250px'}}>
      <Comman/></div>
    </div>
  );
}

export default App;
