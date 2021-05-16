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
        >
        <Navbar></Navbar>
            <section className={styles.container}>
                <section className={styles.content}>
                <h1>Séjour à Londres</h1>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5vh' }}>
                        <p>
                            J’ai voyagé huit fois à Londres pour pouvoir visiter de la famille. Chaque séjour a duré entre deux à trois semaines. J'ai dû m'<span style={emphasis}>adapter</span> à l'anglais ainsi qu'à la culture, la monnaie, les moyens de transport du pays.<br/>
                            En visitant Londres, j'ai appris à me déplacer tout seul, demander de l'aide à des étrangers et prendre des décisions dans des circonstances peu familières. Tout ceci m'a rendu plus <span style={emphasis}>autonome</span>.<br/>
                            J’ai ainsi pu acquérir une bonne connaissance de l’anglais et m'imprégner de la culture anglaise. J’ai eu plusieurs fois l’occasion de pratiquer l’anglais à l’oral. J’ai ainsi pu obtenir un <span style={emphasis}>niveau C1 au test d’anglais Linguaskill</span>.
                        </p>
                    </div>
                </section>
            </section>
            <section className={styles.skills}>
                <h1>Compétences acquises</h1>
                <ul>
                    <li>Anglais: niveau C1</li>
                    <li>Adaptabilté</li>
                    <li>Autonomie</li>
                </ul>
            </section>
        </motion.div>
    )
}
