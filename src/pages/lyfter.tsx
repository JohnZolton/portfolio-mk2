import NavBar from "./components/navbar";
import ProjectPage from "./components/projectpage";
import { Project } from "./components/projectpage";

function Lyfter() {
  return (
    <ProjectPage>
      <NavBar></NavBar>
      <Project title="Lyfter" description="description coming soon" />
    </ProjectPage>
  );
}

export default Lyfter;
