
import './App.css';
import { Component } from 'react';




class App extends Component {

  changeTitle = (e, titre) =>{
    e.target.textContent = titre;
  }

  changeParagraphe = (e) =>{
    e.target.previousSibling.textContent = "riche, pauvre"
  }

  render(){

    return (
      <div className="App">
        <h1 onClick={(e)=>{this.changeTitle(e, "Exo10")}}>Exercice 10</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quo.</p>
        <button onClick={this.changeParagraphe}>modifier le paragraphe</button>

      </div>
    );
  }
}

export default App;
