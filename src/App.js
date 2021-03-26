// All this code is for studiing purpouse, so there might be a lot of gibberish and pieces of code for different small programs

// import logo from './logo.svg';
// import './App.css';
// import User from './User';
import React from "react"
import Footer from './components/Footer'
import MyNavbar from './components/MyNavbar'
import MyMain from './components/MyMain'
import MyHeader from './components/MyHeader'
import ToDoItem from './components/ToDoItem'
import ConctactCard from './components/ConctactCard'
import Jokes from './components/Jokes'
import jokesData from './jokesData'
import todoData from './components/todoData'
import Form from './components/formContainer'
import MemeGenerator from './components/memeGenerator'
import Conditional from './components/conditionalComponent'
import reactDom from 'react-dom'


const App = () => {
  return (
    <div>
      <MyHeader />
      <MemeGenerator />
    </div>

  )
}

// const App = () => {
//   const jokesArr = jokesData.map(joke => <Jokes key={joke.id} question={joke.question} punchline={joke.punchline} />);
//   const todoArr = todoData.map(item => <ToDoItem key={item.id} item={item} />);

//   return (
//     <div className='todo-list'>
//       {jokesArr}
//       <div>
//         <h1>here first display of use components</h1>
//         <MyNavbar />
//         <MyMain />
//         <Footer />
//       </div>


//       {/* playing with components, contacts list */}

//       <h1>here contact list with images and data</h1>
//       <ConctactCard
//         // contact in Contact card - here is have an object inside JSX react compiler so that why double curly bracers. Similar to JSON files, this is one way to acces them 
//         contact={{
//           name: "Mr. Toepaw",
//           imgUrl: "http://placekitten.com/g/200/300",
//           phone: "(332) 456 7565 22",
//           email: "Mrtoepaw@cat.mail"
//         }} />
//       <ConctactCard
//         contact={{
//           name: "Mr. Snikers",
//           imgUrl: "http://placekitten.com/g/200/200",
//           phone: "(122) 456 9999 22",
//           email: "Snikers@cat.mail"
//         }}

//       />
//       <ConctactCard
//         contact={{
//           name: "Mr. Lady",
//           imgUrl: "http://placekitten.com/g/300/200",
//           phone: "(233) 456 6677 22",
//           email: "Lady@cat.mail"
//         }}

//       />
//       <ConctactCard
//         contact={{
//           name: "Mr. Bob",
//           imgUrl: "http://placekitten.com/g/200/100",
//           phone: "(555) 456 7565 55",
//           email: "Bob@cat.mail"
//         }}

//       />

//       {/* to do list  DOWN bellow*/}
//       <h1>here is to do list</h1>
//       {todoArr}
//     </div>
//   )
// }


// class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       count: 0
//     }
//     this.handleClick = this.handleClick.bind(this)
//   }

//   handleClick() {
//     this.setState(prevState => {
//       return {
//         count: prevState.count + 1
//       }
//     })
//     // this.state.count++; // this is really bad way to do this, you do not modify state data, better use some mediator. 
//   }

//   render() {
//     return (
//       <div className='todo-list'>
//         <h1 >{this.state.count}</h1>
//         <button onClick={this.handleClick}>Change!</button>
//       </div >
//     )
//   }
// }

// Learning Class and state
// class App extends React.Component {
//   render() {
//     return (
//       <div className='todo-list'>
//         <div>
//           <h1>here first display of use components</h1>
//           <MyNavbar />
//           <MyMain />
//           <Footer />
//         </div>
//         <h1>here contact list with images and data</h1>
//         <ConctactCard
//           // contact in Contact card - here is have an object inside JSX react compiler so that why double curly bracers. Similar to JSON files, this is one way to acces them 
//           contact={{
//             name: "Mr. Toepaw",
//             imgUrl: "http://placekitten.com/g/200/300",
//             phone: "(332) 456 7565 22",
//             email: "Mrtoepaw@cat.mail"
//           }} />
//         <ConctactCard
//           contact={{
//             name: "Mr. Snikers",
//             imgUrl: "http://placekitten.com/g/200/200",
//             phone: "(122) 456 9999 22",
//             email: "Snikers@cat.mail"
//           }}

//         />
//         <ConctactCard
//           contact={{
//             name: "Mr. Lady",
//             imgUrl: "http://placekitten.com/g/300/200",
//             phone: "(233) 456 6677 22",
//             email: "Lady@cat.mail"
//           }}

//         />
//         <ConctactCard
//           contact={{
//             name: "Mr. Bob",
//             imgUrl: "http://placekitten.com/g/200/100",
//             phone: "(555) 456 7565 55",
//             email: "Bob@cat.mail"
//           }}

//         />
//       </div>
//     )
//   }
// }

// Learning Class and state
// class App extends React.Component {
//   constructor() {
//     // always ADD super()
//     super()
//     this.state = {
//       todos: todoData
//     }
//     this.handleChange = this.handleChange.bind(this)
//   }

//   handleChange(id) {
//     this.setState(prevState => {
//       const updatedTodos = prevState.todos.map(todo => {
//         if (todo.id === id) {
//           todo.completed = !todo.completed
//         }
//         return todo
//       })
//       return {
//         todos: updatedTodos
//       }
//     })
//   }

//   render() {
//     const todoArr = this.state.todos.map(item => <ToDoItem key={item.id} item={item} handleChange={this.handleChange} />);

//     return (
//       <div className='todo-list'>
//         <h1>here is to do list</h1>
//         {todoArr}
//       </div>
//     )
//   }
// }

// jokes part
// class App extends React.Component {
//   render() {
//     const jokesArr = jokesData.map(joke => <Jokes key={joke.id} question={joke.question} punchline={joke.punchline} />);


//     return (
//       <div className='todo-list'>
//         {jokesArr}

