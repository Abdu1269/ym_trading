"use client";

import { CollectionQuery } from "@/model/collection.model";
import fetcher from "@/shared/utils/fetcher";
import Image from "next/image";
import React from "react";
import useSWR from "swr";
import ErrorPage from "@/components/ErrorPage";
import LoadingPage from "@/components/LoadingPage";
import { blogs } from "@/model/blogs.model"; // Assuming this is correct; should be 'blog' if single blog item

const Blogs = () => {
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
    data: blogs,
    isLoading,
    error,
  } = useSWR(
    {
      url: "https://saas_web.yenechinet.com/api/portal-publications/get-blogs",
      params: collection,
    },
    fetcher
  );

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error) {
    return <ErrorPage />;
  }

  return (
    <div>
      <div className="min-h-fit bg-white mt-10 justify-center" title="Blogs">
        <div className="w-fit text-neutral-950 justify-center text-center ml-40 text-8xl mb-4 font-serif grid grid-cols-1">
          Blogs
        </div>
        <div>
          {blogs?.data?.map((blog: blogs) => (
            <div key={blog.id} className="card-body">
              <div className="carousel rounded-box mb-11 ml-28">
                <div className="carousel-item glass grid grid-cols-1 gap-x-6 gap-y-6">
                  <div className="card lg:card-side bg-base-100 shadow-xl">
                    {/* <figure>
                      <Image
                        src={blog.coverPage || "/default-trade.jpg"} // Use a fallback image if needed
                        alt="Blog cover"
                        width={400}
                        height={200}
                      />
                    </figure> */}
                    <div className="card-body">
                      <h2 className="card-title">{blog.title}</h2>
                      <p>Click the button to read more about this blog.</p>
                      <div className="card-actions justify-end">
                        <button className="btn btn-primary">Read more</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;

// {/* <div className='card-title'>
//   {/* <h1 className='card-title text-neutral-950 ml-8'>{blog.title.en}</h1> */}

// {/* </div>  */}

//                 {/* <img
//             src={blog.coverPage}
//               alt=''
//               width={400}
//               height={200}
//             />

//             <button className=" px-4 py-3 text-center text-lg w-fit font-serif font-thin inline-block text-purple  cursor-p">
//   Read more
// </button> */}

// {/* <p className='text-neutral-950'>{blog.content.en}</p> */}
// {/* </div>
//    </div>
//     </div> */}
