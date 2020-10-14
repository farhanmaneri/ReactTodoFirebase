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
    firebase.database().ref('todos').push(obj)
    this.setState({
      todos:[...this.state.todos, obj],
      value:''
    })
}
  delete_todo =(index)=>{
    this.state.todos.splice(index,1)
    this.setState({
      todos:this.state.todos
    })
  }
  handleChange = (e,index)=>{
    this.state.todos[index].title = e.target.value
    this.setState({
      todos:this.state.todos
    })
  }
  edit_todo = (index, val)=>{
    this.state.todos[index].edit = true;
    this.setState({
      todos:this.state.todos 
    })

  }
  update = (index)=>{
    this.state.todos[index].edit = false;
    this.setState({
      todos:this.state.todos 
    })
  }

componentDidMount(){
  firebase.database().ref('todos').on('value', (snapshot)=>{
    //console.log(snapshot.val())

                  const todos = []
                  snapshot.forEach(doc =>{
                    const data = doc.val()
                    todos.push(data)
                  })
                  this.setState({todos:todos})
                })
             
}

render(){
  let {todos,value} = this.state;
  return (
    <>
    <div className='main_div'>
      <input value={value} onChange={(e) => this.setState({ value: e.target.value })} type='text' placeholder='enter your todo' />
      <br/>
     
      <button onClick={this.add_todo}>Add Item</button>
      </div>
      {this.state.todos &&
      this.state.todos.map((v,i)=>{
        return(
          <div className='list' >
          <ul>
            <li key={i}>{v.title}</li>
          </ul>
          </div>
        )
      })
      }
 
    </>
  )
}

}

export default App;
