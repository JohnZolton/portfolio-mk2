import NavBar from "./components/navbar";
import ProjectPage from "./components/projectpage";
import { Project } from "./components/projectpage";

function FreeBay() {
  return (
    <ProjectPage>
      <NavBar></NavBar>
      <Project title="FreeBay" 
        paragraphs={[]}
        repo="https://github.com/JohnZolton/freebay"
        url="https://freebay.live"
      description="description coming soon" />
    </ProjectPage>
  );
}

export default FreeBay;
