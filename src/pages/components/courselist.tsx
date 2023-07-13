import CourseTile from "./coursetile";

export function CourseList() {
  return (
    <div className="bg-slate-600 py-3 px-5 m-1 max-w-xl">
      <div className="text-center text-3xl font-semibold">Education</div>
          <CourseTile 
            title="Algorithms Specialization" 
            institution="Standford"
            description="Analysis of algorithms from Divide and Conquer, to Graph Search, to Greedy Algorithms and Dynamic Programming"/>
          <CourseTile 
            title="Web Programming with Python and JavaScript" 
            institution="Harvard CS50"
            description="Web development using HTML, CSS, python and JavaScript"/>
          <CourseTile 
            title="Artificial Intelligence with Python" 
            institution="Harvard CS50"
            description="Methods of implementing AI from min-max recursive functions to image recognition neural networks"/>
          <CourseTile 
            title="Introduction to Programming with Python" 
            institution="Harvard CS50"
            />
          <CourseTile 
            title="Introduction to Computer Science" 
            institution="Harvard CS50"
            />
    </div>
  );
};

export default CourseList;
