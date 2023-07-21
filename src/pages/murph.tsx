import NavBar from "./components/navbar";
import Image from "next/image";

function Murph() {
  const imageFiles = [
    "img9.png",
    "img7.jpg",
    "img5.jpg",
    "img1.jpg",
    "img2.png",
    "img6.jpg",
    "img3.png",
  ];

  return (
    <div className="flex justify-center flex-col items-center">
      <NavBar></NavBar>
      <div className="columns-1 gap-8 sm:columns-2 md:columns-3">
        {imageFiles &&
          imageFiles.map((image, index) => (
            <Image
              src={`/murph/${image}`}
              alt={image}
              width={300}
              height={200}
              objectFit="cover"
              className="my-8 w-full transform overflow-hidden rounded-xl transition-transform duration-500 ease-in-out hover:scale-105"
              key={index}
            />
          ))}
      </div>
    </div>
  );
}

export default Murph;
