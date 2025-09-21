import styles from './css/Main.module.css'
import { useLayoutEffect } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import homeData from '../homeData';

gsap.registerPlugin(ScrollTrigger);

function Main() {
	let {spec} = homeData;

	useLayoutEffect(() => {

		const specTl = gsap.timeline({
			scrollTrigger: {
				trigger: `.${styles.section1}`,
				pin: true,
				start: "top top",
				end: "+=1500",
				scrub: true
			}
		});

		let specText = document.querySelectorAll(`.${styles.section1} .${styles.title} > h2`);
	
		specTl.fromTo(specText, {
			y: 200,
			opacity: 0
		}, {
			y: 0,
			opacity: 1,
			duration: 0.3,
			stagger: 0.5
		})
	
		function specMove(element, container, prevy, nexty, playtime=2) {
			gsap.fromTo(element, {
				y: prevy
			}, {
				y: nexty,
				duration: playtime,
				ease: "none",
				scrollTrigger: {
					trigger: container,
					scrub: true,
					start: "top 30%",
				}
			});
		}
	
		specMove(`.${styles.html}`, `.${styles.section1}`, 1000, -2000);
	
		specMove(`.${styles.css}`, `.${styles.section1}`, 3000, -2000);
	
		specMove(`.${styles.javascript}`, `.${styles.section1}`, 3000, -2000);
	
		specMove(`.${styles.sass}`, `.${styles.section1}`, 2000, -2000);
	
		specMove(`.${styles.react}`, `.${styles.section1}`, 6000, -2000);
	
		specMove(`.${styles.node}`, `.${styles.section1}`, 4000, -2000);

		return () => {
			specTl.scrollTrigger.kill();
			ScrollTrigger.refresh();
		};
	}, []);


	return (
		<section className={styles.section1}>
			<div className={styles.icons}>
				<div className={styles.title}>
					<h2>GROWTH <span>AND</span></h2>
					<h2><span>DEVELOPMENT FOR</span></h2>
					<h2>BETTER <span>DAYS</span></h2>
				</div>
				<SpecIcon propsValue={spec} />
			</div>
		</section>
	);
}

function SpecIcon(props) {
	let spec = props.propsValue;
	
	return (
		<div className={styles.specs}>
			{
				spec.map((d, i) =>
					<div key={i} className={styles[d.class]}>
						<img src={`/img/${d.src}`} alt={d.class} />
					</div>
				)
			}
		</div>
	);
}

export default Main;