import React from 'react'

function Todos(props) {
    return (
        <div className='todo_list'>
        <h4>Todo</h4>
        <p>{props.text}</p>
            
        </div>
    )
}

export default Todos
