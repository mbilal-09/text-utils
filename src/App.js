import React, {useState} from "react";
import "./App.css";
import Alert from "./components/Alert";
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message,
      type
    })
    setTimeout(() => {
      setAlert('')
    }, 1000);
  }
    return (
        <>
          <Navbar/>
          <Alert alert={alert}/>
          <div className="container my-4">
            <TextArea showAlert={showAlert} heading="Enter Text To Analyze"/>
          </div>
        </>
    );
}

export default App;
