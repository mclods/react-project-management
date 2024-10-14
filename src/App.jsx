import { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import NewProject from './components/NewProject';
import NoProjectsSelected from './components/NoProjectsSelected';
import SelectedProject from './components/SelectedProject';

function App() {
  const [projects, setProjects] = useState([]);
  const [showNewProject, setShowNewProject] = useState(false);

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
    setShowNewProject(false);
  };

  const selectProject = (id) => {
    setProjects((prevProjects) => {
      return [
        ...prevProjects.map((project) => ({
          ...project,
          tasks: [...project.tasks],
          selected: project.id === id ? true : false,
        })),
      ];
    });
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
  };

  const closeNewProject = () => {
    setShowNewProject(false);
    clearSelectedProject();
  };

  const openNewProject = () => {
    setShowNewProject(true);
  };

  const selectedProject = projects.find((project) => project.selected);

  return (
    <main>
      <Sidebar
        projects={projects}
        openNewProject={openNewProject}
        selectProject={selectProject}
        clearSelectedProject={clearSelectedProject}
      />
      <section className="ml-80 mt-24">
        {showNewProject ? (
          <NewProject
            saveProject={saveProject}
            cancelProject={closeNewProject}
          />
        ) : selectedProject ? (
          <SelectedProject selectedProject={selectedProject} />
        ) : (
          <NoProjectsSelected openNewProject={openNewProject} />
        )}
        {}
      </section>
    </main>
  );
}

export default App;
