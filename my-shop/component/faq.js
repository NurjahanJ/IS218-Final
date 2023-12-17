import React from "react";
import Header from "@/component/Header";
import Footer from "@/component/Footer";
import '../styles/faq.css'

export default function FAQs() {
    return (
      <div>
        <Header />
        <main>
          <h1>FAQs</h1>
          <p className="question">1. What are the different candle sizes available?</p>
          <p className="answer">'Yes, our candles are crafted using high-quality, natural ingredients such as soy wax, essential oils, and cotton wicks. We prioritize natural materials to ensure a clean and eco-friendly burning experience.'</p>
          
          <p className="question">2. Are your candles made with natural ingredients?</p>
          <p className="answer">'Yes, our candles are crafted using high-quality, natural ingredients such as soy wax, essential oils, and cotton wicks. We prioritize natural materials to ensure a clean and eco-friendly burning experience.'</p>

          <p className="question">3. How long can I expect your candles to burn?</p>
          <p className="answer">'The burn time varies depending on the size of the candle. Generally, our small candles burn for approximately 25-30 hours, medium candles for 40-50 hours, and large candles for 60-70 hours, when burned properly according to instructions.'</p>

          <p className="question">4. Do you offer different scents or fragrances?</p>
          <p className="answer">'Yes, we have a diverse range of scents available, from floral and fruity to woody and seasonal aromas. Explore our collection to find the perfect fragrance that suits your preferences.'</p>

          <p className="question">5. Are your candles safe for individuals with allergies or sensitivities?'</p>
          <p className="answer">'Our candles are made with natural ingredients and do not contain harsh chemicals or additives. However, we advise individuals with specific allergies or sensitivities to review the ingredients list before purchase or test the candle in a small area to ensure compatibility.'</p>

          <p className="question">6. How should I care for and maintain my candle?</p>
          <p className="answer">'To ensure the best performance, always trim the wick to 1/4 inch before lighting and allow the candle to burn until the wax pool reaches the edges. Keep away from drafts and never leave a burning candle unattended.'</p>

          <p className="question">7. Do you offer international shipping?</p>
          <p className="answer">'Currently, we primarily ship within US, Canada, and Mexico. However, we are continuously working to expand our shipping options to reach more customers globally.'</p>

          <p className="question">8. What is your return policy?</p>
          <p className="answer"> "We want you to be completely satisfied with your purchase. If for any reason you're not happy with your candle, please reach out to our customer service team within 30 of receiving your order for assistance with returns or exchanges."</p>

          <p className="question">9. Are your candles suitable as gifts?</p>
          <p className="answer">'Absolutely! Our beautifully packaged candles make perfect gifts for any occasion. Consider adding a personalized message or selecting from our gift wrapping options to make your gift extra special.'</p>

          <p className="question">10. Do you offer subscription or monthly delivery services?</p>
          <p className="answer">'Yes, we have subscription options available for those who want to receive their favorite candles regularly. Explore our subscription plans for hassle-free candle deliveries right to your doorstep.'</p>
        </main>
        <Footer />
      </div>
    );
  }
