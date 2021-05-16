import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './HomePageStyle.module.css'
import { motion, useCycle } from 'framer-motion'

export default function HomePage(props) {
    const location = useLocation()

    const pageStyle = {
        position: 'fixed'
    }

    const whichAnimation = ()=>{
        if(location.state){
            return true
        }else{
            return false
        }
    }

    return (
        <motion.div
            className={styles.content}
            initial={whichAnimation() ? 'left' : 'enter'}
            animate='visible'
            exit='left'
            variants={props.pageVariants}
            transition={props.pageTransition}
            style={pageStyle}
        >
            <section className={styles.mainContent}>
                <h1>Je suis <span className={styles.emphasis}>Keeran Paheerathan</span>,</h1>
                <h2>étudiant en génie informatique</h2>
            </section>
            <Link className={styles.projectsLink} to={'/projects'}>
                <div className={styles.arrow}></div>
            </Link>
        </motion.div>
    )
}
