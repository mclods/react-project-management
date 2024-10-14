import { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import NewProject from './components/NewProject';
import NoProjectsSelected from './components/NoProjectsSelected';
import SelectedProject from './components/SelectedProject';

function App() {
  const [projects, setProjects] = useState([]);
  const [projectState, setProjectState] = useState('no-project');

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
          tasks: [...project.tasks],
        })),
        newProject,
      ];
    });
    setProjectState('no-project');
  };

  const selectProject = (projectId) => {
    setProjects((prevProjects) => {
      return [
        ...prevProjects.map((project) => ({
          ...project,
          tasks: [...project.tasks],
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
          tasks: [...project.tasks],
          selected: false,
        })),
      ];
    });
    setProjectState('no-project');
  };

  const addTask = (projectId, task) => {
    setProjects((prevProjects) => {
      return [
        ...prevProjects.map((project) => ({
          ...project,
          tasks:
            project.id === projectId
              ? [...project.tasks, task]
              : [...project.tasks],
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
              ? project.tasks.filter((task, index) => index !== taskIndex)
              : [...project.tasks],
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

  let project = <NoProjectsSelected openNewProject={openNewProject} />;
  if (projectState === 'new-project') {
    project = (
      <NewProject saveProject={saveProject} cancelProject={cancelProject} />
    );
  } else if (projectState === 'selected-project') {
    project = (
      <SelectedProject
        selectedProject={selectedProject}
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
      <section className="ml-80 mt-24">{project}</section>
    </main>
  );
}

export default App;
