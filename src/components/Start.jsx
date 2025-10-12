import styles from './css/Start.module.css';
import homeData from '../homeData';

function Start() {
	let {mainVideo} = homeData

	return (
		<div className={styles.start}>
			<main>
				<video src={mainVideo} className={styles.mainVideo} muted autoPlay loop playsInline poster='/img/video_poster.png'></video>
				<div className={styles.mainText}>
					<div className={styles.textWrap}>
						<h2>SH' <span>PORTFOLIO</span></h2>
						<p>더 나은 코드를 고민하는 퍼블리셔 & 프론트엔드 개발자</p>
					</div>
				</div>
				<div className={styles.scrollBtn}>
					<span>SCROLL</span>
					  <svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="white"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<polyline points="6 9 12 15 18 9" />
					</svg>
				</div>
			</main>
		</div>
	);
}



export default Start;