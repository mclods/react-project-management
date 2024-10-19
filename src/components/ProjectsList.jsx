function ProjectsList({ projects, selectProject }) {
  return (
    <ul className="mt-8" data-testid="projects-list">
      {projects.map((project) => (
        <li key={project.id} className="my-1 mr-8">
          <button
            className={`w-full px-2 py-1 rounded-sm text-left text-ellipsis whitespace-nowrap overflow-hidden font-poppins text-lg tracking-wide ${project.selected ? 'bg-stone-800 text-stone-300' : 'text-stone-400'} hover:bg-stone-800 hover:text-stone-300`}
            onClick={() => selectProject(project.id)}
            data-testid={`select-${project.id}`}
          >
            {project.title}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ProjectsList;
