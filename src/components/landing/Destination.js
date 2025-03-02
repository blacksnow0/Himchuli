// import React from "react";
// import Image from "next/image";
// import background from "../../../public/images/background.jpg";
// import background1 from "../../../public/images/background1.jpg";
// import background2 from "../../../public/images/background2.jpg";
// import gallery1 from "../../../public/images/gallery1.jpg";
// import gallery2 from "../../../public/images/gallery2.jpg";

// const destinations = [
//   { name: "Ladakh", image: background },
//   { name: "Goa", image: background1 },
//   { name: "Manali", image: background2 },
//   { name: "Rishikesh", image: gallery1 },
//   { name: "Jaisalmer", image: gallery2 },
//   { name: "Shimla", image: background1 },
//   { name: "Sikkim", image: background2 },
//   { name: "Gangtok", image: background },
//   { name: "Darjeeling", image: gallery1 },
//   { name: "Munnar", image: gallery2 },
//   { name: "Bhyundar", image: background1 },
//   { name: "Ooty", image: background2 },
// ];

// function Destination() {
//   return (
// <section
//   className="md:hidden relative px-4 py-6 overflow-x-auto"
//   style={{
//     background: `linear-gradient(
//         rgba(231, 240, 255, 0) 0%,
//         rgba(219, 232, 255, 0.8) 19.27%,
//         rgba(219, 232, 255, 0.8) 88.54%,
//         rgba(231, 240, 255, 0) 100%
//       )`,
//   }}
// >
//   <h1 className="text-lg font-bold text-center mb-4">Destinations</h1>

//   {/* Horizontal Scrolling Container */}
//   <div className="flex gap-4 overflow-x-auto pb-2 whitespace-nowrap scrollbar-hide">
//     {/* Grid Container for Two Rows */}
//     <div className="grid grid-rows-2 grid-flow-col gap-4">
//       {destinations.map((destination, index) => (
//         <div key={index} className="flex flex-col items-center">
//           <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-300">
//             <Image
//               src={destination.image}
//               alt={destination.name}
//               width={96}
//               height={96}
//               className="object-cover w-full h-full"
//             />
//           </div>
//           <p className="text-sm font-semibold mt-2">{destination.name}</p>
//         </div>
//       ))}
//     </div>
//   </div>
// </section>
//   );
// }

// export default Destination;
import React from "react";
import Image from "next/image";
import Link from "next/link";
import destinations from "@/app/data/destination"; // Import stored data

function Destination() {
  return (
    <section
      className="md:hidden relative px-4 py-6 overflow-x-auto"
      style={{
        background: `linear-gradient(
          rgba(231, 240, 255, 0) 0%,
          rgba(219, 232, 255, 0.8) 19.27%,
          rgba(219, 232, 255, 0.8) 88.54%,
          rgba(231, 240, 255, 0) 100%
        )`,
      }}
    >
      <h1 className="text-lg font-bold text-center mb-4">Destinations</h1>

      {/* Horizontal Scrolling Container */}
      <div className="flex gap-4 overflow-x-auto pb-2 whitespace-nowrap scrollbar-hide">
        {/* Grid Container for Two Rows */}
        <div className="grid grid-rows-2 grid-flow-col gap-4">
          {destinations.map((destination, index) => (
            <Link
              key={index}
              href={`/destinations/${destination.name
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
            >
              <div className="flex flex-col items-center cursor-pointer">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-300">
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                  />
                </div>
                <p className="text-sm font-semibold mt-2 text-center">
                  {destination.name}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Destination;
