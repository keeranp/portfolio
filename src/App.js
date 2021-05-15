import { Route, Switch, useLocation } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import ProjectPage from './components/ProjectPage';
import { AnimatePresence, motion } from 'framer-motion'
import StageST40 from './pages/StageST40';
import UTBM from './pages/UTBM'
import ProjetPerso from './pages/ProjetPerso';
import SejourLondres from './pages/SejourLondres';
import Karate from './pages/Karate';

function App() {
	const location = useLocation()
	const pageVariants = {
		visible: {
			opacity: 1,
			scale: 1,
			x: 0
		},
		enter: {
			opacity: 0,
			scale: 0.8
		},
		left: {
			opacity: 1,
			x: '-100vw',
			scale: 1
		},
		right: {
			opacity: 1,
			x: '100vw',
			scale: 1
		}
	}
	
    const pageTransition = {
        duration: 1
    }

	return (
		<AnimatePresence>
			<Switch location={location} key={location.pathname}>
				<Route exact path="/portfolio" component={HomePage}>
					<HomePage pageVariants={pageVariants} pageTransition={pageTransition}/>
				</Route>
				<Route exact path="/projects" component={ProjectPage}>
					<ProjectPage pageVariants={pageVariants} pageTransition={pageTransition}/>
				</Route>
				<Route exact path='/st40' component={StageST40}>
					<StageST40 pageVariants={pageVariants} pageTransition={pageTransition}/>
				</Route>
				<Route exact path='/utbm' component={UTBM}>
					<UTBM pageVariants={pageVariants} pageTransition={pageTransition}/>
				</Route>
				<Route exact path='/projetperso' component={ProjetPerso}>
					<ProjetPerso pageVariants={pageVariants} pageTransition={pageTransition}/>
				</Route>
				<Route exact path='/sejourlondres' component={SejourLondres}>
					<SejourLondres pageVariants={pageVariants} pageTransition={pageTransition}/>
				</Route>
				<Route exact path='/karate' component={Karate}>
					<Karate pageVariants={pageVariants} pageTransition={pageTransition}/>
				</Route>
			</Switch>
		</AnimatePresence>
	);
}

export default App;
