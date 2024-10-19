import Button from './common/Button';

function TasksList({ selectedProject, clearTask }) {
  const onClearTask = (taskId) => {
    clearTask(selectedProject.id, taskId);
  };

  return (
    <>
      {selectedProject.tasks.length > 0 ? (
        <div className="w-full mt-8 mb-8 pl-6 pr-6 pt-7 pb-7 rounded-md bg-stone-100">
          <ul className="flex flex-col gap-y-3" data-testid="tasks-list">
            {selectedProject.tasks.map((task) => (
              <li className="flex items-center justify-between" key={task.id}>
                <p
                  className="font-poppins text-lg font-semibold text-stone-700"
                  data-testid="task-name"
                >
                  {task.taskName}
                </p>
                <Button
                  type="light"
                  styles="text-lg w-20 h-8 text-stone-700 bg-inherit hover:text-red-600 active:text-red-600"
                  onClick={() => onClearTask(task.id)}
                  data-testid="clear-task-btn"
                >
                  Clear
                </Button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="w-full mt-8 mb-8">
          <p
            className="font-poppins text-lg text-stone-700"
            data-testid="no-task-header"
          >
            No tasks added to this project.
          </p>
        </div>
      )}
    </>
  );
}

export default TasksList;
