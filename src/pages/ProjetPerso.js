import { motion } from 'framer-motion'
import React from 'react'
import Navbar from '../components/Navbar'
import styles from './Project.module.css'
import bridgebefore from '../img/golden-before.jpg'
import bridgeAfter from '../img/golden-after.jpg'
import fujiBefore from '../img/fuji.jpg'
import fujiAfter from '../img/fuji_processed.gif'
import unity from '../img/unity.png'

export default function ProjetPerso(props) {
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
                    <h1>Projet personnel de développement informatique</h1>
                    <div className={styles.paragraph}>
                        <h2>Art génératif</h2>
                        <p>
                            L'art génératif est une création artistique généralement numérique se basant sur des algorithmes pour concevoir des œuvres se générant d'elles-mêmes et/ou non déterminées à l'avance.<br/>
                            Pour acquérir plus de connaissances dans le traitement d’images j’ai créé un programme en <span style={emphasis}>Python</span> permettant de reproduire une image en superposant plusieurs triangles.<br/>
                            Pour chaque nouveau triangle insérer, il faut vérifier si la nouvelle image ressemble plus à l'image à reproduire.
                            Faire ce programme ma permis d’apprendre à <span style={emphasis}>calculer la ressemblance entre deux images</span> pour pouvoir comparer l’image de base et la nouvelle image.
                        </p>
                        <div style={{display:'flex', justifyContent:'space-around', marginBottom:'5vh'}}>
                            <img src={bridgebefore} width='450' height='300'/>
                            <img src={bridgeAfter} width='450' height='300'/>
                        </div>
                        <div style={{display:'flex', justifyContent:'space-around'}}>
                            <img src={fujiBefore} width='450' height='300'/>
                            <img src={fujiAfter} width='450' height='300'/>
                        </div>
                    </div>
                    <div className={styles.paragraph}>
                        <h2>Création de jeu video</h2>
                        <p>
                            J’ai créé quelque jeux vidéo avec Unity comme par exemple un jeu de type Platformer.
                        </p>
                        <img src={unity} width='480' height='270'/>
                    </div>
                </section>
            </section>
            <section className={styles.skills}>
                <h1>Compétences acquises</h1>
                <ul>
                    <li>Utiliser Unity</li>
                    <li>Comparer deux images entre elles</li>
                </ul>
            </section>
        </motion.div>
    )
}
