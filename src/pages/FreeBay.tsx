import NavBar from "./components/navbar";
import ProjectPage from "./components/projectpage";
import { Project } from "./components/projectpage";

function FreeBay() {
  return (
    <ProjectPage>
      <NavBar></NavBar>
      <Project title="FreeBay" 
        paragraphs={[
"This is an e-commerce auction web app akin to eBay or facebook marketplace. Users can create new listings to auction off items, with optional categories and pictures. Users can place bids on listings, comment on listings, see the current price and see the time remaining. The owner of a listing can close bidding at any time. Then the winner can see if they won a given item.",
"I added increased account security by implementing 2FA by generating a QR code on the server and rendering it on the client. Once a user confirms they have generated the 2FA code, it is enabled for their account and required to log in. Users can enable and disable this feature, as well as change their emails and passwords. I enabled password changing manually by comparing password hashes before updating the new password."
        ]}
        repo="https://github.com/JohnZolton/freebay"
        url="https://freebay.live"
        youtube="FtQ04IJt4WY"
      />
    </ProjectPage>
  );
}

export default FreeBay;
