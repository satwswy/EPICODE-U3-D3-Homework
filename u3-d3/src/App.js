import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import WarningSign from './components/WarningSign';
import MyBadge from './components/MyBadge';

function App() {
  return (
    <div>
      <WarningSign msg="hello"/>
      <MyBadge text="hello world" textColor="blue" />
    </div>
  );
}

export default App;
