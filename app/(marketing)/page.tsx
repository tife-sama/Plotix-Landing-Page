import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Example } from "./_components/example";
import Category from "./_components/category";
import { Explore } from "./_components/explore";
import { Writercta } from "./_components/writerCTA";
import { Companies } from "./_components/companies";
import { Coachcta } from "./_components/coachCTA";
import { Faqsection } from "./_components/faq";
import { Endcta } from "./Endcta";
import { Footersection } from "./_components/footersection";

const MarketingPage = () => {
  return (
    <div className="min-h-full flex flex-col">
      <div className="flex flex-col items-center justify-center md:justify-start text-center flex-1 px-6 pb-10">
        <Example />,
        <Category />
        <Explore />
        <Writercta />
        <Companies />
        <Coachcta />
        <Faqsection />
        <Endcta />
        <br />
        <Footersection />
      </div>
    </div>
  );
};

export default MarketingPage;
