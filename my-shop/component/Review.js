import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react";

export default function App() {
    return (
        <div className="flex gap-4">
            <Card className="max-w-[400px]">
                <CardHeader className="flex gap-3">
                    <Image src="/images/review1.jpg"
                        alt="User Logo"
                        height={40}
                        radius="sm"
                        width={40}
                    />
                    <div className="flex flex-col">
                        <p className="text-md">Urvi I.</p>
                    </div>
                </CardHeader>
                <Divider />
                <CardBody>
                    <p>★★★★★</p>
                    <p>Absolutely Delightful!</p>
                    <p>I recently purchased the Lavender Breeze from Wander Glow, and I am beyond thrilled with my purchase! From the moment I lit the wick, my space was transformed into a haven of tranquility and joy.</p>
                    <p>Overall, I can't recommend this candle enough! It has quickly become an essential part of my relaxation routine.</p>
                </CardBody>
            </Card>
            <Card className="max-w-[400px]">
                <CardHeader className="flex gap-3">
                    <Image src="/images/review2.jpg"
                        alt="User Logo"
                        height={40}
                        radius="sm"
                        width={40}
                    />
                    <div className="flex flex-col">
                        <p className="text-md">Ashley R.</p>
                    </div>
                </CardHeader>
                <Divider />
                <CardBody>
                    <p>★★★★★</p>
                    <p>Captivating Scent, Exceptional Quality</p>
                    <p>I recently discovered the Autumn Hayride from and it has instantly become a favorite in my home!</p>
                    <p>Not only is the scent divine, but the quality of the candle itself is exceptional. The wax burns evenly, and the wick ensures a steady, beautiful flame without any flickering or soot. The packaging was thoughtful and secure, ensuring that the candle arrived in perfect condition.</p>
                </CardBody>
            </Card>
            <Card className="max-w-[400px]">
                <CardHeader className="flex gap-3">
                    <Image src="review3.jpg"
                        alt="User Logo"
                        height={40}
                        radius="sm"
                        width={40}
                    />
                    <div className="flex flex-col">
                        <p className="text-md">Anonymous</p>
                    </div>
                </CardHeader>
                <Divider />
                <CardBody>
                    <p>★★★★★</p>
                    <p>Exquisite Fragrance, Instant Serenity</p>
                    <p>I recently indulged in the Peppermint Bark from and I am utterly thrilled with this discovery!</p>
                    <p>The scent of this candle is simply divine—the harmonious blend of peppermint creates an atmosphere that feels like a luxurious escape. I wholeheartedly recommend this candle to anyone seeking a high-quality candle.</p>
                </CardBody>
            </Card>
        </div>
    );
}