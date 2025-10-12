import styles from './css/Header.module.css';
import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { Link } from 'react-router-dom';
import homeData from '../homeData';

gsap.registerPlugin(ScrollToPlugin);

function Header() {
	const [isOpen, setIsOpen] = useState(false);
	let {navigation} = homeData;
	const moMenuRef = useRef(null);
	const logoRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);

    const moMenu = moMenuRef.current;
    const logo = logoRef.current;

    // gsap 애니메이션
    gsap.to(moMenu, { left: !isOpen ? 0 : "100%", duration: 0.3 });

    // logo에도 on 클래스 적용
    if (!isOpen) {
      logo.classList.add("on");
    } else {
      logo.classList.remove("on");
    }
  };

	useEffect(() => {
		let menuList = document.querySelectorAll(`.${styles.pcMenu} > ul > li`);
		let sectionList = document.querySelectorAll("section");

		let sectionOffset = [];

		sectionList.forEach(function(item) {
			sectionOffset.push(item);
		});
	
		menuList.forEach(function(item, i) {
			item.addEventListener("click", function(e) {
				e.preventDefault();
				if(i === 0) {
					gsap.to(window, {scrollTo: 0, duration: 0.3});
				} else {
					gsap.to(window, {scrollTo: sectionOffset[i], duration: 0.3});
				}
			});
	
			item.addEventListener("mouseenter", function() {
				menuList.forEach(function(item2, j) {
					if(j === i) {
						item2.classList.add("active");
					} else {
						item2.classList.remove("active");
					}
				});
			});
	
			item.addEventListener("mouseleave", function() {
				item.classList.remove("active");
			});
		});

    const moMenuList = document.querySelectorAll(`.${styles.mobileMenu} > ul > li`);

    moMenuList.forEach((item, i) => {
      item.addEventListener("click", function(e) {
        e.preventDefault();

        const moMenu = moMenuRef.current;
        const logo = logoRef.current;

        if (!moMenu || !logo) return;

        const closeMenu = () => {
          gsap.to(moMenu, { left: "100%", duration: 0.3 });
          logo.classList.remove("on");
          setIsOpen(false);
        };

        // 클릭한 메뉴에 맞는 위치로 스크롤
        const targetOffset = i === 0 ? 0 : sectionOffset[i];
        gsap.to(window, {
          scrollTo: targetOffset,
          duration: 0.3,
          onComplete: closeMenu, // 스크롤 끝나면 메뉴 닫기
        });
      });
    });
	}, [])

  return (
	<header>
		<div className={styles.inner}>
			<div className={styles.logo} ref={logoRef}>
				{/* <h1><Link to={"/"}>&#123; JoSungHyeon &#125;</Link></h1> */}
				<h1><a href='https://sh-port-folio.vercel.app/' target='_blank'>SH' PORTFOLIO</a></h1>
			</div>
			<nav className={styles.pcMenu}>
        <ul>
				  <Navigation propsValue={navigation} />
        </ul>
			</nav>
			<nav className={styles.mobileMenu}>
				<button 
					type='button'
					className={styles.mobileOpen}
					onClick={toggleMenu}
				>
					<div></div>
					<div></div>
					<div></div>
				</button>
				<ul ref={moMenuRef}>
					<Navigation propsValue={navigation} />
				</ul>
			</nav>
		</div>
	</header>
  )
}

function Navigation(props) {
	let navigation = props.propsValue;

	return (
		<>
			{
				navigation.map((d, i) => 
					<li key={i}><a href={d.href}><p>{d.text}</p></a></li>
				)
			}
		</>
	)
}

export default Header