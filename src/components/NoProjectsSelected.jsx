import clipboardImage from '../assets/no-projects.png';

function NoProjectsSelected({ openNewProject }) {
  return (
    <section className="pt-10" data-testid="no-project-section">
      <div className="mx-auto w-24 h-24" data-testid="no-projects-img">
        <img src={clipboardImage} alt="A clipboard with a pen" />
      </div>
      <p className="mx-auto w-fit py-5 font-poppins text-3xl tracking-wide font-semibold text-stone-600">
        No Project Selected
      </p>
      <p className="mx-auto w-fit pb-8 font-poppins text-xl font-medium text-stone-400">
        Select a project or get started with a new one
      </p>
      <button
        className="mx-auto block px-4 py-2 rounded-md text-lg font-poppins font-normal bg-stone-700 hover:bg-stone-800 active:bg-stone-900 text-stone-400 hover:text-stone-300 active:text-stone-200"
        onClick={openNewProject}
        data-testid="create-new-project-btn"
      >
        Create new project
      </button>
    </section>
  );
}

export default NoProjectsSelected;
