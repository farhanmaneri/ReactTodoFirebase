import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import firebase from './Firebase'
import "./App.css";



class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: [],
      value: ''
    }
  }
  add_todo =()=>{
    let obj={title: this.state.value, edit:false}
    // firebase.database().ref('todos').push(obj)
    this.setState({
      todos:[...this.state.todos, obj],
      value:''
    })
  // delete_todo =(index)=>{
  //   this.state.todos.splice(index,1)
  //   this.setState({
  //     todos:this.state.todos
  //   })
  // }
}
render(){
  let {todos,value} = this.state;
  return (
    <>
      <input value={value} onChange={(e) => this.setState({ value: e.target.value })} type='text' placeholder='enter your todo' />
      <button onClick={this.add_todo}>Add Item</button>
      <ul>
       
        {todos.map((v, i) => {
          return (
            <li key={i}>{v.title}
            {/* <button onClick={()=>this.delete_todo(i)}>Delete Todo</button> */}
            </li>
          )
        })}
      </ul>
    </>
  )
}

}

export default App;
