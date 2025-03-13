import MultiBanner from "@/components/Home/Multibanner";
import Hero from "../Home/Hero";
import NewCollection from "@/components/Home/NewCollection";
import Topbrand from "@/components/Home/Topbrand";
import Benefits from "@/components/Home/Benefits";
import ProductNav from "@/components/Home/ProductNav";
import SlidingProduct from "@/components/Home/SlidingProduct";
import Newsletter from "@/components/Home/Newsletter";

export const Home = () => {
  return (
    <div className="flex flex-col gap-10">
      <Hero/>
      <MultiBanner/>
      <NewCollection/>
      <Topbrand/>
      <Benefits/>
      <ProductNav/>
      <SlidingProduct/>
      <Newsletter/>
    </div>
  );
};
