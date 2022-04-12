import React from 'react'
import TodoList from './TodoList'
import Form from './Form'


const initialTodos = [
  {
    name: 'Organize Garage',
    id: 1528817077286, 
    completed: false
  },
  {
    name: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
]

export default class App extends React.Component {
  state= {
    todos: initialTodos,
    textInput: ''
    }


  
    toggleCompleted = (itemId) => {
      this.setState({
        ...this.state,
        todos: this.state.todos.map(todo => {
          if(itemId === todo.id) {
            return{...todo,
            completed: !todo.completed}
          }else{
            return todo
          }
        }) 
    })
    }

    inputChange = (e) => {  
      this.setState({
        ...this.state,
        textInput: e.target.value
      })
    }

    addTodo =() => {
      const newTodo = {
        name:this.state.textInput,
        id: Date.now(),
        completed:false
      }
      this.setState({
        ...this.state,
        todos: [...this.state.todos, newTodo],
        textInput: ''
      })
    }
   

  render() {
    return (
      <div>
        <TodoList 
        todos= {this.state.todos}
        toggleCompleted= {this.toggleCompleted}
        />

        <Form 
        textInput = {this.state.textInput} 
        addTodo = {this.addTodo}
        inputChange= {this.inputChange}
        />
        
      </div>
    )
  }
}
