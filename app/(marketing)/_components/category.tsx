import React from "react";

const category = [
  {
    name: "Film",
    role: "Front-end Developer",
    imageUrl: "/film.png",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  // More people...
  {
    name: "TV",
    role: "Front-end Developer",
    imageUrl: "/tv.png",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Non-Fiction",
    role: "Front-end Developer",
    imageUrl: "/books.png",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Theatre",
    role: "Front-end Developer",
    imageUrl: "/theatre.png",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Games",
    role: "Front-end Developer",
    imageUrl: "/game.png",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Comics",
    role: "Front-end Developer",
    imageUrl: "/comic.png",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "News",
    role: "Front-end Developer",
    imageUrl: "/news.png",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Brands",
    role: "Front-end Developer",
    imageUrl: "/brands.jpg",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Fiction",
    role: "Front-end Developer",
    imageUrl: "/fiction.png",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
];

export default function Category() {
  return (
    <div className="">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl ">
          <h2 className="text-3xl text-center font-bold tracking-tight text-gray-900 sm:text-6xl">
            Your Writing Adventure Awaits!{" "}
          </h2>
          <p className="mt-6 text-lg text-center leading-8 text-gray-600">
            Too many writing interests? That’s okay. No matter what it is, if
            you’re passionate about learning by doing then you’re in the right
            place.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {category.map((categoryItem) => (
            <li key={categoryItem.name} className="relative">
              <a
                href="https://airtable.com/appeWU9kmSTbqykN3/shrZTjklETFQDWlKw"
                className="block w-full h-full"
              >
                <img
                  className="aspect-[3/2] w-full rounded-2xl object-cover cursor-pointer hover:scale-105 transition-transform"
                  src={categoryItem.imageUrl}
                  alt={categoryItem.name}
                />
              </a>

              <a
                href="https://airtable.com/appeWU9kmSTbqykN3/shrZTjklETFQDWlKw"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hover:scale-105 cursor-pointer"
                style={{
                  width: "174px",
                  height: "54px",
                  backgroundColor: "rgba(100, 82, 214, 0.73)",
                  borderRadius: "0.5rem",
                  position: "absolute",
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div className="w-6 h-6 px-2.40px py-3.60px absolute left-[237px] top-[15px] opacity-0 justify-center items-center inline-flex cursor-pointer" />
                <div className="text-white text-21px font-bold font-['Work Sans'] cursor-pointer hover:scale-105">
                  {categoryItem.name}
                </div>
              </a>
              {/* <p className="text-base leading-7 text-gray-600 mt-4">
                {categoryItem.role}
              </p> */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
