import { motion } from 'framer-motion'
import React from 'react'
import Navbar from '../components/Navbar'
import styles from './Project.module.css'

export default function Karate(props) {
    const emphasis = {
        color: '#8be9fd',
        fontWeight: 'bold'
    }
    const pageStyle = {
        position: 'fixed',
        width: '100vw'
    }
    return (
        <motion.div
            className={styles.main}
            initial='right'
            animate='visible'
            exit='right'
            variants={props.pageVariants}
            transition={props.pageTransition}
            style={pageStyle}
        >
            <section className={styles.container}>
                <Navbar></Navbar>
                <section className={styles.content}>
                <h1>Pratique du Karaté</h1>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent:'space-between', marginBottom: '5vh' }}>
                        <p>
                        J’ai pratiqué le karaté de mes 7 à 11 ans. J’ai aussi participé à quelques tournois. Cette pratique m’a permis d’être plus discipliné et d’améliorer ma capacité de concentration pour pouvoir apprendre les différents mouvements et techniques. Cela m’a aussi appris le respect. La base des relations et des arts martiaux tourne autour du respect de base des instructeurs et des autres élèves.
                        </p>
                    </div>
                </section>
            </section>
            <section className={styles.skills}>
                <h1>Compétences acquises</h1>
                <ul>
                    <li>Maîtrise de soi</li>
                </ul>
            </section>
        </motion.div>
    )
}
