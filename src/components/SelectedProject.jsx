import { useState } from 'react';
import Button from './common/Button';

function SelectedProject({
  selectedProject,
  deleteProject,
  addTask,
  clearTask,
}) {
  const [task, setTask] = useState('');

  const date = new Date(selectedProject.dueDate);
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(date);

  const onDeleteProject = () => {
    deleteProject(selectedProject.id);
  };

  const onTaskChange = (event) => {
    setTask(event.target.value);
  };

  const onAddTask = () => {
    if (task.trim() !== '') {
      addTask(selectedProject.id, task);
      setTask('');
    }
  };

  const onClearTask = (taskId) => {
    clearTask(selectedProject.id, taskId);
  };

  return (
    <section className="pl-10 pr-48">
      <header>
        <div className="flex items-center justify-between mb-3">
          <p className="font-poppins text-4xl font-bold text-stone-700">
            {selectedProject.title}
          </p>
          <Button type="light" onClick={onDeleteProject}>
            Delete
          </Button>
        </div>
        <div className="mb-3">
          <p className="font-medium text-xl text-stone-400">{formattedDate}</p>
        </div>
        <div>
          <pre className="whitespace-pre-wrap">
            {selectedProject.description}
          </pre>
        </div>
      </header>
      <hr className="mt-5 mb-5 bg-stone-400 border-none h-[0.18rem]" />
      <div className="mb-5">
        <p className="font-poppins text-3xl font-bold text-stone-700">Tasks</p>
      </div>
      <div className="flex items-center gap-x-2">
        <input
          type="text"
          className="w-80 h-10 pl-3 pr-3 bg-stone-200 rounded-sm focus:outline-stone-600 font-poppins text-base font-medium text-stone-700"
          value={task}
          onChange={onTaskChange}
        />
        <Button type="light" onClick={onAddTask}>
          Add Task
        </Button>
      </div>
      {selectedProject.tasks.length > 0 ? (
        <div className="w-full mt-8 mb-8 pl-6 pr-6 pt-7 pb-7 rounded-md bg-stone-100">
          <ul className="flex flex-col gap-y-3">
            {selectedProject.tasks.map((task) => (
              <li className="flex items-center justify-between" key={task.id}>
                <p className="font-poppins text-lg font-semibold text-stone-700 ">
                  {task.taskName}
                </p>
                <Button
                  type="light"
                  styles="text-lg w-20 h-8 text-stone-700 bg-inherit hover:text-red-600 active:text-red-600"
                  onClick={() => onClearTask(task.id)}
                >
                  Clear
                </Button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="w-full mt-8 mb-8">
          <p className="font-poppins text-lg text-stone-700">
            No tasks added to this project.
          </p>
        </div>
      )}
    </section>
  );
}

export default SelectedProject;
