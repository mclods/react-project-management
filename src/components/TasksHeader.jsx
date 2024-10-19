import { useState } from 'react';
import Button from './common/Button';

function TasksHeader({ selectedProjectId, addTask }) {
  const [task, setTask] = useState('');

  const onTaskChange = (event) => {
    setTask(event.target.value);
  };

  const onAddTask = () => {
    if (task.trim() !== '') {
      addTask(selectedProjectId, task);
      setTask('');
    }
  };

  return (
    <>
      <div className="mb-5">
        <p
          className="font-poppins text-3xl font-bold text-stone-700"
          data-testid="tasks-header"
        >
          Tasks
        </p>
      </div>
      <div className="flex items-center gap-x-2">
        <input
          type="text"
          className="w-80 h-10 pl-3 pr-3 bg-stone-200 rounded-sm focus:outline-stone-600 font-poppins text-base font-medium text-stone-700"
          value={task}
          onChange={onTaskChange}
          data-testid="new-task-input"
        />
        <Button type="light" onClick={onAddTask} data-testid="add-task-btn">
          Add Task
        </Button>
      </div>
    </>
  );
}

export default TasksHeader;
