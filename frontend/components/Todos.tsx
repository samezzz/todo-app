import React from 'react';
import { getData } from './crud';
import { TodoType } from '../interfaces/index';

interface todo {
  getData: TodoType;
}

const Todos: React.FC = () => {
  return (
    <div>
      Todos
    </div>
  );
};

export default Todos;
