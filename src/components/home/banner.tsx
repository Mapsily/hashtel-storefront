import Image from "next/image";

type BANNER = {
  url: string;
  type: "video" | "image" | string;
};

const Banner = ({ url, type }: BANNER) => {
  return (
    <div
      className={`relative flex flex-col-reverse md:flex-row items-center justify-center w-screen min-h-[540px]`}
    >
      {type === "video" ? (
        <video
          width={320}
          height={240}
          src={url}
          title="banner video"
          preload="auto"
          autoPlay
          className="absolute top-0 left-0 w-full h-full"
        />
      ) : (
        <Image
          src={url}
          alt="banner"
          width={1080}
          height={420}
          className="absolute top-0 left-0 w-full h-full"
          style={{ objectFit: "cover" }}
        />
      )}
    </div>
  );
};

export default Banner;
