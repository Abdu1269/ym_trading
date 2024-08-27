// "use client";
// import fetcher from "@/shared/utils/fetcher";
// import React from "react";
// import useSWR from "swr";

// const Gallery = () => {
//   const {
//     data: galleries,
//     isLoading,
//     error,
//   } = useSWR("/portal-product-and-services/get-galleries", fetcher);

//   if (isLoading) {
//     return (
//       <div className="min h-screen">
//         <span className="loading loading-ball loading-sm"></span>
//         <span className="loading loading-ball loading-md"></span>
//         <span className="loading loading-ball loading-lg"></span>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="bg-white min-h-screen">
//         <div role="alert" className="alert alert-error">
//           <span>Error! .</span>
//         </div>
//       </div>
//     );
//   }
//   return (
//     <div className="bg-white min-h-screen " title="Gallery ">
//       <div className="carousel rounded-box">
//         <div className="carousel-item">
//           {galleries?.data.map((item: any) => (
//             <div key={galleries.id} className="group">
//               <img alt={galleries.imageAlt} src={galleries.coverPage} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Gallery;
