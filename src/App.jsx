import { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import SelectedProject from './components/SelectedProject';
import NoProjectsSelected from './components/NoProjectsSelected';

function App() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState();

  return (
    <>
      <main>
        <Sidebar />
        <section className="ml-80 mt-24">
          {selectedProject ? <SelectedProject /> : <NoProjectsSelected />}
        </section>
      </main>
    </>
  );
}

export default App;
