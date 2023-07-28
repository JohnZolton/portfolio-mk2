import NavBar from "./components/navbar";
import ProjectPage from "./components/projectpage";
import { Project } from "./components/projectpage";

function MyFitnessBuddy() {
  return (
    <ProjectPage>
      <NavBar></NavBar>
      <Project
        title="MyFitnessBuddy"
        repo="https://github.com/JohnZolton/fitness"
        url="https://nutritiontracker.bio/tracking/"
        paragraphs={[]}
        description="description coming soon"
      />
    </ProjectPage>
  );
}

export default MyFitnessBuddy;
