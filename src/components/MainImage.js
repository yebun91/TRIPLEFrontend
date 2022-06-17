import React from 'react';
import styled from 'styled-components';
import triple2x from '../assets/images/triple2x.png';

const Images = styled.div`
	animation: up-down 0.7s forwards ease-in-out alternate;
	opacity: 0;
	height: 400px;
	width: 400px;
	background: url(${triple2x});
	background-size: 400px;
	background-repeat: no-repeat;
	> div {
		padding-top: 280px;
		text-align: center;
		color: var(--gray-color600);
		font-weight: 200;
	}
`;

const MainImage = () => {
	return (
		<Images className="upAnimation">
			<div>2021년 12월 기준</div>
		</Images>
	);
};

export default MainImage;
