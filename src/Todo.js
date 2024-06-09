import React, { useState, useEffect } from 'react';
import "./App.css";

// DB Connection
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from './firebase';

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");

    const fetchTodos = async () => {
        const querySnapshot = await getDocs(collection(db, "ReactAppTest"));
        const todoList = querySnapshot.docs.map(doc => ({
            ...doc.data(),
            id: doc.id
        }));
        setTodos(todoList);
    }

    useEffect(() => {
        fetchTodos();
    }, []);

    const handleAddTodo = async (e) => {
        e.preventDefault();

        try {
            await addDoc(collection(db, "ReactAppTest"), { todo: newTodo });
            fetchTodos();  // Fetch the updated list of todos
            setNewTodo("");  // Clear the input field
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    }

    return (
        <section className="todo-container">
            <div className="todo">
                <h1 className="header">
                    Todo-App
                </h1>

                <div>
                    <div>
                        <input
                            type="text"
                            placeholder="What do you have to do today?"
                            value={newTodo}
                            onChange={(e) => setNewTodo(e.target.value)}
                        />
                    </div>

                    <div className="btn-container">
                        <button
                            type="submit"
                            className="btn"
                            onClick={handleAddTodo}
                        >
                            Submit
                        </button>
                    </div>
                </div>

                <div className="todo-content">
                    {todos.map((todoItem) => (
                        <p key={todoItem.id}>
                            {todoItem.todo}
                        </p>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Todo;
