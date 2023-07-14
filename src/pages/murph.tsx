import NavBar from "./components/navbar";
import PageLayout from "./components/pagelayout";
import Image from "next/image";

function Murph() {
  const imageFiles = [
    ["img9.png", "img7.jpg"],
    ["img5.jpg", "img1.jpg", "img2.png"],
    ["img6.jpg", "img3.png"],
  ];

  return (
    <PageLayout>
      <NavBar></NavBar>
      <div className="flex flex-row flex-wrap justify-center">
        {imageFiles &&
          imageFiles.map((column, index) => (
            <div className="flex flex-col" key={index}>
              {column &&
                column.map((image) => (
                  <div
                    key={image}
                    className="m-3 flex-shrink-0 transform overflow-hidden rounded-xl transition-transform duration-500 ease-in-out hover:scale-105"
                  >
                    <Image
                      src={`/murph/${image}`}
                      alt={image}
                      width={300}
                      height={200}
                      objectFit="cover"
                    />
                  </div>
                ))}
            </div>
          ))}
      </div>
    </PageLayout>
  );
}

export default Murph;
