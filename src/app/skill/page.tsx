import { Card, CardHeader } from "@/components/ui/card";
import { BackendSkill, CloudData, SkillData } from "../../../utils/skillData";
import { Metadata } from "next";
import { skillPageSeo } from "../../../utils/pageSeoInfo";

// page title and generateMetadata
export const generateMetadata = (): Metadata => {
  return skillPageSeo;
};

const page = () => {
  return (
    <>
      <div className="grid gap-8 pb-14 mt-20">
        {/* // frontend skill start  */}
        <div className="text-neutral-900 dark:bg-clip-text text-5xl font-bold dark:text-transparent dark:bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400 sm:text-6xl">
          Fronted Skill
        </div>
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
          {SkillData.map((item, index) => {
            return (
              <Card key={index}>
                <CardHeader className="grid place-items-center gap-3">
                  <item.icon size={item.iconSize} />
                  <div className="text-neutral-900 dark:bg-clip-text text-lg font-bold dark:text-transparent dark:bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400 sm:text-2xl">
                    {item.name}
                  </div>
                </CardHeader>
              </Card>
            );
          })}
        </div>

        {/* // backend skill start */}
        <div className="text-neutral-900 dark:bg-clip-text text-5xl font-bold dark:text-transparent dark:bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400 sm:text-6xl">
          Backend Skill
        </div>
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
          {BackendSkill.map((item, index) => {
            return (
              <Card key={index}>
                <CardHeader className="grid place-items-center gap-3">
                  <item.icon size={item.iconSize} />
                  <div className="text-neutral-900 dark:bg-clip-text text-lg font-bold dark:text-transparent dark:bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400 sm:text-2xl">
                    {item.name}
                  </div>
                </CardHeader>
              </Card>
            );
          })}
        </div>
        {/* // cloud computing skill start  */}
        <div className="text-neutral-900 dark:bg-clip-text text-5xl font-bold dark:text-transparent dark:bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400 sm:text-6xl">
          Cloud Computing Skill
        </div>
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
          {CloudData.map((item, index) => {
            return (
              <Card key={index}>
                <CardHeader className="grid place-items-center gap-3">
                  <item.icon size={item.iconSize} />
                  <div className="text-neutral-900 dark:bg-clip-text text-lg font-bold dark:text-transparent dark:bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400 sm:text-2xl">
                    {item.name}
                  </div>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default page;
