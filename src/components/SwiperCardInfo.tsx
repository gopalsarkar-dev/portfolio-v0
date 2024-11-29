"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import "swiper/css/effect-cards";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/navigation";

import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";

type ProjectInfoType = {
  title: string;
  imag: string[];
  desription: string;
};

const SwiperCardInfo = ({ info }: { info: ProjectInfoType }) => {
  return (
    <>
      <Card className="max-w-sm cursor-pointer sm:max-w-screen-lg">
        <CardHeader>
          <CardTitle>
            <Swiper
              className=""
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
            >
              {info.imag.map((imgSrc, imgIndex) => (
                <SwiperSlide key={imgIndex}>
                  <Image
                    src={imgSrc}
                    alt="imag"
                    width={500}
                    height={500}
                    className="aspect-square h-60 w-full rounded-lg"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 pb-4">
          <div className="text-2xl font-bold">{info.title}</div>
          <p className="text-justify text-lg">
            <span className="font-bold">Description:</span> {info.desription}
          </p>
        </CardContent>
        <CardFooter>
          <Button size={"lg"}>
            Github <FaArrowUpRightFromSquare />
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default SwiperCardInfo;
