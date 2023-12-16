import { Input, Button } from "@nextui-org/react";

export default function SubscriptionForm() {
  return (
    <div className="subscription-form">
      <h2>Unlock 15% off only this month when signing up</h2>
      <Input placeholder="Email" />
      <Button>Subscribe</Button>
    </div>
  );
}