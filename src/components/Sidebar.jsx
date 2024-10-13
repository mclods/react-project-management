function Sidebar({
  projects,
  openNewProject,
  selectProject,
  clearSelectedProject,
}) {
  const onSelect = (id) => {
    selectProject(id);
  };

  return (
    <aside className="w-80 bg-stone-950 fixed top-8 bottom-0 left-0 rounded-tr-xl text-white">
      <div className="mt-16 ml-5">
        <section>
          <button
            className="mb-4 font-poppins text-2xl font-medium uppercase"
            onClick={clearSelectedProject}
          >
            Your Projects
          </button>
          <button
            className="px-4 py-2 mt-4 rounded-md font-poppins bg-stone-800 hover:bg-stone-700 active:bg-neutral-800 text-stone-400 hover:text-stone-300 active:text-stone-500"
            onClick={openNewProject}
          >
            + Add Project
          </button>
        </section>
        <section className="mt-8">
          <ul>
            {projects.map((project) => (
              <li key={project.id} className="my-1 mr-8">
                <button
                  className={`w-full px-2 py-1 rounded-sm text-left text-ellipsis whitespace-nowrap overflow-hidden font-poppins text-lg tracking-wide ${project.selected ? 'bg-stone-800 text-stone-300' : 'text-stone-400'} hover:bg-stone-800 hover:text-stone-300`}
                  onClick={() => onSelect(project.id)}
                >
                  {project.title}
                </button>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </aside>
  );
}

export default Sidebar;
