import { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import NewProject from './components/NewProject';
import NoProjectsSelected from './components/NoProjectsSelected';
import SelectedProject from './components/SelectedProject';

function App() {
  const [projects, setProjects] = useState([]);
  const [projectState, setProjectState] = useState('no-project');

  // here we always try to update the state by doing deep copy first
  const saveProject = (title, description, dueDate) => {
    setProjects((prevProjects) => {
      const newProject = {
        id: prevProjects.length,
        title,
        description,
        dueDate,
        tasks: [],
        selected: false,
      };

      return [
        ...prevProjects.map((project) => ({
          ...project,
          tasks: [...project.tasks.map((task) => ({ ...task }))],
        })),
        newProject,
      ];
    });
    setProjectState('no-project');
  };

  const deleteProject = (projectId) => {
    setProjects((prevProjects) => {
      const currentProjects = [
        ...prevProjects.map((project) => ({
          ...project,
          tasks: [...project.tasks.map((task) => ({ ...task }))],
        })),
      ];

      return currentProjects.filter((project) => project.id !== projectId);
    });
    setProjectState('no-project');
  };

  const selectProject = (projectId) => {
    setProjects((prevProjects) => {
      return [
        ...prevProjects.map((project) => ({
          ...project,
          tasks: [...project.tasks.map((task) => ({ ...task }))],
          selected: project.id === projectId ? true : false,
        })),
      ];
    });
    setProjectState('selected-project');
  };

  const clearSelectedProject = () => {
    setProjects((prevProjects) => {
      return [
        ...prevProjects.map((project) => ({
          ...project,
          tasks: [...project.tasks.map((task) => ({ ...task }))],
          selected: false,
        })),
      ];
    });
    setProjectState('no-project');
  };

  const addTask = (projectId, newTask) => {
    setProjects((prevProjects) => {
      return [
        ...prevProjects.map((project) => ({
          ...project,
          tasks:
            project.id === projectId
              ? [
                  ...project.tasks.map((task) => ({ ...task })),
                  { taskName: newTask, id: project.tasks.length },
                ]
              : [...project.tasks.map((task) => ({ ...task }))],
        })),
      ];
    });
  };

  const clearTask = (projectId, taskIndex) => {
    setProjects((prevProjects) => {
      return [
        ...prevProjects.map((project) => ({
          ...project,
          tasks:
            project.id === projectId
              ? [...project.tasks.map((task) => ({ ...task }))].filter(
                  (task) => task.id !== taskIndex
                )
              : [...project.tasks.map((task) => ({ ...task }))],
        })),
      ];
    });
  };

  const cancelProject = () => {
    clearSelectedProject();
  };

  const openNewProject = () => {
    setProjectState('new-project');
  };

  const selectedProject = projects.find((project) => project.selected);

  let content = <NoProjectsSelected openNewProject={openNewProject} />;
  if (projectState === 'new-project') {
    content = (
      <NewProject saveProject={saveProject} cancelProject={cancelProject} />
    );
  } else if (projectState === 'selected-project') {
    content = (
      <SelectedProject
        selectedProject={selectedProject}
        deleteProject={deleteProject}
        addTask={addTask}
        clearTask={clearTask}
      />
    );
  }

  return (
    <main>
      <Sidebar
        projects={projects}
        openNewProject={openNewProject}
        selectProject={selectProject}
        clearSelectedProject={clearSelectedProject}
      />
      <section className="ml-80 mt-24">{content}</section>
    </main>
  );
}

export default App;
