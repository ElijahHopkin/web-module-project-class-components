import React from 'react'

export default class Form extends React.Component {

  changeHandler =(e) => {
    this.props.inputChange(e)
  }
  submitHandler = (e) => {
    e.preventDefault()
    this.props.addTodo()
  }
  render() {
    return (
      <div>
   <form onSubmit = {this.submitHandler}>
        <input 
          type= "text"
          name= "todo"
          value = {this.props.textInput}
          onChange = {this.changeHandler}
          />
          <div>
          <button>Submit New Todo</button>
          <button>Filter Completed</button>
          </div>
          </form>  
      </div>
    )
  }
}
