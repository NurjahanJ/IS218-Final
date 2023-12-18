import React from "react";
import Header from "@/component/Header";
import Footer from "@/component/Footer";
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import '../styles/candles.css'

export default function Candles() {
  const seasonalFavorites = [
    {
      title: "Mistletoe",
      img: "/images/candle1.jpg",
      price: "$18.50",
    },
    {
      title: "Christmas Hearth",
      img: "./images/candle2.jpg",
      price: "$22.00",
    },
    {
      title: "Fireside",
      img: "/images/candle3.jpg",
      price: "$12.50",
    },
    {
      title: "Gingerbread",
      img: "/images/candle4.jpg",
      price: "$15.50",
    },
    {
      title: "Pumpkin Spice",
      img: "/images/candle5.jpg",
      price: "$18.50",
    },
    {
      title: "Fallen Leaves",
      img: "/images/candle6.jpg",
      price: "$22.00",
    },
    {
      title: "Autumn Walk",
      img: "/images/candle7.jpg",
      price: "$12.50",
    },
    {
      title: "Pumpkin Chai",
      img: "/images/candle8.jpg",
      price: "$15.50",
    },
  ];

const classics = [
    {
        title: "Levender",
        img: "/images/candle9.jpg",
        price: "$12.50",
    },

    {
        title: "Vanilla",
        img: "/images/candle10.jpg",
        price: "$16.00",
    },

    {
        title: "Beach Trip",
        img: "/images/candle11.jpg",
        price: "$12.50",
    },

    {
        title: "Rain Water",
        img: "/images/candle12.jpg",
        price: "$15.50",
    },


];

  return (
    <>
      <Header />
      <div className="container">
        <h1 className="title"><strong>Seasonal Favorites</strong></h1>
        <div className="card-container">
          {seasonalFavorites.map((item, index) => (
            <Card className="candle-card" key={`seasonal-${index}`} shadow="sm" isPressable onPress={() => console.log(`${item.title} pressed`)}>
              <CardBody className="candle-card-body">
                <Image
                  src={item.img}
                  alt={item.title}
                  width="100%"
                  height="140px" // Adjust as necessary
                  objectFit="cover"
                />
              </CardBody>
              <CardFooter className="candle-card-footer">
                <b>{item.title}</b>
                <p>{item.price}</p>
              </CardFooter>
            </Card>
          ))}
        </div>

        <h1 className="title"><strong>Classics</strong></h1>
        <div className="card-container">
          {classics.map((item, index) => (
            <Card className="candle-card" key={`classic-${index}`} shadow="sm" isPressable onPress={() => console.log(`${item.title} pressed`)}>
              <CardBody className="candle-card-body">
                <Image
                  src={item.img}
                  alt={item.title}
                  width="100%"
                  height="140px" // Adjust as necessary
                  objectFit="cover"
                />
              </CardBody>
              <CardFooter className="candle-card-footer">
                <b>{item.title}</b>
                <p>{item.price}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}