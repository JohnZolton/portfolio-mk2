import CourseTile from "./coursetile";

export function CourseList() {
  return (
    <div className="mt-3 flex flex-col items-center">
      <div className="text-center text-3xl font-semibold">Education</div>
      <div className="m-1 max-w-xl  px-5 py-3">
        <CourseTile
          title="University of Akron School of Law"
          institution="Juris Doctor"
          description="Specializing in Intellectual Property"
        />
        <CourseTile
          title="University of Akron"
          institution="Bachelor of Science"
          description="Biomedical Engineering"
        />
      <div className="text-center my-2 text-2xl font-semibold">Computer Science Courses</div>
        <CourseTile
          title="Algorithms Specialization"
          institution="Standford"
          description="Analysis of algorithms from Divide and Conquer, to Graph Search, to Greedy Algorithms and Dynamic Programming"
        />
        <CourseTile
          title="Web Programming with Python and JavaScript"
          institution="Harvard CS50"
          description="Web development using HTML, CSS, python and JavaScript"
        />
        <CourseTile
          title="Artificial Intelligence with Python"
          institution="Harvard CS50"
          description="Methods of implementing AI from min-max recursive functions to image recognition neural networks"
        />
        <CourseTile
          title="Introduction to Programming with Python"
          institution="Harvard CS50"
        />
        <CourseTile
          title="Introduction to Computer Science"
          institution="Harvard CS50"
        />
      </div>
    </div>
  );
}

export default CourseList;
