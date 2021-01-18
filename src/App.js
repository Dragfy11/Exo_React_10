
import './App.css';
import { Component } from 'react';




class App extends Component {

  changeTitle = (e, titre) =>{
    e.target.textContent = titre;
  }

  changeParagraphe = (e) =>{
    e.target.previousSibling.textContent = "riche, pauvre"
  };

  changeInput = (e) =>{
    const text = document.getElementById("second");
    const para = document.querySelector("h2");
    para.innerHTML = text.value;
  };

  changeArea = (e) =>{
    e.target.previousSibling.textContent = e.target.value;
  };


  render(){

    return (
      <div className="App">
        <h1 onClick={(e)=>{this.changeTitle(e, "Exo10")}}>Exercice 10</h1>
        <h2>Explication</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quo.</p>
        
        <button onClick={this.changeParagraphe}>modifier le paragraphe</button>
        <br/>
        <br/>
        <input type="text" name="" id="second"/><button onClick={this.changeInput}>change</button>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <textarea name="" id="" cols="30" rows="10" onChange={this.changeArea}></textarea>

      </div>
    );
  }
}

export default App;
