import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

import styles from './Footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <a href=""> <FaFacebook /> </a>
                <a href="https://intagram.com/littleyaxx?utm_medium=copy_link"> < FaInstagram /> </a>
                <a href="https://www.linkedin.com/in/yasminbenicio/"> <FaLinkedin /> </a>
            </ul>
            <p className={styles.copy_right}><span>Costs</span> &copy; 2021</p>
        </footer>
    )
}

export default Footer;