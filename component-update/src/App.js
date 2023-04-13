import React,{useState,useCallback} from 'react';
import Button from './components/UI/Button/Button'
import './App.css';
import DemoOutput from './components/Demo/DemoOutput';

function App() {
  const [showParagraph,setShowParagraph]=useState(false);
  const [allowToggling,setAllowToggling]=useState(false);

  const toggleParagraphHandler=useCallback(()=>{
    if(allowToggling){
setShowParagraph(prevShowParagraph => !prevShowParagraph);
    }

  },[allowToggling]);

  const allowToggleHandler=()=>{
    setAllowToggling(true);
  }
  return (
    <div className="app">
      <h1>Hi there!</h1>
     <DemoOutput show={showParagraph}/>
     <Button onClick={allowToggleHandler}>Allow Toggling</Button>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph !</Button>
    </div>
  );
}

export default App;
