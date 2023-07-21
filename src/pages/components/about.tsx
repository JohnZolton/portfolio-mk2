import Link from "next/link";

export const AboutSection = () => {
  return (
      <div className="flex flex-col gap-4 lg:py-8 text-lg pb-6">
        <div className="">
          It all started with degenerate crypto arbitrage bots. I instantly fell
          in love with the power of programming and I&apos;ve been studying
          computer science ever since.
        </div>
        <div className="">
          Now, I&apos;m blending health and tech. My Biomedical Engineering
          background lets me to craft tools that put health and fitness in
          people&apos;s hands. To me, tech is a tool for leading a healthier
          life.
        </div>
        <div className="">
          When I&apos;m not at the computer or staring into the abyss, I&apos;m
          usually hiking a trail with my dog,{" "}
          <Link
            href="murph"
            className="text-blue-300 hover:text-orange-200 hover:underline"
          >
            Murph
          </Link>
          .
        </div>
      </div>
  );
};

export default AboutSection;
