import NavBar from "./components/navbar";
import ProjectPage from "./components/projectpage";
import { Project } from "./components/projectpage";

function Lyfter() {
  return (
    <ProjectPage>
      <NavBar></NavBar>
      <Project
        title="Lyfter"
        description="description coming soon"
        paragraphs={[
          "After finishing my last project I was eager to learn more modern tools. Then I learned about the 'T3 Stack' with an emphasis on type safety for both ease of development and safety at runtime. From hearing so much about Rust and its fabulous type safety, it piqued my interest, and i was sold. I started working on my latest project with the T3 stack (NextJs, React, Typescript, Tailwind and tRPC).",
          "I really built this as I went. And by that I mean I rebuilt it 3 times as I learned more and more about what the app and database schema needed. My biomedical engineering mentor would say 'if its worth doing, its worth doing twice', and if its worth doing twice its surely woth doing three or four times...",
          "I spent a lot of time on the db schema and how to queue up workouts. I could generate 4-5 weeks of workouts all at once when a user made a plan, and then queue up the one for the scheduled day. But what if they miss a day? Or go out of order? Thats not very flexible and what if they bail? Then I just spent ~130 db writes for nothing.",
          "I could make a WorkoutPlan entry and generate a new workout based on the day of the plan but then I lose the key feature of performance monitoring, it all depends on being able to pull up the prior weeks workout.",
          "I could make a menu of all the workouts and create a new one when the user selects it, but what if they got interrupted and wanted to resume a workout? Or they could make 10 monday workouts in one week on accident.",
          "Ultimately I decided to have menu of the week's scheduled workouts and create a new one if the date of the most recent entry of the selected workout was over one week old. This way the user has the most flexibility and freedom. Miss a workout? No problem, you can make it up the next day. Need to do two workouts in one day? Go ahead.",
        ]}
        repo={"https://github.com/JohnZolton/lyfter"}
        url="https://lyfter.vercel.app/"
      />
    </ProjectPage>
  );
}

export default Lyfter;
