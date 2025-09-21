import styles from './css/Start.module.css';
import homeData from '../homeData';


function Start() {
	let {mainVideo} = homeData

	return (
		<div className={styles.start}>
			<main>
				<video src={mainVideo} className={styles.mainVideo} muted autoPlay loop playsInline poster='/img/video_poster.png'></video>
				<div className={styles.mainText}>
					<h2>SH' <span>PORTFOLIO</span></h2>
					<p>더 나은 코드를 고민하는 퍼블리셔 & 프론트엔드 개발자</p>
				</div>
			</main>
		</div>
	);
}



export default Start;