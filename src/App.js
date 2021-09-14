/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-lone-blocks */
import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import Card from "./components/Card/card";
import AddJojo from "./components/AddJojo";
import AddJojoVillain from "./components/AddJojoVillain";
import Subscription from "./components/Subscription";
import jojoVillains from "./villains.json";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

export default () => {

  const [jojoProtagonists, setJojoProtagonists] = useState([]);
  const [history, setHistory] = useState([[]]);


  const addJojo = (jojo) => {
    setJojoProtagonists(old => {
      const temp = [...old, jojo];
      return temp;
    });
  }

  const remove = (i) => {
    setJojoProtagonists((old) => {
      const temp = [...old];
      temp.splice(i, 1);
      return temp;
    });
  }

  const undo = () => {
    setHistory((old) => {
      const temp = [...old];
      temp.splice(temp.length - 1, 1);
      setJojoProtagonists(history[history.length - 2]);
      return temp;
    });
  }

  const removeAll = () => {
    setJojoProtagonists([]);
  }

  const undoAll = () => {
    // Repíta o método undo quantas vezes forem necessário
    // jojoProtagonists = removed
    // removed = [];
  }

  const addVillain = (villain) => {
    console.log(villain);
  }

  useEffect(() => {
    if (history.length && history[history.length - 1].toString() !== jojoProtagonists.toString()) {
      setHistory(old => [...old, jojoProtagonists]);
    }
  }, [jojoProtagonists, history]);

  return (
    <>
    <Container className="app">
      {/* <pre>{JSON.stringify(history, null, 4)}</pre> */}
    { false && <Subscription submitText="Submit it" /> }
    <h1>Protagonists</h1>
    <AddJojo onAddJojo={(jojo) => addJojo(jojo)}/>
    <ul className="protagonists">
      { jojoProtagonists.map((j, i) => <li key={j}>{ i + 1 } - { j } <Button  variant="outline-danger" onClick={() => remove(i)}>x</Button></li>) }
    </ul>
    {jojoProtagonists.length > 0 && <Button onClick={removeAll.bind(this)}>Remove All</Button>}


    {history.length > 1 && <div>
      <Button onClick={undo}>Undo</Button>
      <Button onClick={undoAll.bind(this)}>Undo All</Button>
    </div>}
    <hr />
    <h1>Villains</h1>
    <AddJojoVillain onAddVillain={addVillain} />
    <div className="grid">
    { jojoVillains.map((x, i) => <Card isActive={x.isAlive} title={x.name} imageSrc={x.image} voiceline={x.voiceline}></Card>) }
    </div>
    <div className="full">
      <Card />
    </div>
    </Container>
    </>
  );
}

// faça o undo all B)
// e também o remove all, seu paliaso
// CONSEGUI YEEEEE!
