import React from "react";
import { Card, CardHeader, CardBody, Divider, Image } from "@nextui-org/react";
import '../styles/review.css'

export default function ReviewSection() {
    // Example data for the reviews
    const reviews = [
      {
        id: 1,
        name: "Urvi I.",
        title: "Absolutely Delightful!",
        content: "I recently purchased the Lavender Breeze from Wander Glow, and I am beyond thrilled with my purchase! From the moment I lit the wick, my space was transformed into a haven of tranquility and joy. Overall, I can't recommend this candle enough! It has quickly become an essential part of my relaxation routine.",
        rating: "★★★★★",
        imageSrc: "/images/review1.jpg"
      },
      {
        id: 2,
        name: "Ashley R.",
        title: "Captivating Scent, Exceptional Quality",
        content: "I recently discovered the Autumn Hayride from and it has instantly become a favorite in my home! Not only is the scent divine, but the quality of the candle itself is exceptional. The wax burns evenly, and the wick ensures a steady, beautiful flame without any flickering or soot. The packaging was thoughtful and secure, ensuring that the candle arrived in perfect condition.",
        rating: "★★★★★",
        imageSrc:"/images/review2.jpg"
      },
      {
        id: 3,
        name: "Anonymous",
        title: "Exquisite Fragrance, Instant Serenity",
        content: "I recently indulged in the Peppermint Bark from and I am utterly thrilled with this discovery! The scent of this candle is simply divine—the harmonious blend of peppermint creates an atmosphere that feels like a luxurious escape. I wholeheartedly recommend this candle to anyone seeking a high-quality candle.",
        rating: "★★★★★",
        imageSrc: "/images/review3.jpg"
      }
    ];
  
    return (
      <div className="review-container">
        <h2 className="reviews-header">Customer Reviews</h2>
        <div className="review-flex-container">
          {reviews.map((review) => (
            <Card className="review-card" key={review.id}>
              <CardHeader className="card-header">
                <Image
                  src={review.imageSrc}
                  alt="User Logo"
                  height={40}
                  width={40}
                />
                <div className="card-col">
                  <p className="text-md">{review.name}</p>
                </div>
              </CardHeader>
              <Divider />
              <CardBody>
                <p className="rating">{review.rating}</p>
                <p className="title">{review.title}</p>
                <p className="content">{review.content}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    );
  }