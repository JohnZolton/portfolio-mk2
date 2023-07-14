import Link from "next/link";

export const AboutSection = () => {
  return (
    <div className="bg-slate-600 max-w-lg p-10 sm:p-10">
        <div className="flex flex-col gap-4">
<div className="text-lg">It all started with degenerate crypto arbitrage bots. I instantly fell in love with the power of programming and I've been studying computer science ever since.
</div>
<div className="text-lg">Now, I'm blending health and tech. My Biomedical Engineering background lets me to craft tools that put health and fitness in people's hands. To me, tech is a tool for leading a healthier life.</div>
<div className="text-lg">When I'm not at the computer or staring into the abyss, I'm usually hiking a trail with my dog, <Link href="murph" className="text-blue-300 hover:underline hover:text-orange-200">Murph</Link>.</div>

        </div>


    </div>
  );
};

export default AboutSection;
