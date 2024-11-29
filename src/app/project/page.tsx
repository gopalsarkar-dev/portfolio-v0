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
      <div className="grid gap-8 pb-14 mt-20">
        <div className="text-neutral-900 dark:bg-clip-text text-5xl font-bold dark:text-transparent dark:bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400 sm:text-6xl">
          All Project
        </div>
        <div className="grid place-items-center">
          <Tabs defaultValue="frontend-project" className="">
            <TabsList className="">
              <TabsTrigger value="frontend-project">
                Frontend Project
              </TabsTrigger>
              <TabsTrigger value="fullstack-project">
                Full-Stack Project
              </TabsTrigger>
            </TabsList>

            <TabsContent value="frontend-project" className="mt-8">
              <div className="grid gap-8 sm:grid-cols-2">
                {frontendProjectInfo.map((pInfo, pIndex) => (
                  <SwiperCardInfo info={pInfo} key={pIndex} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="fullstack-project" className="mt-8">
              <div className="grid grid-flow-row gap-8 sm:grid-cols-2">
                {backendProjectInfo.map((pInfo, pIndex) => (
                  <SwiperCardInfo info={pInfo} key={pIndex} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default page;
