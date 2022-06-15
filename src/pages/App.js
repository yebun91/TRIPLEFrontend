import { React, useState, useEffect } from 'react';
import styled from 'styled-components';
import MainContents from '../components/MainContents';
import MainImage from '../components/MainImage';
import MainReward from '../components/MainReward';

const Main = styled.main`
	height: 100vh;
	min-width: 1200px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const MainTitle = styled.div`
	height: 400px;
	margin-left: 220px;
`;

function App() {
	const [ mainContents, setMainContents ] = useState('');
	const [ mainReward, setMainReward ] = useState('');

	// useEffect(() => {
	// 	setTimeout(() => {
	// 		setMainContents('upAnimation');
	// 		setTimeout(() => {
	// 			setMainReward('upAnimation');
	// 		}, 300);
	// 	}, 300);
	// }, []);

	// useEffect(() => {
	// 	setTimeout(() => {
	// 		setMainContents('upAnimation');
	// 	}, 100);
	// 	setTimeout(() => {
	// 		setMainReward('upAnimation');
	// 	}, 200);
	// }, []);

	return (
		<Main>
			<MainImage />
			<MainTitle>
				<MainContents state={mainContents} />
				<MainReward state={mainReward} />
			</MainTitle>
		</Main>
	);
}

export default App;
