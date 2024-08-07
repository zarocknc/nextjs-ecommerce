import Image from "next/image";
import hoodie from "@/assets/hoodie.avif";
import GuiaTallas from "./guia-tallas";
export default function ProductOverview() {
  return (
    <div className="bg-splash">
      <h1 className="text-3xl font-bold font-mono text-lime">CaskadyaN</h1>
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
    <div className="mx-2">
      <div className="mt-2">
        <h1 className="font-bold text-lime font-mono text-2xl">
          Full Metal Jacket
        </h1>
      </div>
      <div className="font-light flex justify-between">
        <div>
          <span className="text-slate-500">Algodón</span>
        </div>
        <GuiaTallas />
      </div>
      <div className="text-red-500 font-mono font-bold text-xl">S/89.99</div>
      <div className="mt-2 font-bold">
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
