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
        >
            
            <Navbar></Navbar>
            <section className={styles.container}>
                <section className={styles.content}>
                <h1>Pratique du Karaté</h1>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent:'space-between', marginBottom: '5vh' }}>
                        <p>
                            J’ai pratiqué le karaté de mes 7 à 11 ans. Pendant ces années, j'ai aussi eu l'occasion de participé à quelques tournois. Ceux-ci m'ont permis d'apprendre à rester <span style={emphasis}>maître de soi</span> et ainsi de pouvoir être concentré durant un match.<br/>
                            Cette pratique m’a permis d’être plus discipliné et d’améliorer ma <span style={emphasis}>capacité de concentration</span> pour pouvoir apprendre et utiliser les différents mouvements et techniques correctement. <br/>
                            Cela m’a aussi appris le respect car la base des relations et des arts martiaux tourne autour du respect de base des instructeurs et des autres élèves.
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
