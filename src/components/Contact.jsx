import styles from './css/Contact.module.css'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import homeData from '../homeData';

gsap.registerPlugin(ScrollTrigger);

function Contact() {
	let {contact} = homeData;
	
	return (
		<section className={styles.contact}>
			<div className={styles.sectionInner}>
				<div href="" className={styles.title}>
					<h2>CONTACT</h2>
				</div>
				<ContactItem propsValue={contact}/>
			</div>
		</section>
	);
}

function ContactItem(props) {
	let contact = props.propsValue;

	return (
		<div className={styles.contactWrap}>
			{
				contact.map((d, i) =>
					<a key={i} href={d.link} className={styles.contactItem} target='portfolio'>
						<div className={styles.itemImg}>
							<img src={`img/${d.name}.png`} alt={d.name} />
						</div>
					</a>
				)
			}
		</div>
	);
}

export default Contact;