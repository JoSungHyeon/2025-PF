import styles from './css/Opensource.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import projectData from '../projectData';

function Opensource() {
	let {codepen} = projectData
	return (
		<section className={styles.codepen}>
			<div className={styles.sectionInner}>
				<div className={styles.title}>
					<h2>OPEN SOURCE</h2>
				</div>
				<SourceWrapper propsValue={codepen} />
			</div>
		</section>
	);
}

function SourceWrapper(props) {
	let codepen = props.propsValue;

	return (
		<div className={styles.sourceWrapper}>
			<Swiper
				autoplay={{
					delay: 700
				}}
				speed={2000}
				slidesPerView={1}
				loop={true}
				spaceBetween={70}
				centeredSlides={true}
				breakpoints={{
					640: {
						slidesPerView: 2
					},
					1199: {
						slidesPerView: 3.5
					},
					1599: {
						slidesPerView: 4.5
					}
				}}
				modules={[Autoplay]}
				className={`swiper ${styles.sourceSwiper}`}
			>
				{
					codepen.map((d, i) =>
						<SwiperSlide key={i} className={styles.swiperSlide}>
							<div className={styles.slideInner}>
								<div className={styles.sourceTitle}>
									<h3>{d.title}</h3>
								</div>
								<div className={styles.sourceSkill}>
									{
										d.skill.map((skill, j) =>
											<span key={j}>{skill}</span>
										)
									}
								</div>
								<div className={styles.sourceDesc}>
									<ul>
										{
											d.desc.map((desc) =>
												<li>{desc}</li>
											)
										}
									</ul>
								</div>
								<div className={styles.sourceBtn}>
									<a href={d.siteLink} target="portfolio" className={styles.site}>SITE</a>
									<a href={d.gitLink} target="portfolio" className={styles.git}>GIT</a>
								</div>
							</div>
				  		</SwiperSlide>
					)
				}
			</Swiper>
		</div>
	)
}

export default Opensource;