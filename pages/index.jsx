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
                        <Grid item xs={12} md={6} lg={5} className={styles.info_container}>
                            <Image 
                                src={ProfileImage}
                                alt={'Mehak Bakshi'}
                                className={styles.profile_image}    
                            />
                        </Grid>
                        <Grid item xs={12} md={6} lg={7} className={styles.info_container}>
                            <p>Hello my name is</p>
                            <h1>MEHAK BAKSHI</h1>
                            <p>I am an Architect/ Certified Young Grandma. Adopting clingy babies and bombarding them up with food, affection and second-rate Bollywood dramas is my lifelong affliction. Enjoying dull food through mind-bogglingly lacklustre smoothies (think banana-chia-paalak-lauki greatness !!) affirms my young old age. I enjoy showing up late for work as I can’t get enough sleep but this in no way compromises my obligations to fellow ‘resources & acquaintances’. I am constantly on the phone managing/creating one crisis or another and if I get time, I indulge in shopping skirts. I truly believe in being self-reliant and independent but having truckloads of cash isn’t bad either. Enough about me, I know am a designer extrrrraordinaire. Please see my works!!! (P.S- No, I am not modelling for jewellery in this photo)</p>
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