import { Card, CardHeader } from "@/components/ui/card";
import { BackendSkill, CloudData, SkillData } from "../../../utils/skillData";

const page = () => {
  return (
    <>
      <div className="grid gap-8 pb-16 pt-8">
        {/* // frontend skill start  */}
        <div className="bg-gradient-to-b from-neutral-500 to-neutral-200 bg-clip-text text-5xl font-bold text-transparent dark:bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400 sm:text-6xl">
          Fronted Skills
        </div>
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
          {SkillData.map((item, index) => {
            return (
              <Card key={index}>
                <CardHeader className="grid place-items-center gap-3">
                  <item.icon size={item.iconSize} />
                  <div className="bg-gradient-to-b from-neutral-500 to-neutral-200 bg-clip-text text-lg font-bold text-transparent dark:bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400 sm:text-2xl">
                    {item.name}
                  </div>
                </CardHeader>
              </Card>
            );
          })}
        </div>

        {/* // backend skill start */}
        <div className="bg-gradient-to-b from-neutral-500 to-neutral-200 bg-clip-text text-5xl font-bold text-transparent dark:bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400 sm:text-6xl">
          Backend Skills
        </div>
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
          {BackendSkill.map((item, index) => {
            return (
              <Card key={index}>
                <CardHeader className="grid place-items-center gap-3">
                  <item.icon size={item.iconSize} />
                  <div className="bg-gradient-to-b from-neutral-500 to-neutral-200 bg-clip-text text-lg font-bold text-transparent dark:bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400 sm:text-2xl">
                    {item.name}
                  </div>
                </CardHeader>
              </Card>
            );
          })}
        </div>
        {/* // cloud computing skill start  */}
        <div className="bg-gradient-to-b from-neutral-500 to-neutral-200 bg-clip-text text-5xl font-bold text-transparent dark:bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400 sm:text-6xl">
          Cloud Computing Skills
        </div>
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
          {CloudData.map((item, index) => {
            return (
              <Card key={index}>
                <CardHeader className="grid place-items-center gap-3">
                  <item.icon size={item.iconSize} />
                  <div className="bg-gradient-to-b from-neutral-500 to-neutral-200 bg-clip-text text-lg font-bold text-transparent dark:bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400 sm:text-2xl">
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
