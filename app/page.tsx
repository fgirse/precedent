import Card from "@/components/home/card";
import Balancer from "react-wrap-balancer";
import { DEPLOY_URL } from "@/lib/constants";
import { Github, Twitter } from "@/components/shared/icons";
import WebVitals from "@/components/home/web-vitals";
import ComponentGrid from "@/components/home/component-grid";
import Image from "next/image";
import { nFormatter } from "@/lib/utils";
import { archidaught, lontoutline } from '../utils/fonts';
export default async function Home() {
  
  return (
    
      <div className=" z-10 w-full max-w-xl px-5 xl:px-0">
      <div className={lontoutline.className}> <h1 className="text-9xl text-amber-500">Home</h1></div>
       </div>
    
  );
}

