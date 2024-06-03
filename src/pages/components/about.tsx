import Link from "next/link";

export const AboutSection = () => {
  return (
    <div className="flex flex-col gap-4 pb-6 text-lg lg:py-8">
      <div className="">
        During law school I discovered degenerate crypto trading bots. I fell in
        love with the power of programming and I&apos;ve been coding ever since.
      </div>
      <div>Now I build tools to make life easier.</div>
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
