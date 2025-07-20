// "use client";

// import Image, { StaticImageData } from "next/image";
// import shraddha from "../assets/sraddha.jpg";
// import nexus from "../assets/NEXUS.png";
// import niti from "../assets/NITI.jpg";

// type Product = {
//   name: string;
//   description: string;
//   image: StaticImageData;
//   link?: string;
// };

// const Products = () => {
//   const products: Product[] = [
//     {
//       name: "Nexus",
//       description: "Nexus is a smart system that helps clinics and hospitals run smoothly.",
//       image: nexus,
//     },
//     {
//       name: "Niti",
//       description:
//         "Niti is an app to book psychologists and connect with a supportive mental health community.",
//       link: "https://niti.lovable.app/",
//       image: niti,
//     },
//     {
//       name: "Sraddha",
//       description:
//         "Sraddha is a care platform that supports the daily needs and well-being of elderly people.",
//       link: "https://shraddha.lovable.app/",
//       image: shraddha,
//     },
//   ];

//   return (
//     <section
//       id="products"
//       className="min-h-screen flex flex-col justify-center items-center text-white px-4 pt-20"
//     >
//       <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
//         Our Products
//       </h2>

//       <p className="text-center max-w-3xl text-gray-300 mb-8">
//         Indrav has three easy-to-use products that help make healthcare simpler, faster, and more connected. <br />
//         Each one is built to solve real problems for doctors, clinics, and patients across India.
//       </p>

//       <div className="flex flex-row justify-start items-start gap-8 max-w-full overflow-x-auto pb-4 custom-scrollbar">
//         {products.map((product, index) => {
//           const card = (
//             <div className="w-[300px] rounded-xl overflow-hidden hover:shadow-xl hover:scale-105 transition duration-300 cursor-pointer">
//               <Image
//                 src={product.image}
//                 alt={product.name}
//                 width={300}
//                 height={240}
//                 className="w-full h-60 object-cover"
//               />
//             </div>
//           );

//           return product.link ? (
//             <a
//               key={index}
//               href={product.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="w-[300px] flex-shrink-0"
//               style={{ textDecoration: "none" }}
//             >
//               {card}
//               <h3 className="text-2xl font-bold text-center mt-3">
//                 {product.name.toUpperCase()}
//               </h3>
//               <p className="text-gray-300 text-center mt-1">
//                 {product.description}
//               </p>
//             </a>
//           ) : (
//             <div key={index} className="w-[300px] flex-shrink-0">
//               {card}
//               <h3 className="text-2xl font-bold text-center mt-3">
//                 {product.name.toUpperCase()}
//               </h3>
//               <p className="text-gray-300 text-center mt-1">
//                 {product.description}
//               </p>
//             </div>
//           );
//         })}
//       </div>

//       <button className="px-6 py-3 border border-yellow-500 text-yellow-500 font-medium rounded-md hover:bg-yellow-500 hover:text-black transition duration-300 mt-10">
//         Know more
//       </button>
//     </section>
//   );
// };

// export default Products;

"use client";

import Image from "next/image";

type Product = {
  name: string;
  description: string;
  image: string;
  link?: string;
};

const products: Product[] = [
  {
    name: "Nexus",
    description: "Nexus is a smart system that helps clinics and hospitals run smoothly.",
    image: "/images/NEXUS.png",
  },
  {
    name: "Niti",
    description:
      "Niti is an app to book psychologists and connect with a supportive mental health community.",
    link: "https://niti.lovable.app/",
    image: "/images/NITI.jpg",
  },
  {
    name: "Sraddha",
    description:
      "Sraddha is a care platform that supports the daily needs and well-being of elderly people.",
    link: "https://shraddha.lovable.app/",
    image: "/images/sraddha.jpg",
  },
];

const Products = () => {
  return (
    <section
      id="products"
      className="min-h-screen flex flex-col justify-center items-center text-white px-4 pt-20 bg-cover bg-center"
      style={{ backgroundImage: `url('/images/bgImage.png')` }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 relative z-10">
        Our Products
      </h2>

      <p className="text-center max-w-5xl text-gray-300 mb-8 relative z-10">
        Indrav has three easy-to-use products that help make healthcare simpler, faster, and more connected. 
        <br/>Each one is built to solve real problems for doctors, clinics, and patients across India.
      </p>

      <div className="flex flex-row justify-start items-start gap-8 max-w-full overflow-x-auto pb-4 custom-scrollbar relative z-10">
        {products.map((product, index) => {
          const card = (
            <div className="w-[300px] rounded-xl overflow-hidden hover:shadow-xl hover:scale-105 transition duration-300 cursor-pointer flex-shrink-0">
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={240}
                className="w-full h-60 object-cover"
              />
            </div>
          );

          return product.link ? (
            <a
              key={index}
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[300px] flex-shrink-0"
              style={{ textDecoration: "none" }}
            >
              {card}
              <h3 className="text-2xl font-bold text-center mt-3">{product.name.toUpperCase()}</h3>
              <p className="text-gray-300 text-center mt-1">{product.description}</p>
            </a>
          ) : (
            <div key={index} className="w-[300px] flex-shrink-0">
              {card}
              <h3 className="text-2xl font-bold text-center mt-3">{product.name.toUpperCase()}</h3>
              <p className="text-gray-300 text-center mt-1">{product.description}</p>
            </div>
          );
        })}
      </div>

      <button className="px-6 py-3 border border-yellow-500 text-yellow-500 font-medium rounded-md hover:bg-yellow-500 hover:text-black transition duration-300 mt-10 relative z-10">
        Know more
      </button>
    </section>
  );
};

export default Products;
