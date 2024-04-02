import React from 'react'
import { useState } from 'react'

const TodoForm = ( {addToDo} ) => {
    const [value, setValue] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!value || !category) return; // Se Não haver valor ou categoria, vai retornar void.
        addToDo(value, category);
        setCategory(""); // Faz o reset dos inputs/select, os quais receberam em seu value o valor da variável value e category. Muito funcional. O atributo value especifica o valor inicial do elemento.
        setValue(""); //Vide nota acima.
        console.log(value, category)
    };






    return (
        <div className="todo-form">
            <h2>Criar tarefa:</h2>
            <form onSubmit={handleSubmit}>
                <input value={value} type="text" placeholder="Digite o título" onChange={(e) => setValue(e.target.value)} />
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="">Selecione uma categoria</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Pessoal">Pessoal</option>
                    <option value="Estudos">Estudos</option>

                </select>
                <button type="submit">Criar tarefa</button>
            </form>
        </div>
    )
}

export default TodoForm