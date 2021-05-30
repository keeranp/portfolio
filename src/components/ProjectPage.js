import React, { useState } from 'react'
import styles from './ProjectPage.module.css'
import Navbar from './Navbar'
import { motion, useCycle } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'

export default function ProjectPage(props) {
    const [exitAnimation, cycleExitAnimation] = useCycle("left", "right")
    const location = useLocation()

    const pageStyle = {
        position: 'fixed',
        width: '100vw'
    }

    const whichAnimation = () => {
        if (location.state) {
            return true
        } else {
            return false
        }
    }

    const changeAnimation = ()=>{
        cycleExitAnimation()
    }

    return (
        <motion.div
            className={styles.main}
            initial={whichAnimation() ? 'left' : 'right'}
            animate='visible'
            exit={exitAnimation}
            variants={props.pageVariants}
            transition={props.pageTransition}
        >
            <Navbar changeAnimation={changeAnimation}/>
            <div className={styles.content}>
                <section className={styles.treeNav}>
                    <ul>
                        <li>
                            <span className={styles.treeNavTitle}>Mes Expériences</span>
                            <ul className={styles.treeStart}>
                                <li>
                                    <span>Expérience Professionelle</span>
                                    <ul>
                                        <li>
                                            <Link to={{ pathname: '/st40' }} className={styles.emphasis}>Stage à Singapour</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <span>Expérience Scolaire</span>
                                    <ul>
                                        <li>
                                            <Link to={{ pathname: '/utbm' }} className={styles.emphasis}>UTBM Génie Informatique</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <span>Expérience International</span>
                                    <ul>
                                        <li>
                                            <Link to={{ pathname: '/sejourlondres' }} className={styles.emphasis}>Séjour à Londres</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <span>Autres Expérience</span>
                                    <ul>
                                        <li>
                                            <Link to={{ pathname: '/projetperso' }} className={styles.emphasis}>Projet personnel de développement informatique</Link>
                                        </li>
                                        <li>
                                            <Link to={{ pathname: '/karate' }} className={styles.emphasis}>Pratique du Karaté</Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </section>
                <section className={styles.skills}>
                    <div className={styles.left}>
                        <h2>Compétences techniques</h2>
                        <ul>
                            <li>Programmer en Python, Java et Node.JS</li>
                            <li>Programmer en utilisant la programmation orientée objet</li>
                            <li>Créer des API REST</li>
                            <li>Utiliser la vision par ordinateur</li>
                            <li>Utiliser Unity</li>
                            <li>Comparer algorithmiquement deux images entre elles</li>
                            <li>Utiliser AWS S3</li>
                            <li>Utiliser Blender</li>
                            <li>Réaliser des tests et débogages</li>
                        </ul>
                    </div>
                    <div className={styles.left}>
                        <h2>Compétences générales</h2>
                        <ul>
                            <li>Résoudre des problèmes et raisonner logiquement</li>
                            <li>Agir avec autonomie</li>
                            <li>Communiquer en anglais avec un niveau C1</li>
                        </ul>
                    </div>
                    <div className={styles.right}>
                        <h2>Compétences relationnelles</h2>
                        <ul>
                            <li>Communiquer à l'orale et à l'écrit</li>
                            <li>Savoir travailler en équipe</li>
                            <li>S’adapter à la culture du travail d’un autre pays</li>
                            <li>S'adapter à de nouvelles situations</li>
                        </ul>
                    </div>
                </section>
            </div>
        </motion.div>
    )
}
