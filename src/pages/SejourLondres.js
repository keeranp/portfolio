import { motion } from 'framer-motion'
import React from 'react'
import Navbar from '../components/Navbar'
import styles from './Project.module.css'

export default function SejourLondres(props) {
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
                <h1>Séjour à Londres</h1>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5vh' }}>
                        <p>
                            J’ai voyagé huit fois à Londres pour pouvoir visiter de la famille. J’ai ainsi pu acquérir une bonne connaissance de l’anglais. J’ai eu plusieurs fois l’occasion de pratiquer l’anglais à l’oral. J’ai ainsi pu obtenir un niveau C1 au test d’anglais Linguaskill.
                        </p>
                    </div>
                </section>
            </section>
            <section className={styles.skills}>
                <h1>Compétences acquises</h1>
                <ul>
                    <li>Anglais: niveau C1</li>
                </ul>
            </section>
        </motion.div>
    )
}
