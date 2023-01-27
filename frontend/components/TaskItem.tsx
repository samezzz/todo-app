'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { gql } from '@apollo/client';
import client from '../apollo-client';
import { TodoType } from '../interfaces/index';
import AnimatedCheck from './AnimatedCheck';
import { UPDATE_TODO } from './crud';
import { GET_TODOS } from './crud';
import Input from './Input';

interface Props {
  data: TodoType;
}

const TaskItem: React.FC<Props> = ({data}) => {
  const router = useRouter();
  const [title, setTitle] = useState<string>(data.title);
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleUpdateTask = async (id: Partial<TodoType>, refresh: () => void) => {
    setLoading(true);
    if (id && id.id) {
      const intId = parseInt(id.id);
      const { data } = await client.mutate({
        mutation: UPDATE_TODO,
        variables: {
          id: intId,
          isFinished: !isFinished
        },
        update: (cache, { data }) => {
          cache.readQuery({
            query: GET_TODOS,
            variables: { id: intId }
          });
          const updatedTodo = data.updateTodo;
          cache.writeQuery({
            query: GET_TODOS,
            data: { todo: [updatedTodo] },
            variables: { id: intId }
          });
        },
      });
      console.log(data);

      setIsFinished(!isFinished);
      setIsEditing(false);
      setLoading(false);
    }
  };

  return (
    <div className="flex bg-white dark:bg-[#1c1c1c] p-2 mb-2 last:mb-0 rounded cursor-pointer">
      <div className="basis-8 mr-2">
        {loading ? <div>Loading...</div> : <AnimatedCheck checked={data.isFinished} toggle={() => handleUpdateTask({id: data.id}, router.refresh)} />}
      </div>
      <form onSubmit={(e) => {
        e.preventDefault();
        handleUpdateTask({title}, router.refresh)
      }} className="flex flex-1">
        <Input name="todo" value={title} disabled={data.isFinished} onChange={value => {
          setTitle(value);
          setIsEditing(true);
        }} />
      </form>
    </div>
  );
};

export default TaskItem;
