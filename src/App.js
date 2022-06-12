import logo from './logo.svg';
import './App.css';
import TopBar from './components/topbar'

function App() {
  return (
    <div className="App">
      <header><TopBar nombre={"Juan"} apellido={"Perez"}/></header>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>APP IMPUESTOS</code>
        </p>
        <a
          className="App-link"
          href="https://mui.com/material-ui/material-icons/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Material UI Icons
        </a>
      </header>
    </div>
  );
}
export default App;
