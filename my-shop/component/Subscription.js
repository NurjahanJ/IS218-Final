import { Input, Button } from "@nextui-org/react";
import '../styles/subscription.css'

export default function Subscription() {
  return (
    <div className="subscription">
      <h2>Unlock 15% off only this month when signing up</h2>
      <Input placeholder="Email" />
      <Button>Subscribe</Button>
    </div>
  );
}