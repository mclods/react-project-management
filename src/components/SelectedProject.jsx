import Button from './common/Button';

function SelectedProject({ selectedProject }) {
  const getFormattedDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  };

  return (
    <section className="pl-10 pr-48">
      <div className="flex items-center justify-between mb-3">
        <p className="font-poppins text-4xl font-bold text-stone-700">
          {selectedProject.title}
        </p>
        <Button type="light">Delete</Button>
      </div>
      <div className="mb-3">
        <p className="font-medium text-xl text-stone-400">
          {getFormattedDate(selectedProject.dueDate)}
        </p>
      </div>
      <div>
        <pre className="whitespace-pre-wrap">{selectedProject.description}</pre>
      </div>
      <hr className="mt-5 mb-5 bg-stone-400 border-none h-[0.18rem]" />
      <div className="mb-5">
        <p className="font-poppins text-3xl font-bold text-stone-700">Tasks</p>
      </div>
      <div className="flex items-center gap-x-2">
        <input
          type="text"
          className="w-80 h-10 pl-3 pr-3 bg-stone-200 rounded-sm focus:outline-stone-600 font-poppins text-base font-medium text-stone-700"
        />
        <Button type="light">Add Task</Button>
      </div>
      <div className="w-full mt-8 mb-8 pl-6 pr-6 pt-7 pb-7 rounded-md bg-stone-100">
        <ul className="flex flex-col gap-y-3">
          {['Task 1', 'Task 2'].map((task, index) => (
            <li className="flex items-center justify-between" key={index}>
              <p className="font-poppins text-lg font-semibold text-stone-700 ">
                {task}
              </p>
              <Button
                type="light"
                styles="text-lg w-20 h-8 text-stone-700 bg-inherit hover:text-red-600 active:text-red-600"
              >
                Clear
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default SelectedProject;
