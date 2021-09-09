/* eslint-disable no-lone-blocks */
import React from "react";
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import Card from "./components/Card/card";
import AddJojo from "./components/AddJojo";
import Subscription from "./components/Subscription";
import jojoVillains from "./villains.json";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    // const jojoProtagonists = ["Jonathan Joestar", "Joseph Joestar", "Jotaro Kujo", "Josuke Higashikata", "Giorno Giovanna", "Joel & Jose", "Jolyne Kujo", "Johnny Joestar", "Josuke Higashikata8"]
    const jojoProtagonists = [];
    const removed = [];
    this.state = {
      jojoProtagonists,
      removed
    }
  }

  undo() {
    const { removed } = this.state;
    this.setState({jojoProtagonists: removed[removed.length - 1]})
    removed.splice(removed.length - 1, 1)
    this.setState({removed})
  }

  undoAll() {
    const { removed } = this.state;
    this.setState({ jojoProtagonists: removed[0] })
    this.setState({ removed: [] });
  }

  removeAll() {
    const { jojoProtagonists, removed } = this.state;
    removed.push(jojoProtagonists.join(",").split(","));
    jojoProtagonists.splice(0, jojoProtagonists.length);
    this.setState({ jojoProtagonists })
    this.setState({ removed })
  }

  remove(i) {
    const { jojoProtagonists, removed } = this.state;
    removed.push(jojoProtagonists.join(",").split(","));
    jojoProtagonists.splice(i, 1);
    this.setState({ jojoProtagonists })
    this.setState({ removed })
  }

  addJojo(jojo) {
    const { jojoProtagonists, removed } = this.state;
    removed.push(jojoProtagonists.length === 0 ? [] : jojoProtagonists.join(",").split(","));
    jojoProtagonists.push(jojo);
    this.setState({ jojoProtagonists, removed });
  }

  
  render() {
   return (
      <Container className="app">
        <h1>Jojos</h1>
        { false && <Subscription submitText="Submit it" /> }
        <AddJojo onAddJojo={this.addJojo.bind(this)}/>
        <ul className="protagonists">
          { this.state.jojoProtagonists.map((j, i) => <li key={j}>{ j }, { i + 1 }, <Button  variant="outline-danger" onClick={this.remove.bind(this, i)}>x</Button></li>) }
        </ul>
        <Button onClick={this.removeAll.bind(this)}>Remove All</Button>
        { this.state.removed.length > 0 && <div>
        <Button onClick={this.undo.bind(this)}>Undo</Button>
        { <Button onClick={this.undoAll.bind(this)}>Undo All</Button> }
        </div> 
         }
         <hr />
        <h1>Villains</h1>

        <div className="grid" dataName="dasdas">
          { jojoVillains.map((x, i) => <Card isActive={x.isAlive} title={x.name} imageSrc={x.image} voiceline={x.voiceline}></Card>) }
           </div>
        <div className="full">
          <Card />
        </div>
      </Container>
    );
  }
}
export default App;

// faça o undo all B)
// e também o remove all, seu paliaso
// CONSEGUI YEEEEE!