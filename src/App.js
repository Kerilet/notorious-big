/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-lone-blocks */
import React from "react";
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import Card from "./components/Card/card";
import AddJojo from "./components/AddJojo";
import AddJojoVillain from "./components/AddJojoVillain";
import Subscription from "./components/Subscription";
import jojoVillains from "./villains.json";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

//   undo() {
//     const { removed } = this.state;
//     this.setState({jojoProtagonists: removed[removed.length - 1]})
//     removed.splice(removed.length - 1, 1)
//     this.setState({removed})
//   }

//   undoAll() {
//     const { removed } = this.state;
//     this.setState({ jojoProtagonists: removed[0] })
//     this.setState({ removed: [] });
//   }

//   removeAll() {
//     const { jojoProtagonists, removed } = this.state;
//     removed.push(jojoProtagonists.join(",").split(","));
//     jojoProtagonists.splice(0, jojoProtagonists.length);
//     this.setState({ jojoProtagonists })
//     this.setState({ removed })
//   }

//   remove(i) {
//     const { jojoProtagonists, removed } = this.state;
//     removed.push(jojoProtagonists.join(",").split(","));
//     jojoProtagonists.splice(i, 1);
//     this.setState({ jojoProtagonists })
//     this.setState({ removed })
//   }

//   addJojo(jojo) {
//     const { jojoProtagonists, removed } = this.state;
//     removed.push(jojoProtagonists.length === 0 ? [] : jojoProtagonists.join(",").split(","));
//     jojoProtagonists.push(jojo);
//     this.setState({ jojoProtagonists, removed });
//   }

//   addJojoVillain(jojoVillain, image) {
//     // jojoVillains.push({
//     //   image: image,
//     //   isAlive: false,
//     //   name: jojoVillain,
//     //   voiceline: "test"
//     // })
//     console.log(jojoVillain, image)
//   }

  
//   render() {
//    return (
//       <Container className="app">
//         <h1>Jojos</h1>
//         { false && <Subscription submitText="Submit it" /> }
//         <AddJojo onAddJojo={this.addJojo.bind(this)}/>
//         <ul className="protagonists">
//           { this.state.jojoProtagonists.map((j, i) => <li key={j}>{ j }, { i + 1 }, <Button  variant="outline-danger" onClick={this.remove.bind(this, i)}>x</Button></li>) }
//         </ul>
//         <Button onClick={this.removeAll.bind(this)}>Remove All</Button>
//         { this.state.removed.length > 0 && <div>
//         <Button onClick={this.undo.bind(this)}>Undo</Button>
//         { <Button onClick={this.undoAll.bind(this)}>Undo All</Button> }
//         </div> 
//          }
//          <hr />
//         <h1>Villains</h1>
//         <AddJojoVillain onAddName={this.addJojoVillain.bind(this, this.onAddImage)} onAddImage={this.addJojoVillain.bind(this)}/>
//         <div className="grid" dataName="dasdas">
//           { jojoVillains.map((x, i) => <Card isActive={x.isAlive} title={x.name} imageSrc={x.image} voiceline={x.voiceline}></Card>) }
//         </div>
//         <div className="full">
//           <Card />
//         </div>
//       </Container>
//     );
//   }
// }
export default () => {

  let jojoProtagonists = [];
  let removed = [];

   const addJojo = (jojo) => {
       removed.push(jojoProtagonists.length === 0 ? [] : jojoProtagonists.join(",").split(","));
       jojoProtagonists.push(jojo);
       console.log(jojoProtagonists, jojoProtagonists.length)
   }

   const remove = (i) => {
     removed.push(jojoProtagonists.join(",").split(","));
     jojoProtagonists.splice(i, 1);
   }

   const undo = () => {
    jojoProtagonists = removed[removed.length - 1]
    removed.splice(removed.length - 1, 1)
   }

   const removeAll = () => {
     removed = jojoProtagonists
     jojoProtagonists = [];
   }

   const undoAll = () => {
    jojoProtagonists = removed
    removed = [];
   }
  
  return (
    <>
    <Container className="app">
    { false && <Subscription submitText="Submit it" /> }
    <h1>Protagonists</h1>
    <AddJojo onAddJojo={addJojo.bind(this)}/>
    <ul className="protagonists">
      { jojoProtagonists.map((j, i) => <li key={j}>{ j }, { i + 1 }, <Button  variant="outline-danger" onClick={remove.bind(this, i)}>x</Button></li>) }
    </ul>
    {removed.length > 0 && <div>
      <Button onClick={removeAll.bind(this)}>Remove All</Button>
      <Button onClick={undo}>Undo</Button>
      <Button onClick={undoAll.bind(this)}>Undo All</Button>
    </div>}
    <hr />
    <h1>Villains</h1>
    {/* <AddJojoVillain onAddName={this.addJojoVillain.bind(this, this.onAddImage)} onAddImage={this.addJojoVillain.bind(this)}/> */}
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