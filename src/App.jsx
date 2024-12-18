import { useState } from 'react';
import NewProject from './components/NewProject';
import NoProjectSelected from './components/NoProjectSelected';
import ProjectsSideBar from './components/ProjectsSideBar';
import './index.css';

function App() {

  const [projectState, setProjectState] = useState({
    selectedProject: undefined,
    projects: []
  })

  const handleStartAddProject = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProject: null,
      }
    })
  }

  let content;
  if(projectState.selectedProject === null) {
    content = <NewProject />
  } else if(projectState.selectedProject === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }

  return (
    <main className='h-screen my-8 flex gap-8'>
      <ProjectsSideBar />
      {content}
    </main>
  );
}

export default App;