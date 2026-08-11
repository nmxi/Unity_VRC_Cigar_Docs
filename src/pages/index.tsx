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
        <meta
          property="og:image"
          content={`${siteConfig.url}${siteConfig.baseUrl}img/cigar-x-card.png`}
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="600" />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content={`${siteConfig.url}${siteConfig.baseUrl}img/cigar-x-card.png`}
        />
        <meta name="twitter:title" content={`${siteConfig.title} - VRChat向け葉巻ギミック`} />
      </Head>
      <HomepageHero />
    </Layout>
  );
}
