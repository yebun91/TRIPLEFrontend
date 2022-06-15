import React from 'react';
import styled from 'styled-components';

const Contents = styled.div`
	animation: up-down 0.7s forwards ease-in-out 0.1s;
	opacity: 0;
	color: var(--gray-color);
	font-size: var(--font-large);
	font-weight: 300;
	strong {
		font-weight: 500;
	}
	p {
		margin-bottom: 7px;
	}
	.upAnimation {
	}
`;

const MainContents = ({ state }) => {
	return (
		<Contents className="upAnimation">
			<p>
				<strong>700만 명</strong>의 여행자
			</p>
			<p>
				<strong>100만 개</strong>의 여행 리뷰
			</p>
			<p>
				<strong>470만 개</strong>의 여행 일정
			</p>
		</Contents>
	);
};

export default MainContents;