//       </div>
//     )
//   }
// }

// practicing form

// const App = () => {
//   return (
//     <Form />
//   );
// }

// Form manupulations
// class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       firstName: "",
//       lastName: "",
//       isFriendly: true,
//       gender: "",
//       favColor: 'blue'
//     }
//     this.handleChange = this.handleChange.bind(this)
//   }

//   handleChange(event) {
//     const { name, value, type, checked } = event.target
//     type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({
//       // this works on any text type input like email, name...
//       [name]: value
//     })

//   }

//   render() {
//     return (
//       // <form onSubmit event will be good here>
//       // <form onSubmit={this.handleSubmit}>
//       <form>
//         <input
//           type='text'
//           value={this.state.firstName}
//           name="firstName"
//           placeholder=" First Name"
//           onChange={this.handleChange}
//         />
//         <br />
//         <input
//           type='text'
//           value={this.state.lastName}
//           name="lastName"
//           placeholder=" Last Name"
//           onChange={this.handleChange}
//         />
//         <br />
//         {/* textarear react properties and usage */}
//         <textarea
//           value={"some default value"}
//           onChange={this.handleChange}
//         />
//         <br />
//         <label>
//           <input
//             type="checkbox"
//             name="isFriendly"
//             checked={this.state.isFriendly}
//             onChange={this.handleChange}
//           /> is Friendly?
//         </label>
//         <br />
//         <label>
//           <input
//             type="radio"
//             name="gender"
//             value="male"
//             checked={this.state.gender === "male"}
//             onChange={this.handleChange}
//           /> Male
//         </label>
//         <br />
//         <label>
//           <input
//             type="radio"
//             name="gender"
//             value="female"
//             checked={this.state.gender === "female"}
//             onChange={this.handleChange}
//           /> Female
//         </label>
//         {/* Formik librarly good for forms*/}
//         <br />
//         <label>
//           favorite color:
//           <select
//             value={this.state.favColor}
//             onChange={this.handleChange}
//             name="favColor"
//           >
//             <option value="blue">blue</option>
//             <option value="green">green</option>
//             <option value="red">red</option>
//             <option value="yellow">yellow</option>
//             <option value="purple">purple</option>
//           </select>
//         </label>


//         <h1>{this.state.firstName} {this.state.lastName}</h1>
//         <h1>YOu are a {this.state.gender}</h1>
//         <h1>YOur fav Color is  {this.state.favColor}</h1>
//         {/* submittin the form two possible ways choose one you like */}
//         <button>Submit</button>
//         <input type='submit' value='submit' />
//       </form>
//     )
//   }
// }

// conditional statemants
// class App extends React.Component {
//   constructor() {
//     // always ADD super()
//     super()
//     this.state = {
//       loading: false,
//       character: {}
//     }
//   }

//   componentDidMount() {
//     this.setState({ loading: true })
//     fetch("https://swapi.dev/api/people/1")
//       .then(response => response.json())
//       .then(data => this.setState({
//         loading: false,
//         character: data
//       })

//       )
//   }

//   render() {
//     const text = this.state.loading ? 'Loading...' : this.state.character.name
//     return (
//       <div>

//         <h1>{text}</h1>
//       </div>
//     )
//   }
// }
// conditional statemants
// class App extends React.Component {
//   constructor() {
//     // always ADD super()
//     super()
//     this.state = {
//       isLoggedIn: true
//     }
//   }
//   render() {
//     return (
//       <div>
//         <h1>YOu are currently logged {this.state.isLoggedIn ? "in" : "out"}</h1>
//       </div>
//     )
//   }
// }


// class App extends React.Component {
//   constructor() {
//     // always ADD super()
//     super()
//     this.state = {
//       isLoggedIn: false
//     }
//     this.handleClick = this.handleClick.bind(this)
//   }

//   handleClick() {
//     this.setState(prevState => {
//       return {
//         isLoggedIn: !prevState.isLoggedIn
//       }
//     }
//     )
//   }

//   render() {
//     let buttonText = this.state.isLoggedIn ? "Log out" : "Log In"
//     let displayText = this.state.isLoggedIn ? "Logeed In" : "Logged Out"
//     return (
//       <div>
//         {/* {this.state.isLoggedIn ? <h1>Loged In</h1> : <Conditional />} */}
//         <button onClick={this.handleClick}>{buttonText}</button>
//         <h1>{displayText}</h1>
//       </div >
//     )
//   }
// }

// new lifecicle methods from v 17+ 
// static getDerivedStateFromProps(props, state) {
//   // return the new, updated state based upon props
// }

// new lifecicle methods from v 17+ 
// getSnapshotBeforeUpdate() {
//   // create a backup of the current way things are
// }

// component life cicle explained, old style react <<< 16.3 removed from v 17+
// componentWillMount() { 
//   // GET the data I need to correctly display
// }
// component life cicle explained, old style react <<< 16.3
// componentDidMount() {
//   // GET the data I need to correctly display
// }

// component life cicle explained, old style react <<< 16.3 removed from v 17+
// componentWillReceiveProps(nextProps) {
//   if (nextProps.whatever !== this.props.whatever) {
//     // do something here
//   } 
// }

// component life cicle explained, this part for optimization, old style react <<< 16.3
// shouldComponentUpdate(nextProps, nextState) {
//   // return true if we want to update
//   // return false if not.
// }

// component end of life cicle, old style react <<< 16.3 removed from v 17+
// componentWillUpdate() {
//   // teardown or cleanup your code to before your component dissapears
//   // e.g. remove the event listener
// }
// component end of life cicle, old style react <<< 16.3
// componentWillUnmount() {
//   // teardown or cleanup your code to before your component dissapears
//   // e.g. remove the event listener
// }



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

export default App;
