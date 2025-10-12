import styles from './css/Work.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import projectData from '../projectData';

gsap.registerPlugin(ScrollTrigger);

function Work() {

	let {work} = projectData;

	return (
		<section className={styles.work}>
			<div className={styles.sectionInner}>
				<div className={styles.title}>
					<h2>PROJECT</h2>
				</div>
				<ProtWrap propsValue={work} />
			</div>
		</section>
	)
}

function ProtWrap(props) {
	let work = props.propsValue;

	return (
		<div className={styles.portWrapper}>
			{
				work.map((d, i) =>
					<a href={d.siteLink} target='_blank' key={i} className={styles.portWrap}>
						<div className={styles.portNum}>
							<span>{d.num}</span>
						</div>
						<div className={styles.portInfo}>
							<div className={styles.portTitle}>
								<h3>{d.title}</h3>
							</div>
							<div className={styles.portSkill}>
								{
									d.skill.map((skill, j) =>
										<span key={j}>{skill}</span>
									)
								}
							</div>
							<div className={styles.portDesc}>
								<p>{d.desc}</p>
							</div>
							<div className={styles.portBtn}>
								{/* <a href={d.siteLink} className={styles.view} target='portfolio'>View Site</a> */}
								{/* <a href={d.codeLink} className={styles.code} target='portfolio'>CODE VIEW</a> */}
							</div>
						</div>
					</a>
				)
			}
		</div>
	);
}

export default Work;