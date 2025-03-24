import Image from "next/image";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50 w-screen h-screen">
      <div className="w-full h-full flex items-center justify-center">
        <Image 
          src="/vyom.gif" 
          alt="Loading..." 
          fill
          className="object-cover"
          unoptimized={true}
          priority={true}
        />
      </div>
    </div>
  );
};

export default Loader;