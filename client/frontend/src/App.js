import './App.css';
import LangDropdown from "./Select"
function App() {
  const titel ="ALL POKEMON"
  return (
    <div className="App">
      <h1>{titel}</h1>    
     <LangDropdown /> 
    </div>
  );
}

export default App;
