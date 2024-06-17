import React from "react";
import { AllImageType, AllImages } from "../../image";
import Image from "next/image";

const page = ({ params: { id } }: { params: { id: string } }) => {
  const photo: AllImageType | undefined = AllImages.find(
    (p) => p.id === Number(id)
  );
  return (
    <div>
      Intercept page {id}
      {photo && (
        <div>
          <Image src={photo.src} alt="" />
        </div>
      )}
    </div>
  );
};

export default page;
