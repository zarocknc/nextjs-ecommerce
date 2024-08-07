import Image from "next/image";
import hoodie from "@/assets/hoodie.avif";
export default function ProductOverview() {
  return (
    <div className="h-screen-minus-nav bg-splash max-h-screen">
      <h1 className="text-3xl font-bold font-mono text-lime">CasCakyaN</h1>
      <div className="w-full border-2 border-red-300">
        <Image
          src={hoodie}
          alt="hoodie asset"
          className="object-contain w-full md:w-[30%]"
        />
      </div>
      <hr className="h-[2px] bg-black border-0 " />
      <HeadCard />
    </div>
  );
}

function HeadCard() {
  return (
    <div>
      <div className="mx-2 mt-2">
        <h1 className="font-bold text-lime font-mono text-2xl">
          Full Metal Jacket
        </h1>
      </div>
      <div className="mx-2 font-light">
        <span className="text-slate-500">Algodón</span>
      </div>
      <div className="mx-2 mt-2 font-bold">
        <span className="text-black">Tallas</span>
        <ul className="flex text-black space-x-2">
          <li className="block border-black border-2 w-12 text-center">S</li>
          <li className="block border-black border-2 w-12 text-center">M</li>
          <li className="block border-black border-2 w-12 text-center">L</li>
          <li className="block border-black border-2 w-12 text-center">XL</li>
        </ul>
      </div>
    </div>
  );
}
