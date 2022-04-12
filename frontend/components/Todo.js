import React from 'react'


export default class Todo extends React.Component {

    
  render() {
    return (
      <div onClick = {() => this.props.toggleCompleted(this.props.todo.id)}>
        {this.props.todo.name}
        <p>{this.props.todo.completed? 'true': 'false'}</p>
      </div>
    )
  }
}
