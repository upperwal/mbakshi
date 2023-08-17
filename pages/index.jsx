import {
    Grid
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

import TextBox from '@/components/TextBox';

import ProfileImage from '@/public/images/profile/mehak.jpg';

import styles from '@/styles/Home.module.scss';

export default function Home() {
    return (
        <>
            
            <section className={styles.home_section}>
                <section className={styles.hero_section}>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6} lg={6}>
                            <Image 
                                src={ProfileImage}
                                alt={'Mehak Bakshi'}
                                className={styles.profile_image}    
                            />
                        </Grid>
                        <Grid item xs={12} md={6} lg={6} className={styles.info_container}>
                            <p>Hello my name is</p>
                            <h1>MEHAK BAKSHI</h1>
                            <p>I am an Architect and today is my birthday &#129395;</p>
                            <Link href="/projects">
                                <button>MY WORK</button>
                            </Link>
                        </Grid>
                    </Grid>

                    
                    
                
                    </section>
            </section>
            
        </>
    )
}