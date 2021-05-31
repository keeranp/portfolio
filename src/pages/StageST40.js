import { motion } from 'framer-motion'
import React from 'react'
import Navbar from '../components/Navbar'
import styles from './Project.module.css'
import rgbThermal from '../img/rgbthermal.png'
import h3Logo from '../img/logoh3.jpg'
import drone from '../img/drone.jpg'
import labelling from '../img/labelling.png'
import masked from '../img/masked.png'
import convention from '../img/convention_st40.jpg'

export default function StageST40(props) {
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
                    <h1>Stage à Singapour</h1>
                    <div className={styles.rightImg}>
                        {/* <div className={styles.twoVert}>
                            <img src={h3Logo} className={styles.responsive} />
                            <img src={drone} className={styles.responsive}/>
                        </div> */}
                        <p>
                            J’ai réalisé mon stage de 4ème année à <span style={emphasis}>H3 Dynamics</span>. H3 Dynamics est un groupe singapourien leader
                            dans le domaine de la <span style={emphasis}>robotique cloud et des drones entièrement autonome</span>. Cette entreprise
                            propose notamment un <span style={emphasis}>service d’inspection de bâtiments autonomes</span>. J’ai rejoint le département
                           responsable de ce service du 7 septembre 2020 au 12 février 2021.<br />
                           J’ai travaillé sur plusieurs projets différents pendant ces 6 mois de stage.
                        </p>
                        <div className={styles.proof}>
                            <img src={convention} className={styles.responsive}/>
                            <h3>Convention de stage</h3>
                        </div>
                    </div>
                    <div className={styles.paragraph}>
                        <h2>Extraction de métadonnées</h2>
                        <p style={{ margin: 0 }}>
                            J’ai réalisé un programme en <span style={emphasis}>Java</span> permettant de récupérer les métadonnées d’image prises par des drones pour les stocker dans un fichier <span style={emphasis}>JSON</span>.
                        </p>
                        <div className={styles.rightImg}>
                            <p style={{ margin: 0 }}>
                                Ces drones prennent des <span style={emphasis}>images normales et des images thermiques</span>. Ces images ne sont pas triées et donc on ne peut pas savoir quelles images normales correspondent à leurs images thermiques. Avec les métadonnées de ces images, j’ai rajouté au programme <span style={emphasis}>Java</span> une fonctionnalité permettant de regrouper les images « couleur » avec les images thermiques qui leur correspondent.
                            </p>
                            <img src={rgbThermal} className={styles.responsive} />
                        </div>
                    </div>
                    <div className={styles.paragraph}>
                    <h2>Masquage automatique de fenêtres</h2>
                        <div className={styles.leftBottom}>
                            <img src={labelling} className={styles.responsive}/>
                            <div>
                                <p>
                                    Le but d’un de mes projets était de pouvoir masquer automatiquement les fenêtres d’un bâtiment pour pouvoir respecter la vie privée de ses résidents.
                                    J’ai tout d’abord écrit un programme permettant de détecter automatiquement des fenêtres sur une image en utilisant la technologie de la <span style={emphasis}>vision par ordinateur</span>. Ensuite il ne restait plus qu’à coder la partie qui dessine automatiquement un rectangle noir sur ces fenêtres.
                                </p>
                                <h3>Avant/Après le masquage des fenêtres:</h3>
                                <img src={masked} className={styles.responsive}/>
                            </div>
                        </div>
                    </div>
                    <div className={styles.paragraph}>
                        <h2>Les projets le long du stage</h2>
                        <p>
                            Pendant le stage, j’ai créé des <span style={emphasis}>API REST</span> avec <span style={emphasis}>Node.JS</span> et <span style={emphasis}>expliquer leurs fontionnements</span> pour que mes collègues puissent utiliser facilement ces programmes créés précédemment.
                            <br />J’ai également écrit des scripts <span style={emphasis}>Python</span> pour pouvoir faire du Data Cleaning sur des fichiers <span style={emphasis}>JSON</span>.
                            Les bases de données d'image étant situés sur le cloud, j'ai appris à utiliser <span style={emphasis}>AWS S3</span> pour pouvoir y accéder pour pouvoir les utiliser avec mes différents programmes.
                            <br />Pour la plupart des projets que j’ai réalisés, la plupart du temps il n’y avait pas de ressource pouvant m’aider sur internet comme par exemple avec le regroupement d'image normale et thermique. Ces projets étaient plus difficiles mais cela m’a permis d’améliorer ma capacité à <span style={emphasis}>résoudre des problèmes</span>.
                        </p>
                    </div>
                    <div className={styles.paragraph}>
                        <h2>Test et déboguage</h2>
                        <p style={{margin:0}}>
                            Durant ce stage, j’ai eu à <span style={emphasis}>tester des logiciels</span> réaliser par d’autres ingénieurs. Je devais tester toutes les fonctionnalités de ces logiciels et trouver les différents bugs et si possible la raison de ceux-ci.
                        </p>
                        <p style={{margin:0}}>
                            J’ai appris à <span style={emphasis}>exposer</span> ces bugs en détail à l’<span style={emphasis}>oral</span> à mon tuteur de stage et à l’<span style={emphasis}>écrit</span> avec des explications et des captures vidéos.
                        </p>
                    </div>
                    <div className={styles.paragraph}>
                        <h2>Travailler à Singapour</h2>
                        <p style={{margin:0}}>
                            Singapour est une cité-État multiculturelle puisqu’il y a trois ethnies différentes qui y vivent (Chinois, Malais et Tamoul). La langue qui y est la plus parler est l’anglais. L’anglais a été choisie pour fédérer ces communautés. Ainsi, la langue de travail est l’anglais. J’avais déjà une bonne connaissance de l’<span style={emphasis}>anglais</span> mais durant ce stage j’ai pu acquérir une <span style={emphasis}>connaissance pratique</span> de celle-ci. 
                        </p>
                        <p style={{margin:0}}>
                            Durant ce stage j’ai appris à m’<span style={emphasis}>adapter à une nouvelle culture</span> en travaillant avec des personnes ayant des cultures différentes. Travailler avec ces personnes m’a permis d’en apprendre plus sur le <span style={emphasis}>travail d'équipe</span> et comment interagir avec celles-ci.
                        </p>
                    </div>
                </section>
            </section>
            <section className={styles.skills}>
                <h1>Compétences acquises</h1>
                <ul>
                    <li>Programmer en Python, Java et Node.JS</li>
                    <li>Créer des API REST</li>
                    <li>Utiliser la vision par ordinateur</li>
                    <li>Utiliser AWS S3</li>
                    <li>Réaliser des tests et débogages</li>
                    <li>Résoudre des problèmes et raisonner logiquement</li>
                    <li>Communiquer à l'orale et à l'écrit</li>
                    <li>Communiquer en anglais</li>
                    <li>Savoir travailler en équipe</li>
                    <li>S’adapter à la culture du travail d’un autre pays</li>
                </ul>
            </section>
        </motion.div>
    )
}
