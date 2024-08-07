import hoodie from "@/assets/hoodie.avif";
import ProductOverview from "@/components/products/product-overview";
import Image from "next/image";

export default function Heroes() {
  return (
    <div>
      <ProductOverview />
      <div className="h-12"></div>
      <div className="h-12"></div>
      <div className="h-screen"></div>
    </div>
  );
}
