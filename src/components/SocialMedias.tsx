"use client";
import { CollectionQuery } from "@/model/collection.model";
import { socialMedia } from "@/model/socialMedias.model";
import { ConvertToExternal } from "@/shared/utils/externalLink/convertToExternal";
import fetcher from "@/shared/utils/fetcher";
import Link from "next/link";
// import {
//   FaFacebookMessenger,
//   FaInstagram,
//   FaLinkedinIn,
//   FaYoutubeSquare,
// } from "react-icons/fa";
// import { FaX } from "react-icons/fa6";
import useSWR from "swr";

const SocialMedias = () => {
  const collection: CollectionQuery = {
    locale: "en",
    orderBy: [
      {
        direction: "desc",
        field: "createdAt",
      },
    ],
  };
  const {
    data: socialMedia,
    isLoading,
    error,
  } = useSWR(
    {
      url: `https://saas_web.yenechinet.com/api/portal-interactions/get-social-medias`,
      params: collection,
    },
    fetcher
  );

  if (isLoading) {
    return;
    <div> </div>;
  }

  if (error) {
    return;
    <div> </div>;
  }

  console.log(socialMedia?.data[0]);
  return (
    <div className="mt-10 content-center flex justify-center items-center  gap-10 ">
      {socialMedia?.data?.map((socialMedia: socialMedia) => (
        <div key={socialMedia.id} className="group">
          {/* <Link href={ConvertToExternal(socialMedia.link)} target="_blank">
            {socialMedia.name.en === "Facebook" && <FaFacebookMessenger />}
            {socialMedia.name.en === "Twitter" && <FaX />}
            {socialMedia.name.en === "LinkedIn" && <FaLinkedinIn />}
            {socialMedia.name.en === "Youtube" && <FaYoutubeSquare />}
            {socialMedia.name.en === "Instagram" && <FaInstagram />}
          </Link> */}
        </div>
      ))}
    </div>
  );
};

export default SocialMedias;
