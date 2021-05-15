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
            style={pageStyle}
        >
            <Navbar changeAnimation={changeAnimation}/>
            <section className={styles.treeNav}>
                <ul>
                    <li>
                        <span className={styles.treeNavTitle}>Mes Expériences</span>
                        <ul className={styles.treeStart}>
                            <li>
                                <span>Expérience Professionelle</span>
                                <ul>
                                    <li>
                                        <Link to={{ pathname: '/portfolio/st40' }} className={styles.emphasis}>Stage à Singapour</Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <span>Expérience Scolaire</span>
                                <ul>
                                    <li>
                                        <Link to={{ pathname: '/portfolio/utbm' }} className={styles.emphasis}>UTBM Génie Informatique</Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <span>Expérience International</span>
                                <ul>
                                    <li>
                                        <Link to={{ pathname: '/portfolio/sejourlondres' }} className={styles.emphasis}>Séjour à Londres</Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <span>Autres Expérience</span>
                                <ul>
                                    <li>
                                        <Link to={{ pathname: '/portfolio/projetperso' }} className={styles.emphasis}>Projet personnel de développement informatique</Link>
                                    </li>
                                    <li>
                                        <Link to={{ pathname: '/portfolio/karate' }} className={styles.emphasis}>Pratique du Karaté</Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </section>
        </motion.div>
    )
}
