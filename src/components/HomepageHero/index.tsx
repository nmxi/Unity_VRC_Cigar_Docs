import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const heroImages = [
  'cigar-system-overview.png',
  'cigar-cut-operation.png',
  'cigar-ignite-operation.png',
  'cigar-smoking-operation.png',
  'cigar-ash-removal.png',
];

export default function HomepageHero(): JSX.Element {
  const imageBaseUrl = useBaseUrl('/img/');
  const imageUrls = heroImages.map((image) => `${imageBaseUrl}${image}`);
  const backgroundClasses = [
    styles.backgroundImage0,
    styles.backgroundImage1,
    styles.backgroundImage2,
    styles.backgroundImage3,
    styles.backgroundImage4,
  ];

  return (
    <main className={styles.heroBanner}>
      <div className={styles.backgrounds} aria-hidden="true">
        {imageUrls.map((src, index) => (
          <img
            key={src}
            src={src}
            alt=""
            className={clsx(styles.backgroundImage, backgroundClasses[index])}
          />
        ))}
      </div>
      <div className={styles.overlay} />
      <div className={clsx('container', styles.heroContent)}>
        <div className={styles.titlePanel}>
          <p className={styles.heroEyebrow}>VRChat World Gimmick</p>
          <h1 className={styles.heroTitle}>Mikinel Cigar System</h1>
          <div className={styles.buttons}>
            <Link
              className={clsx('button button--lg', styles.heroButton)}
              to="/docs/intro">
              ドキュメントを見る
            </Link>
            <Link
              className={clsx('button button--lg', styles.heroButton)}
              href="https://youtu.be/K0ycivtSE3w?si=MuhO1T0kQjnh9Yuk"
              target="_blank"
              rel="noopener noreferrer">
              紹介動画
            </Link>
            <Link
              className={clsx('button button--lg', styles.heroButton)}
              href="https://nmxi.booth.pm/items/8706764"
              target="_blank"
              rel="noopener noreferrer">
              Booth
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
