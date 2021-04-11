import { useState, useRef, useCallback } from 'react'
import TodoTemplate from './coomponents/views/TodoTemplatePage/TodoTemplate';
import TodoInsert from './coomponents/views/TodoInsertPage/TodoInsert';
import TodoList from './coomponents/views/TodoListPage/TodoList';
import './styles/global.scss';

function createBulkTodos() {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할일 : ${i}`,
      checked: false
    });
  }
  
  return array;
}
 
const App = () => {
  //#region 
  // [
  //   {
  //     id: 1,
  //     text: '프로젝트 실습 계획서 작성하기',
  //     checked: true,
  //   },
  //   {
  //     id: 2,
  //     text: '자기소개서 작성하기',
  //     checked: true
  //   },
  //   {
  //     id: 3,
  //     text: 'Todo List 구현 완성하기',
  //     checked: false
  //   }
  // ]
  //#endregion

  const [todos, setTodos] = useState(createBulkTodos);

  const nextId = useRef(4);

  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false, 
      };
      setTodos(todos => todos.concat(todo));
      nextId.current += 1
    },
    [], 
  );

  const onRemove = useCallback(
    id => {
      setTodos(todos => todos.filter(todo => todo.id !== id));
    }, [],
  );

  const onToggle = useCallback(
    id => {
      setTodos(todos =>
        todos.map(todo =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
          ),
      );
    },
    [],
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert}/>
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
}

export default App;
