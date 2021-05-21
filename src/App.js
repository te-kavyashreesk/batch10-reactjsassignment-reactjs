// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React,{Component} from 'react';
import './App.css';

class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			Chocolate : [
				{name: "DairyMilk", votes: 0},
				{name: "Munch", votes: 0},
				{name: "Perk", votes: 0},
				{name: "Candy", votes: 0}
			]
		}
	}

	vote (i) {
		let newChocolate = [...this.state.Chocolate];
		newChocolate[i].votes++;
		function swap(array, i, j) {
			var temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
		this.setState({Chocolate: newChocolate});
		
	}

	render(){
		return(
			<>
				<h1>Vote To Ur Favourite Chocalate!</h1>
				<div className="Chocolate">
					{
						this.state.Chocolate.map((chocki, i) => 
							<div key={i} className="Chocolate">
								<div className="voteCount">
									{chocki.votes}
								</div>
								<div className="ChocolateName">
									{chocki.name}
								</div>
								<button onClick={this.vote.bind(this, i)}>Click Here</button>
							</div>
						)
					}
				</div>
			</>
		);
	}
}
export default App;