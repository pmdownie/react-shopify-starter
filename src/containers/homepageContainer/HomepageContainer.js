import React from 'react';
import logo from '../../shared/images/logo.svg';
import styles from './HompageContainer.css';

const HomepageContainer = () => {
	return (
		<div className={ styles.app }>
			<div className={ styles.header }>
			  <img src={logo} className={ styles.logo } alt="logo" />
			  <h2>Welcome to React</h2>
			</div>
			<p className={ styles.intro }>
			  To get started, edit <code>src/App.js</code> and save to reload.
			</p>
			<p className={ styles.parapgraph }>
			  This is a test to see if this is workiing
			</p>
		</div>
	)
}

export default HomepageContainer;