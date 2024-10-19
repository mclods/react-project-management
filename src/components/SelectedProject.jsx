import Button from './common/Button';
import TasksList from './TasksList';
import TasksHeader from './TasksHeader';

function SelectedProject({
  selectedProject,
  deleteProject,
  addTask,
  clearTask,
}) {
  const date = new Date(selectedProject.dueDate);
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(date);

  const onDeleteProject = () => {
    deleteProject(selectedProject.id);
  };

  return (
    <section className="pl-10 pr-48" data-testid="selected-project-section">
      <header>
        <div className="flex items-center justify-between mb-3">
          <p
            className="font-poppins text-4xl font-bold text-stone-700"
            data-testid="project-title"
          >
            {selectedProject.title}
          </p>
          <Button
            type="light"
            onClick={onDeleteProject}
            data-testid="delete-btn"
          >
            Delete
          </Button>
        </div>
        <div className="mb-3">
          <p
            className="font-medium text-xl text-stone-400"
            data-testid="project-due-date"
          >
            {formattedDate}
          </p>
        </div>
        <div>
          <pre
            className="whitespace-pre-wrap"
            data-testid="project-description"
          >
            {selectedProject.description}
          </pre>
        </div>
      </header>
      <hr className="mt-5 mb-5 bg-stone-400 border-none h-[0.18rem]" />
      <TasksHeader selectedProjectId={selectedProject.id} addTask={addTask} />
      <TasksList selectedProject={selectedProject} clearTask={clearTask} />
    </section>
  );
}

export default SelectedProject;
