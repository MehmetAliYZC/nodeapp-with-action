import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Mehmet Ali Yazıcı
        </p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/mehmet-ali-yazici/"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin
        </a>
      </header>
    </div>
  );
}

export default App;
