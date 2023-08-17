import {useRouter} from 'next/router';
import Image from 'next/image';

import styles from '@/styles/TextBox.module.scss';

export default function TextBox(props) {

    const router = useRouter();

    return (
        <div className={styles.text_box + ' ' + (props.link ? styles.link: '')} onClick={() => {router.push(props.link || '')}}>
            <Image 
                src={props.img} 
                alt="Cover"
            />
            <h3>{props.title}<span className={styles.category}>{" / " + props.category}</span></h3>
            <p>{props.description}</p>
        </div>
    )
}
