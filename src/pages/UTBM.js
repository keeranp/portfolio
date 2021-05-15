import { motion } from 'framer-motion'
import React from 'react'
import Navbar from '../components/Navbar'
import styles from './Project.module.css'
import dining from '../img/dining.png'
import tp1 from '../img/tp1.png'
import lo43 from '../img/lo43.JPG'

export default function UTBM(props) {
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
                <h1>UTBM Génie Informatique</h1>
                    <div className={styles.paragraph}>
                        <h2>Synthèse d'image</h2>
                        <p>
                            Dans le cadre de l'UV IN55, en utilisant le logiciel de <span style={emphasis}>modélisation 3D Blender</span> il fallait modéliser une scène 3D représentant une salle à manger, avec une table, ses
                            chaises, des verres à pied, des assiettes, des couverts, etc...<br/>
                        </p>
                        <div className={styles.row}>
                            <img src={tp1} className={styles.responsive} />
                            <img src={dining} className={styles.responsive}/>
                        </div>
                    </div>
                    <div className={styles.paragraph}>
                        <h2>Projet Java en LO43</h2>
                        <p>
                            Le but du projet est de créer une visionneuses d’images en utilisant la <span style={emphasis}>Programmation Orientée Object avec Java</span>.<br/>
                            Diverses fonctionnalités permettent de naviguer et d’examiner le contenu des images, une à une ou en groupe, et
                            de zoomer.
                        </p>
                        <div style={{display:'flex',justifyContent:'space-around'}}>
                            <img src={lo43} className={styles.responsive} style={{maxWidth:'70%'}}/>
                        </div>
                    </div>
                </section>
            </section>
            <section className={styles.skills}>
                <h1>Compétences acquises</h1>
                <ul>
                    <li>Utiliser Blender</li>
                    <li>Programmation orientée objet</li>
                </ul>
            </section>
        </motion.div>
    )
}
