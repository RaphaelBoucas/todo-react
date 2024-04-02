import React from 'react'

const Todo = ({todo, removeToDo, completeToDo}) => {
    return (
        <div className="todo" style={{textDecoration: todo.isCompleted ? "line-through" : ""}}>
            <div className="content">
                <p>{todo.text}</p>
                <p>({todo.category})</p>
            </div>
            <div>
                <button className='complete' onClick={ () => completeToDo(todo.id)}>Completar</button>
                <button className='remove' onClick={ () => removeToDo(todo.id)}>x</button>
            </div>
        </div>
    )
}

export default Todo