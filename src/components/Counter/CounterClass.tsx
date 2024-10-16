import React, { Component } from 'react'; 

// Étape 1: Créer une interface pour l'state, précisant que "count" est un nombre
interface CounterState {
    count:number
}

// Étape 2: Créer une interface pour les props, ici elle est vide car le composant n'en prend pas
interface CounterProps {}

// Étape 3: Déclarer le composant en utilisant React.Component et en passant les types des props et de l'state
class CounterClass extends Component<CounterProps, CounterState> { 

  // Étape 4: Initialiser l'state avec "count" à 0, le type est défini par l'interface CounterState    
state:CounterState = {
 count: 0
 };
 
 
 increment = ():void => {
 this.setState({ count: this.state.count + 1 }); 
}; 
render() { 
return ( <div> 
<p>Count: {this.state.count}</p> 
<button onClick={this.increment}>Increment</button> 
</div> );
 }
 } 
export default CounterClass;