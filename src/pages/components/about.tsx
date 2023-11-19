import Link from "next/link";

export const AboutSection = () => {
  return (
      <div className="flex flex-col gap-4 lg:py-8 text-lg pb-6">
        <div className="">
          During law school I discovered degenerate crypto arbitrage trading bots. I instantly fell
          in love with the power of programming and I&apos;ve been studying
          computer science ever since.
        </div>
        <div className="">
          Now I use my unique background of Biomedical Engineering, Patent Law, now Software Engineering to secure key business assets for my clients. 
        </div>
        <div className="">
          When I&apos;m not at the computer or staring into the abyss, I&apos;m
          usually hiking a trail with my dog,{" "}
          <Link
            href="murph"
            className="text-orange-300 hover:text-orange-200 hover:underline"
          >
            Murph
          </Link>
          .
        </div>
      </div>
  );
};

export default AboutSection;
