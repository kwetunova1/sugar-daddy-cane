import {
  aboutImage,
  bannerImg,
  conTop,
  firstPerson,
  fourthPerson,
  juice10_whiteBg,
  juice1_whiteBg,
  juice2_whiteBg,
  juice5_whiteBg,
  juice6_whiteBg,
  juice7_whiteBg,
  juice8,
  juice8_whiteBg,
  juice9_whiteBg,
  juiceCarousel1,
  our1,
  our3,
  secondPerson,
  thirdPerson,
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
    img: aboutImage,
  },
  {
    id: 3,
    img: juice8,
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
    title: "Mint Medley",
    description: "Sugarcane juice with fresh mint",
    price: 50,
    img: juice10_whiteBg,
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
    title: "Cane & Lime",
    description: "Sugarcane juice with a squeeze of lime",
    price: 50,
    img: juice2_whiteBg,
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

  export const testimonials = [
    {
      id: "1",
      content: "Absolutely refreshing! The best sugarcane juice I’ve ever tasted. Perfect for a hot day.",
      img: firstPerson,
      name: 'Sally Mwangi',
      role: 'University Student'
    },
    {
      id: "2",
      content: "Incredible flavor and so natural. This sugarcane juice is my go-to drink. Can’t get enough of it!",
      img: secondPerson,
      name: 'John Doe',
      role: 'Fitness Enthusiast'
    },
    {
      id: "3",
      content: "Unbelievably tasty! This sugarcane juice is a game-changer. Refreshing, natural, and simply delightful.",
      img: thirdPerson,
      name: 'John Otieno',
      role: 'Entrepreneur'
    },
    {
      id: "4",
      content: "Delicious and revitalizing! The sugarcane juice is pure bliss. A must-try for everyone. Love it",
      img: fourthPerson,
      name: 'Lukas Kingi',
      role: 'Artist'
    },
  
  ];
