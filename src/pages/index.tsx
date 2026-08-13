import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import HomepageHero from '@site/src/components/HomepageHero';

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout
      title={`${siteConfig.title} - VRChat向け葉巻ギミック`}
      description="Mikinel Cigar Systemは、カット、着火、吸引、燃焼、灰の分離まで楽しめるVRChatワールド向け葉巻ギミックです。">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap"
          rel="stylesheet"
        />
        <meta
          property="og:image"
          content={`${siteConfig.url}${siteConfig.baseUrl}img/cigar-x-thumbnail.jpg`}
        />
        <meta property="og:image:width" content="2048" />
        <meta property="og:image:height" content="1152" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content={`${siteConfig.url}${siteConfig.baseUrl}img/cigar-x-thumbnail.jpg`}
        />
        <meta name="twitter:title" content={`${siteConfig.title} - VRChat向け葉巻ギミック`} />
      </Head>
      <HomepageHero />
    </Layout>
  );
}
