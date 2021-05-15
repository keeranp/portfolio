import { motion } from 'framer-motion'
import React from 'react'
import Navbar from '../components/Navbar'
import styles from './Project.module.css'

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
            style={pageStyle}
        >
            <section className={styles.container}>
                <Navbar></Navbar>
                <section className={styles.content}>
                <h1>UTBM Génie Informatique</h1>
                    <div className={styles.paragraph}>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu vehicula nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus maximus semper euismod. Duis condimentum odio sit amet sem accumsan, et euismod ipsum fermentum. Ut sed eros laoreet, mollis ligula vel, mattis nunc. Quisque pulvinar diam sed nunc ullamcorper, at luctus nunc rhoncus. Vestibulum a nisl ac dui facilisis eleifend sed aliquam eros. Duis tincidunt neque eu feugiat ornare. In molestie sapien ut hendrerit fermentum. Vestibulum tincidunt mauris ac orci malesuada, et pulvinar sapien volutpat. Cras luctus ac nibh vitae pretium. Pellentesque aliquet nibh ac arcu volutpat, et rutrum risus ullamcorper. Aenean justo urna, interdum at nunc eu, pellentesque accumsan risus.

Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In nec felis a risus vestibulum blandit non vitae nisi. Maecenas vel faucibus lacus. Phasellus vitae luctus eros. Aliquam mattis nibh vel nunc laoreet faucibus. Cras ultricies nibh in turpis pharetra interdum. Aenean varius nunc quis nisl tempor placerat. Quisque aliquet libero felis. Sed posuere et justo ac porttitor. In in lectus fringilla, facilisis velit eget, elementum nisl. Integer vel commodo libero. Integer bibendum mattis consectetur.

Maecenas neque ligula, elementum vitae leo eget, blandit rutrum velit. Mauris aliquam rutrum lacus id consectetur. Praesent porta sem non libero consectetur, eget ultrices enim sollicitudin. Morbi pulvinar porta purus eget eleifend. Nulla consequat mi neque, non accumsan velit posuere non. Duis iaculis elit orci, non tempus purus hendrerit vitae. Aliquam condimentum quam vel dui ultrices ornare. Duis fringilla lacinia felis, non blandit tortor consequat non. Donec at orci vel felis tempor faucibus quis tempus metus. Pellentesque finibus justo non est sollicitudin finibus. Aliquam ut erat vel lorem venenatis tempor vitae id lorem. Vestibulum felis odio, vehicula quis ullamcorper ac, placerat eget leo. Maecenas vel nisi nunc. Etiam eu velit sed orci condimentum congue. Aliquam eu augue quis nunc scelerisque varius.

Vestibulum maximus porta rhoncus. Aenean et erat et metus ullamcorper imperdiet. Nulla in ornare nulla. Curabitur congue mauris nec nunc scelerisque venenatis. Nulla convallis sodales ligula, eget fermentum eros ultricies sed. Sed placerat lacinia leo, eu aliquet nulla consequat vitae. Curabitur condimentum aliquam pretium. Mauris id magna id lacus vestibulum hendrerit. Praesent ultrices bibendum quam, sit amet volutpat lorem gravida non. Cras eleifend in nisi sit amet consequat. Praesent tristique finibus metus vel pulvinar. Donec viverra odio eu tortor dignissim, non blandit nisl cursus. Suspendisse congue justo hendrerit dolor lobortis, sit amet tristique mi placerat. Donec dolor mi, commodo vel sem nec, vehicula imperdiet erat.

Cras faucibus mi id leo cursus, at euismod felis bibendum. Maecenas risus arcu, bibendum eu posuere vel, euismod eget nunc. Duis sollicitudin varius gravida. Sed vel eros nec tortor varius ultrices. Quisque eget mauris nulla. Nam vitae eleifend purus. Vestibulum finibus tortor sapien, id sollicitudin quam tempus id.
                        </p>
                    </div>
                </section>
            </section>
            <section className={styles.skills}>
                <h1>Compétences acquises</h1>
                <ul>
                    <li>Algorithmique</li>
                    <li>Programmation orientée objet</li>
                    <li>Utiliser le SQL</li>
                </ul>
            </section>
        </motion.div>
    )
}
