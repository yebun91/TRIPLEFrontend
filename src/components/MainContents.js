import React, { useState } from 'react';
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

const MainContents = () => {
	const [ tripNum, setTripNum ] = useState(0);
	const [ reviewNum, setReviewNum ] = useState(0);
	const [ planNum, setPlanNum ] = useState(0);
	const [ intervalNum, setIntervalNum ] = useState(1);

	// t = 시간 - 애니메이션 시작 이후 경과한 시간(변화될 값)
	// b = 시작 값 - 애니메이션의 시작 지점. 여기선 0부터 시작함.
	// c = 변화 값 - 시작값에서 변화되고자 하는 값.
	// d = 소요시간 - 애니메이션에 소요되는 시간.
	function easeOutExpo(t, b, c, d) {
		return t === d ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
	}
	const numInterval = setTimeout(() => {
		setTripNum(Math.round(easeOutExpo(intervalNum, 0, 700, 200)));
		setReviewNum(Math.round(easeOutExpo(intervalNum, 0, 100, 200)));
		setPlanNum(Math.round(easeOutExpo(intervalNum, 0, 470, 200)));
		setIntervalNum((prv) => prv * 1.1);
	}, intervalNum);

	if (tripNum >= 700) {
		clearInterval(numInterval);
	}

	return (
		<Contents className="upAnimation">
			<p>
				<strong>{tripNum}만 명</strong>의 여행자
			</p>
			<p>
				<strong>{reviewNum}만 개</strong>의 여행 리뷰
			</p>
			<p>
				<strong>{planNum}만 개</strong>의 여행 일정
			</p>
		</Contents>
	);
};

export default MainContents;
