import styles from './css/Skill.module.css'
import homeData from '../homeData';

function Skill() {
	let {skill} = homeData;

	return (
		<section className={styles.skill}>
			<div className={styles.sectionInner}>
				<div className={styles.title}>
					<h2>SKILLS</h2>
				</div>
				<SkillItem propsValue={skill}/>
			</div>
		</section>
	);
}

function SkillItem(props) {
	let skill = props.propsValue;

	return (
		<div className={styles.skillInfo}>
			{
				skill.map((d, i) => 
					<div key={i} className={styles.skillItem}>
						<div className={styles.skillTitle}><span>{d.num}</span>{d.title}</div>
						<div className={styles.skillIcon}>
							<div className={styles.iconWrap}>
								{
									d.skills.map((skills, j) =>
										<img key={j} src={`img/spec/spec_${skills}.png`} alt={skills} />
									)
								}
							</div>
							<ul className={styles.skillDesc}>
								{
									d.desc.map((desc, j) => 
										<li key={j}>{desc}</li>
									)
								}
							</ul>
						</div>
					</div>
				)
			}
		</div>
	)
}

export default Skill;