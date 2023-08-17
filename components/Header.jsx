import Image from 'next/image';
import Link from 'next/link';

import LinkedinLogo from '../public/images/linkedin-logo.svg';

import styles from '@/styles/Header.module.scss';

export default function Header() {

    function renderLogo(className) {
        return (
            <Link className={className} href="/">
                {/* <Image
                    priority
                    src={''}
                    alt="Soket Labs Logo"
                /> */}
            </Link>
        )
    }

    return (
        <nav className={styles.header_container}>
            <ul>
                <Link href="/">
                    <li>HOME</li>
                </Link>
                <Link href="/documents/cv.pdf">
                    <li>ABOUT</li>
                </Link>
                <Link href="/documents/portfolio.pdf">
                    <li>PORTFOLIO</li>
                </Link>
                <Link href="/projects">
                    <li>PROJECTS</li>
                </Link>
                <Link href="/contact">
                    <li>CONTACT</li>
                </Link>
            </ul>
            <div className={styles.social_container}>
                <Link href="https://www.linkedin.com/in/mehakbakshi" target="_blank">
                    <Image
                        priority
                        src={LinkedinLogo}
                        alt="Linkedin Logo"
                    />
                </Link>
            </div>
        </nav>
    )
}