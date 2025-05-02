import Link from "next/link";

export const AboutSection = () => {
  return (
    <div className="mb-8 w-full max-w-xl">
      <h2 className="mb-4 text-2xl font-bold text-gray-900">About Me</h2>
      <div className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm">
        <div className="flex flex-col gap-4 text-base text-gray-600">
          <p>
            Patent attorney turned software engineer with a passion for building
            innovative AI-powered tools.
          </p>
          <p>I will automate something tedious no matter how long it takes.</p>
          <p>
            When I&apos;m not at the computer or staring into the abyss,
            I&apos;m usually hiking a trail with my dog,{" "}
            <Link
              href="murph"
              className="font-medium text-blue-600 hover:text-blue-500 hover:underline"
            >
              Murph
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
