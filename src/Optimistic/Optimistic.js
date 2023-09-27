import React, { useState, useRef, experimental_useOptimistic } from '@hunghg255/react';

const createTodo = (v) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: Math.random(),
        name: v + ' server',
      });
      // if (Math.random() < 0.5) {
      //   resolve({
      //     id: Math.random(),
      //     name: v,
      //   });
      // } else {
      //   reject('Something went wrong');
      // }
    }, 1500);
  });
};

const Optimistic = () => {
  const refInput = useRef(null);
  const [todos, setTodos] = useState([]);

  const [todosOptimistic, setTodosOptimistic] = experimental_useOptimistic(todos);

  const onAdd = async () => {
    try {
      const name = refInput.current.value;
      refInput.current.value = '';

      const todo = {
        id: Math.random(),
        name: name + ' client',
        pending: true,
      };

      setTodosOptimistic((prev) => [...prev, todo]);

      const newTodo = await createTodo(name);

      setTodos((prev) => [...prev, newTodo]);
    } catch (error) {
      setTodos((prev) => [...prev]);
    }
  };

  return (
    <>
      <h1>useOptimistic</h1>
      <input ref={refInput} />
      <button onClick={onAdd}>Add</button>

      <br />

      <ul>
        {todosOptimistic.map((todo) => (
          <li key={todo.id}>{todo.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Optimistic;
