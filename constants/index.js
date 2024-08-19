import {
  bannerImg,
  conTop,
  juice1,
  juice10_whiteBg,
  juice1_whiteBg,
  juice2,
  juice2_whiteBg,
  juice3,
  juice4,
  juice5,
  juice5_whiteBg,
  juice6,
  juice6_whiteBg,
  juice7_whiteBg,
  juice8_whiteBg,
  juice9_whiteBg,
  juiceCarousel1,
  our1,
  our3,
} from "@/public/images";

import { MdOutlineEnergySavingsLeaf } from "react-icons/md";
import { PiFirstAidDuotone } from "react-icons/pi";
import { GiLifeSupport } from "react-icons/gi";

export const navLinks = [
  {
    id: "",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "juices",
    title: "Juices",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const carouselImages = [
  {
    id: 1,
    img: juiceCarousel1,
  },
  {
    id: 2,
    img: conTop,
  },
  {
    id: 3,
    img: our3,
  },
  {
    id: 4,
    img: our1,
  },
];

export const juices = [
  {
    id: 1,
    title: "Classic Cane",
    description: "Pure sugarcane juice.",
    price: 150,
    img: juice1_whiteBg,
  },
  {
    id: 2,
    title: "Cane & Lime",
    description: "Sugarcane juice with a squeeze of lime",
    price: 50,
    img: juice2_whiteBg,
  },
  {
    id: 3,
    title: "Pineapple Punch",
    description: "Sugarcane juice with pineapple",
    price: 100,
    img: juice5_whiteBg,
  },
  {
    id: 4,
    title: "Lemon Zing",
    description: "Sugarcane juice with lemon.",
    price: 50,
    img: juice6_whiteBg,
  },
  {
    id: 5,
    title: "Dragon Delight",
    description: "Sugarcane juice with dragon fruit",
    price: 70,
    img: juice7_whiteBg,
  },
  {
    id: 6,
    title: "Passion Power",
    description: "Sugarcane juice with passion fruit",
    price: 80,
    img: juice8_whiteBg,
  },
  {
    id: 7,
    title: "Ginger Zing",
    description: "Sugarcane juice with a kick of ginger",
    price: 100,
    img: juice9_whiteBg,
  },
  {
    id: 8,
    title: "Mint Medley",
    description: "Sugarcane juice with fresh mint",
    price: 50,
    img: juice10_whiteBg,
  },
];

export const benefits = [
	{
	  id: 1,
	  title: "Instant Energy Boost",
	  description:
		"Sugar cane juice is an excellent source of instant energy. The natural sugars in the juice are easily absorbed by the body, providing a quick and effective energy boost. This makes it a popular choice for staying hydrated and energized, especially on hot days",
	  icon: <MdOutlineEnergySavingsLeaf />,
	},
	{
	  id: 2,
	  title: "Supports Liver Health",
	  description: "Rich in vitamins, minerals, and antioxidants, sugar cane juice helps support liver function. Its alkaline nature aids in maintaining the electrolyte balance in the body, which is essential for liver health. Regular consumption can help detoxify the liver and improve its overall function",
	  icon: <PiFirstAidDuotone />,
	},
	{
	  id: 3,
	  title: "Aids Digestion",
	  description: "Sugar cane juice is beneficial for the digestive system. It contains potassium, which helps balance the pH levels in the stomach, promoting better digestion. Additionally, it helps prevent stomach infections and keeps the digestive tract functioning smoothly",
	  icon: <GiLifeSupport />,
	},
  ];
