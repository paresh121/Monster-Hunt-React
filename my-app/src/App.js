
import React from 'react';
import logo from './logo.svg';
import './App.css';
import { CardList } from './components/CardList/CardList.component';
import { SearchBox } from './components/Searchbox/Searchbox.component';
import './components/body.styles.css';

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
class App extends React.Component{
  constructor(){
    super();
    this.state={
      monsters:[
      ],
      searchField:''
    };
  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response =>response.json())
    .then(users=> this.setState(this.state.monsters=users));
  }
  render(){
    // filter
    const {monsters, searchField}=this.state;
    const filteredMonster=monsters.filter(monster=> monster.name.toLowerCase().includes(searchField.toLowerCase()));
    console.log(filteredMonster);
    return (
      <body>
        {/* <input type='search' placeholder='search monster' onChange={e =>{this.setState({searchField: e.target.value},()=> console.log(this.state));}}/> */}
      <h1>Monster Hunt</h1>
      <div className="App">
        <SearchBox placeholder='search monsters' handleChange={e =>{this.setState({searchField: e.target.value},()=> console.log(this.state));}}/>
        <CardList name={filteredMonster}> </CardList>
    </div>
    </body>
    );
  };
}


export default App;
