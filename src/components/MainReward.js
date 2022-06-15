import React from 'react';
import styled from 'styled-components';
import apple4x from '../assets/images/badge-apple4x.png';
import store2x from '../assets/images/play-store2x.png';

const Rewards = styled.div`
	animation: up-down 0.7s forwards ease-in-out 0.2s;
	opacity: 0;
	display: flex;
	padding-top: 30px;
	img {
		width: 54px;
	}
	.reward {
		font-size: var(--font-small);
		font-weight: 400;
		color: var(--gray-color900);
		padding-right: 39px;
		display: flex;
		align-items: center;
		> div {
			padding-left: 10px;
		}
	}
	.upAnimation {
	}
`;

const MainReward = ({ state }) => {
	return (
		<Rewards className="upAnimation">
			<div className="reward">
				<img alt="store2x" src={store2x} />
				<div>
					2018 구글 플레이스토어<br />
					올해의 앱 최우수상 수상
				</div>
			</div>
			<div className="reward">
				<img alt="apple4x" src={apple4x} />
				<div>
					2018 애플 앱스토어<br />
					오늘의 여행앱 선정
				</div>
			</div>
		</Rewards>
	);
};

export default MainReward;
