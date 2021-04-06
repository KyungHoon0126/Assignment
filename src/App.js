import { useState, useRef, useCallback } from 'react'
import TodoTemplate from './coomponents/views/TodoTemplatePage/TodoTemplate';
import TodoInsert from './coomponents/views/TodoInsertPage/TodoInsert';
import TodoList from './coomponents/views/TodoListPage/TodoList';
import './styles/global.scss';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '프로젝트 실습 계획서 작성하기',
      checked: true,
    },
    {
      id: 2,
      text: '자기소개서 작성하기',
      checked: true
    },
    {
      id: 3,
      text: 'Todo List 구현 완성하기',
      checked: false
    }
  ]);

  const nextId = useRef(4);

  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false, 
      };
      setTodos(todos.concat(todo));
      nextId.current += 1
    },
    [todos], 
  );

  const onRemove = useCallback(
    id => {
      setTodos(todos.filter(todo => todo.id !== id));
    }, [todos],
  );

  const onToggle = useCallback(
    id => {
      setTodos(
        todos.map(todo =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
          ),
      );
    },
    [todos],
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert}/>
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
}

export default App;
