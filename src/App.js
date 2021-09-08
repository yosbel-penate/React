import react from 'react';
import './App.css';
  class Holamundy extends react.Component
  {
    state={
      show:true
    }
    toggleState=()=>{
        this.setState({show:!this.state.show})
    }
    render(){
      if (this.state.show) {
          return  (
            <div id='hello'>
            <h3>hola mundo cruel {this.props.mytext} {this.props.subt}</h3>
            <button onClick={this.toggleState} >Tocame</button>
            </div>
          )
      } else {
          return(
            <div>
              <h1>Muerte al enemigo</h1>
              <button onClick={this.toggleState} >Tocame</button>
            </div>
            )
      }
    }
  }

function App() {
  return (
    <div className="App">
     <Holamundy mytext='mi amor' subt="lolita"/>
     <Holamundy mytext='mi amor' subt="lolita"/>
     <Holamundy mytext='mi amor' subt="lolita"/>
     <Holamundy mytext='mi amor' subt="lolita"/>
    </div>
  );
}

export default App;
