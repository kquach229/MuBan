import React from "react";
import { Card, CardContent } from "./ui/card";
import { FaUserTie } from "react-icons/fa6";
import { MdBiotech } from "react-icons/md";
import { FaBlog } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import { MdRealEstateAgent } from "react-icons/md";
import { GiShop } from "react-icons/gi";
import Link from "next/link";

interface IProps {
  title: string;
  items: IItems[];
}

interface IItems {
  id: number;
  category: string;
}

const mapIconToTitle = (title: string, iconSize: string | number) => {
  const upperCasedTitle = title.toUpperCase();
  switch (upperCasedTitle) {
    case "PORTFOLIO & AGENCY":
      return <FaUserTie fontSize={iconSize} />;
    case "TECHNOLOGY":
      return <MdBiotech fontSize={iconSize} />;
    case "BLOG & TUTORIAL":
      return <FaBlog fontSize={iconSize} />;
    case "PROFESSIONAL SERVICES":
      return <MdSupportAgent fontSize={iconSize} />;
    case "REAL ESTATE":
      return <MdRealEstateAgent fontSize={iconSize} />;
    case "RETAIL":
      return <GiShop fontSize={iconSize} />;
  }
};

const CategoriesGrid = ({ title, items }: IProps) => {
  return (
    <div>
      <div className="mb-5 text-xl font-bold underline">{title}</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {items.map((item: IItems) => {
          return (
            <Link
              key={item.category}
              href={`/templates/${item.category.toLowerCase()}`}
            >
              <Card className="h-52 p-5 place-content-center hover:cursor-pointer">
                <CardContent className="flex flex-col justify-around h-full ml-5 hover:opacity-[0.8]">
                  {item.category}
                  {mapIconToTitle(item.category, 50)}
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CategoriesGrid;
