import './styles.css';

import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

//todoList.todos.forEach(todo => crearTodoHtml(todo));

todoList.todos.forEach(crearTodoHtml); //forma corta cuando es se entrega un solo argumento.

const newTodo = new Todo('Aprender JavaScript');
//todoList.nuevoTodo(newTodo);
todoList.todos[0].imprimirClase();

console.log('todos', todoList.todos);