'use client'
import Head from 'next/head';
import FAQs from "@/component/faq"
export default function Page() {
  return (
    <div>
      <Head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-8F7WJ3R8GN"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-8F7WJ3R8GN');
            `,
          }}
        />
        {/* End Google Analytics */}
      </Head>
      <FAQs />
    </div>
  )
}