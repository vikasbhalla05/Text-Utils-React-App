import './App.css';
import Nav from './components/Nav.jsx';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <Nav title="TextUtils" aboutText="About TextUtils" />
    <div className="container">
      <TextForm heading={"Write the Text to Analyze:"}/>
    </div>
    </>
  );
}

export default App;
