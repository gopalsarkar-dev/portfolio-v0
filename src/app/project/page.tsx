import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { projectData } from "../../../utils/projectInfo";
import { Button } from "@/components/ui/button";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { Metadata } from "next";
import { projectPageSeo } from "../../../utils/pageSeoInfo";

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
        <div className="grid grid-flow-row gap-8 sm:grid-cols-2">
          {projectData.map((info, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>
                  <div className="text-3xl font-bold text-neutral-900 dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400">
                    {info.title}
                  </div>
                </CardTitle>
                <CardDescription>
                  <p className="text-lg">
                    <span className="font-bold">Description: </span>
                    {info.desription}
                  </p>
                </CardDescription>
              </CardHeader>

              <CardContent>
                <Button size={"lg"}>
                  Github <FaArrowUpRightFromSquare />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default page;
