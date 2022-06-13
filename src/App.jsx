import './App.scss';
import Header from './components/UI/header/header';
import Tabs from './components/UI/tabs/tabs';
import Filters from './components/UI/filters/filters';

function App() {
  return (
    <div className="App">
        <Header></Header>
        <Tabs></Tabs>
        <Filters></Filters>
    </div>

  );
}

export default App;
