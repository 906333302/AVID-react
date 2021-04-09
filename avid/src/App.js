import 'bootstrap/dist/css/bootstrap.min.css';
import {  } from "react-bootstrap"
import NavbarList from './component/NavbarList'
import { useState } from 'react'
import ClothCards from './component/ClothCards'
import './index.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ClothDetails from './component/ClothDetails';
import Bag from './component/Bag';


function App() {

  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [style, setStyle] = useState("");
  const [lan, setLan] = useState("en");


  console.log(size);
  console.log(color);
  console.log(style);
  
  return (
    <Router>
      <div className="App">
      <NavbarList setSize={setSize} setColor={setColor} setStyle={setStyle} setLan={setLan} language={lan}/>
        <Switch>
          <Route exact path="/">
            <ClothCards size={size} color={color} style={style} language={lan}/>
          </Route>
          <Route path="/men">
            <ClothCards clothType={"MENS"} size={size} color={color} style={style} language={lan}/>
          </Route>
          <Route path="/women">
          <ClothCards clothType={"WOMENS"} size={size} color={color} style={style} language={lan}/>
          </Route>
          <Route path="/cloth/:id">
            <ClothDetails language={lan}/>
          </Route>
          <Route path="/bag">
            <Bag language={lan}/>
          </Route>
        </Switch>
        <header className="App-header">
        </header>
      </div>
    </Router>
  );
}

export default App;
