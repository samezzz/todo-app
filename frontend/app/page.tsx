import TaskItem from '@/components/TaskItem';
import { TodoType } from '../interfaces/index';
import { getData } from '../components/crud';

export default async function Home() {
  const data: {todos: TodoType[]} = await getData();
  return (
    <div className="absolute inset-0 w-full h-max max-h-full overflow-auto rounded bg-black/10 dark:bg-white/5">
      <div className="p-4">
        {data.todos.map((todo: TodoType) => (
          <TaskItem key={todo.id} data={todo} />
        ))}
      </div>
    </div>
  )
}
