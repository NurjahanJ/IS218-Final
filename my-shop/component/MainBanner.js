import { Button } from "@nextui-org/react";

export default function MainBanner() {
    return (
      <div >
        <div>
          <img src='/images/homepage-image.jpg'
            alt="homepage-image"
            width={523}
            height={523}
          />
        </div>
        <div>
          <h1>Embrace Ambiance with Wander Glow</h1>
          <Button> Browse Candles </Button>
        </div>
      </div>
    );
  }