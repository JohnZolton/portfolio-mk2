import NavBar from "./components/navbar";
import ProjectPage from "./components/projectpage";
import { Project } from "./components/projectpage";

function MyFitnessBuddy() {
  return (
    <ProjectPage>
      <NavBar></NavBar>
      <Project title="MyFitnessBuddy" description="description coming soon" />
    </ProjectPage>
  );
}

export default MyFitnessBuddy;
