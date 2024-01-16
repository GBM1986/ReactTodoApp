import React, { useState, useEffect } from 'react';
import { FaCheck, FaPlusCircle, FaTrash } from 'react-icons/fa';

function App() {
  const [todos, setTodos] = useState([]);
  const [inprogress, setInprogress] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    const todo = {
      id: Math.floor(Math.random() * 1000),
      text: input,
    };
    setTodos([todo, ...todos]);
  };

  const addToProgress = (id) => {
    const item = todos.find((x) => x.id === id);
    setInprogress([item, ...inprogress]);
    const filterArray = todos.filter((x) => x.id !== id);
    setTodos(filterArray);
  };

  const deleteTodo = (id, stage) => {
    if (stage === 'todos') {
      const filterArray = todos.filter((x) => x.id !== id);
      setTodos(filterArray);
    } else if (stage === 'inprogress') {
      const filterArray = inprogress.filter((x) => x.id !== id);
      setInprogress(filterArray);
    } else if (stage === 'completed') {
      const filterArray = completed.filter((x) => x.id !== id);
      setCompleted(filterArray);
    }
  };

  const addtoCompleted = (id) => {
    const item = inprogress.find((x) => x.id === id);
    setCompleted([item, ...completed]);
    const filterArray = inprogress.filter((x) => x.id !== id);
    setInprogress(filterArray);
  };

  const deleteAllCompleted = () => {
    setCompleted([]);
  };

  useEffect(() => {}, [todos, inprogress]);

  return (
    <div className="flex items-center justify-center min-h-screen font-body bg-background">
      <div className="w-full md:w-8/12 p-4 md:p-8 bg-background rounded-lg shadow-lg">
        <h3 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4">ToDo List</h3>
        <form className="flex items-center justify-between mb-4">
          <input
            type="text"
            className="w-4/5 md:w-4/5 h-12 px-4 border-none rounded-l-md"
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter Your Todo"
            name="text"
          />
          <button
            type="button"
            className="w-1/5 md:w-1/5 h-12 border-2 rounded-r-md hover:bg-white "
            onClick={() => addTodo()}
          >
            <FaPlusCircle className="inline-block text-xl text-white" />
          </button>
        </form>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-8">
          {/* Todos List */}
          <div className="w-full md:w-1/3 p-4 md:p-8 bg-todos rounded-lg shadow-lg">
            <h3 className="text-xl md:text-2xl font-bold mb-2">Todos List</h3>
            {todos.map((item) => (
              <div
                className=" p-4 md:p-2 rounded-md flex flex-col md:flex-row items-center justify-between"
                key={item.id}
              >
                <p>{item.text}</p>
                <div className="flex cursor-pointer gap-10 mt-2 md:mt-0">
                  <FaCheck onClick={() => addToProgress(item.id)} />
                  <FaTrash onClick={() => deleteTodo(item.id, 'todos')} />
                </div>
              </div>
            ))}
          </div>

          {/* In Progress */}
          <div className="w-full md:w-1/3 p-4 md:p-8 bg-inprogress rounded-lg shadow-lg">
            <h3 className="text-xl md:text-2xl font-bold mb-2">InProgress</h3>
            {inprogress.map((item) => (
              <div
                className="p-4 md:p-2 rounded-md flex flex-col md:flex-row items-center justify-between"
                key={item.id}
              >
                <p className="">{item.text}</p>
                <div className="flex cursor-pointer gap-10 mt-2 md:mt-0">
                  <FaCheck onClick={() => addtoCompleted(item.id)} />
                  <FaTrash onClick={() => deleteTodo(item.id, 'inprogress')} />
                </div>
              </div>
            ))}
          </div>

          {/* Completed */}
          <div className="w-full md:w-1/3 p-4 md:p-8 bg-completed rounded-lg shadow-lg">
            <h3 className="text-xl md:text-2xl font-bold mb-2">Completed</h3>
            {completed.map((item) => (
              <div
                className="p-4 md:p-2 rounded-md flex flex-col md:flex-row items-center justify-between"
                key={item.id}
              >
                <p>{item.text}</p>
                <div className="flex cursor-pointer gap-10 mt-2 md:mt-0">
                  <FaTrash onClick={() => deleteTodo(item.id, 'completed')} />
                </div>
              </div>
            ))}
            <button
              type="button"
              className="w-1/3 mx-auto h-12 text-white pt-2 rounded-md bg-secondary transition duration-300 hover:bg-delete hover:text- mt-4 flex flex-col items-center"
              onClick={deleteAllCompleted}
              >
              Delete All 
              <FaTrash className='pb-2 text-xl' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
