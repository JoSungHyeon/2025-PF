import styles from './css/About.module.css';

function About() {

	return (
		<section className={styles.about}>
			<div className={styles.sectionInner}>
				<div className={styles.title}>
					<h2>About</h2>
				</div>
				<div className={styles.valueWrap}>
					<div className={styles.aboutTxt}>
						<h3>안녕하세요</h3>
						<p>더 나은 사용자 경험과 유지보수하기 쉬운 코드를 만들기 위해 끊임없이 고민하고 성장하는 <span>퍼블리셔 & 프론트엔드 개발자 조성현</span>입니다.</p>
					</div>
					<div className={styles.valueTxt}>
						<div className={styles.valueBox}>
							<div className={styles.icon}>
								<i class="fa-solid fa-pen-nib"></i>
							</div>
							<div className={styles.valueDesc}>
								<strong>Publishing</strong>
								<p>디자인 의도를 정확히 구현하며, 웹 표준과 접근성을 고려한 퍼블리싱을 지향합니다. 세밀한 디테일까지 신경 써 완성도 높은 결과물을 만듭니다.</p>
							</div>
						</div>
						<div className={styles.valueBox}>
							<div className={styles.icon}>
								<i class="fa-solid fa-file-code"></i>
							</div>
							<div className={styles.valueDesc}>
								<strong>Frontend</strong>
								<p>React와 JavaScript를 기반으로 유지보수가 쉽고 효율적인 UI를 설계합니다. 사용자 경험을 중심으로, 더 나은 코드를 항상 고민합니다.</p>
							</div>
						</div>
						<div className={styles.valueBox}>
							<div className={styles.icon}>
								<i class="fa-solid fa-users"></i>
							</div>
							<div className={styles.valueDesc}>
								<strong>Collaboration</strong>
								<p>좋은 결과물은 혼자가 아닌 함께할 때 완성된다고 믿습니다. 서로의 아이디어를 존중하며, 팀 전체가 성장하는 협업을 지향합니다.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;