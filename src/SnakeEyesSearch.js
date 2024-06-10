import React, { useState, useEffect } from 'react';
import "./App.css";

// DB Connection
import { collection, addDoc, getDocs, getDoc, doc } from "firebase/firestore";
import { db } from './firebase';

const SnakeEyesSearch = () => {
    const [movieSubtitles, setMovieSubtitles] = useState([])

    const [todos, setTodos] = useState([]);
    const [filteredTodos, setFilteredTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");
    const [searchTerm, setSearchTerm] = useState("");

    // Fetch 'SnakeEyes1998' document from 'Media' collection in Firestore
    const fetchDataFromDB = async () => {
        try {
            console.log('fetchDataFromDB()')
            const movieName = "SnakeEyes1998"
            const docRef = doc(db, "Media", movieName);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                const data = docSnap.data();
                console.log('Document data:', data);

                // Assuming the data structure fits todos
                setTodos([data]);
                setFilteredTodos([data]);
            } else {
                console.log('No such document!');
            }
        } catch (error) {
            console.error('Error getting document:', error);
        }
    };
    
    // Call function on initial dom load to fetch 'todos' from db.
    useEffect(() => {
        fetchDataFromDB();
    }, []);

    // Handle when user submits new 'todo' to add to db.
    const handleAddTodo = async (e) => {
        e.preventDefault();

        try {
            await addDoc(collection(db, "ReactAppTest"), { todo: newTodo });
            fetchDataFromDB();  // Fetch the updated list of todos
            setNewTodo("");  // Clear the input field
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    }

    // Handle when user searches for text in db results.
    const handleSearch = (e) => {
        const term = e.target.value;
        setSearchTerm(term);
        
        if (term.length >= 3) {
            const results = todos.filter(todo => todo.todo.toLowerCase().includes(term.toLowerCase()));
            setFilteredTodos(results);
        } else {
            setFilteredTodos(todos);
        }
    }

    return (
        <section className="todo-container">
            <div className="todo">
                <h1 className="header">
                    Snake Eyes 1998 Search
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

                <div>
                    <div>
                        <input
                            type="text"
                            placeholder="Search quote:"
                            value={searchTerm}
                            onChange={handleSearch}
                        />
                    </div>
                </div>

                <div className="todo-content">
                    {filteredTodos.map((todoItem) => (
                        <p key={todoItem.id}>
                            {todoItem.todo}
                        </p>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default SnakeEyesSearch;
