import React, { useEffect, useState } from 'react';
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
`;

const MainContents = () => {
	const [ tripNum, setTripNum ] = useState(0);
	const [ reviewNum, setReviewNum ] = useState(0);
	const [ planNum, setPlanNum ] = useState(0);

	// t = 시작시간, b = 시작 값, c = 최종 값, d = 애니메이션 실행 기간
	function easeOutExpos(t, b, c, d) {
		return t === d ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
	}

	useEffect(() => {
		const duration = 2000; //실행하고자 하는 애니메이션 기간(밀리초)
		const startNum = 0; //변화될 값의 시작
		const tripChange = 700; //tripNum 최종 값
		const reviewChange = 100; //reviewNum 최종 값
		const planChange = 470; //planNum 최종 값
		let startTime;

		animate();

		function animate() {
			startTime = Date.now();
			moment();
		}

		function moment() {
			const elapsed = Date.now() - startTime;
			setTripNum(Math.ceil(easeOutExpos(elapsed, startNum, tripChange, duration)));
			setReviewNum(Math.ceil(easeOutExpos(elapsed, startNum, reviewChange, duration)));
			setPlanNum(Math.ceil(easeOutExpos(elapsed, startNum, planChange, duration)));
			if (elapsed < duration) {
				window.requestAnimationFrame(moment);
			}
		}
	}, []);

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
