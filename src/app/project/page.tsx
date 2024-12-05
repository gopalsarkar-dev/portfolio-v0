import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Metadata } from "next";
import "swiper/css/effect-cards";
import { projectPageSeo } from "../../../utils/pageSeoInfo";

import SwiperCardInfo from "@/components/SwiperCardInfo";

import {
  backendProjectInfo,
  frontendProjectInfo,
} from "../../../utils/projectInfo";

import "swiper/css/effect-cards";

import "swiper/css/navigation";

import "swiper/css";
import "swiper/css/pagination";

// page title and generateMetadata
export const generateMetadata = (): Metadata => {
  return projectPageSeo;
};

const page = () => {
  return (
    <>
      <div className="pb-14 mt-20 space-y-5">
        <div className="text-neutral-900 dark:bg-clip-text text-5xl font-bold dark:text-transparent dark:bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400 sm:text-6xl">
          All Project
        </div>
        {/* <div className="text-neutral-900 dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400 sm:text-2xl">
          Recentely I completed my all Project !
        </div> */}

        <Tabs defaultValue="fullstack-project" className="space-y-5">
          <TabsList className="grid grid-cols-2">
            <TabsTrigger value="fullstack-project">
              Full-Stack Project
            </TabsTrigger>
            <TabsTrigger value="frontend-project">Frontend Project</TabsTrigger>
          </TabsList>

          <TabsContent value="frontend-project">
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-5">
              {frontendProjectInfo.map((pInfo, pIndex) => (
                <SwiperCardInfo info={pInfo} key={pIndex} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="fullstack-project">
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-5">
              {backendProjectInfo.map((pInfo, pIndex) => (
                <SwiperCardInfo info={pInfo} key={pIndex} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default page;
