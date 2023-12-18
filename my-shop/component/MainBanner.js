import { Button } from "@nextui-org/react";
import '../styles/mainbanner.css'; 

export default function MainBanner() {
  
  const navigateToCandles = () => {
    // If you're using React Router, you might use history.push('/candles')
    window.location.href = './candles';
  }

  return (
    <div className="main-banner">
      <img src='/images/homepage-image.jpg'
        alt="homepage-image"
        width={500}
        height={500}
      />
      <div>
        <h1>Embrace Ambiance with Wander Glow</h1>
        <Button className="browse-button" onClick={navigateToCandles}> Browse Candles </Button>
      </div>
    </div>
  );
}