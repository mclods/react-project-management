function Sidebar() {
  return (
    <aside className="w-80 bg-stone-950 fixed top-8 bottom-0 left-0 rounded-tr-xl text-white">
      <div className="mt-16 ml-5">
        <section>
          <h1 className="mb-4 font-poppins text-2xl font-medium uppercase">
            Your Projects
          </h1>
          <button className="px-4 py-2 mt-4 rounded-md bg-stone-800 hover:bg-stone-700 active:bg-neutral-800 text-stone-400 hover:text-stone-300 active:text-stone-500">
            + Add Project
          </button>
        </section>
        <section className="mt-8">
          <ul>
            {['Project 1', 'Project 2'].map((project, index) => (
              <li
                className="my-1 mr-8 px-2 py-1 rounded-sm text-ellipsis whitespace-nowrap overflow-hidden font-poppins text-lg tracking-wide text-stone-400 hover:bg-stone-800 hover:text-stone-300"
                key={index}
              >
                {project}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </aside>
  );
}

export default Sidebar;
