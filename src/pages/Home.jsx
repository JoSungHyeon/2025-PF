import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import Lenis from '@studio-freight/lenis';

import Header from '../components/Header';
import Start from '../components/Start';
import Main from '../components/Main';
import Skill from '../components/Skill';
import Work from '../components/Work';
import Contact from '../components/Contact';

import styles from './css/Home.module.css';

gsap.registerPlugin(ScrollToPlugin);

function LoadingScreen({ onFinish }) {
  useEffect(() => {
    // 1초 동안 로딩바 채우고 → 0.6초 동안 위로 슬라이드
    const tl = gsap.timeline({ onComplete: onFinish });
    tl.to(`.${styles.loadingBar}`, { width: '100px', duration: 1, ease: 'power2.out' })
      .to(`.${styles.loadingWrapper}`, { y: '-100%', opacity: 0, duration: 0.6, ease: 'power2.inOut' }, "+=0.2");
  }, [onFinish]);

  return (
    <div className={styles.loadingWrapper}>
      <span>Loading...</span>
      <div className={styles.loadingBar}></div>
    </div>
  );
}

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    function lenisAnimation() {
      const lenis = new Lenis({
        duration: 2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
    }

    lenisAnimation();
    gsap.to(window, { scrollTo: 0, duration: 0.3 });
  }, []);

  return (
    <div id="home">
      {loading && <LoadingScreen onFinish={() => setLoading(false)} />}
      <Header />
      <Start />
      <Main />
      <Skill />
      <Work />
      <Contact />
    </div>
  );
}

export default Home;
