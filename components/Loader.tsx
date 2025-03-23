import Image from "next/image";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-green-950 z-50">
      <Image src="/Vyom_Logo.png" alt="Loading..." width={400} height={200} />
    </div>
  );
};

export default Loader;
