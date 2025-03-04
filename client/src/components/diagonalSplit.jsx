import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const DiagonalSplit = ({twicemember}) => {
  const [hovered, setHovered] = useState(null);
  const navigate = useNavigate(); 

  const groups = [
    {
      id: "twice",
      name: "TWICE",
      description: "K-pop 걸그룹, JYP 소속. 대표곡: Feel Special, TT",
      img: "https://image-1.uhdpaper.com/wallpaper/twice-i-got-you-members-4k-wallpaper-uhdpaper.com-816@1@n.jpg",
      link: "/twice",
    },
    {
      id: "newjeans",
      name: "NewJeans",
      description: "ADOR 소속 4세대 걸그룹. 대표곡: Ditto, OMG",
      img: "https://image-0.uhdpaper.com/wallpaper/newjeans-omg-hyein-hanni-minji-danielle-4k-wallpaper-uhdpaper.com-229@0@i.jpg",
      link: "/newjeans",
    },
  ];

  return (
    <div className="relative w-full h-[500px] flex overflow-hidden">
      {groups.map((group, index) => (
        <div
          key={group.id}
          className={`relative w-1/2 h-full transition-all duration-500 ${
            hovered === group.id ? "w-[80%]" : hovered ? "w-[20%]" : "w-1/2"
          }`}
          onMouseEnter={() => setHovered(group.id)}
          onMouseLeave={() => setHovered(null)}
          style={{
            backgroundImage: `url(${group.img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            clipPath:
              index === 0
                ? "polygon(0 0, 100% 0, 70% 100%, 0 100%)"
                : "polygon(30% 0, 100% 0, 100% 100%, 0% 100%)",
          }}
        >
          {/* 호버 시 나타나는 텍스트 */}
          {hovered === group.id && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 text-white p-6">
              <h1 className="text-3xl font-bold">{group.name}</h1>
              <p className="mt-2">{group.description}</p>
              <button
                className="mt-4 px-4 py-2 bg-white text-black font-bold rounded-lg"
                onClick={() => navigate(group.link)}
              >
                그룹 소개 보기
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DiagonalSplit;
