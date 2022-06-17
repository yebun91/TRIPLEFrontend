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
  .upAnimation {
  }
`;

const MainContents = () => {
  const [tripNum, setTripNum] = useState(0);
  const [reviewNum, setReviewNum] = useState(0);
  const [planNum, setPlanNum] = useState(0);
  const [intervalNum, setIntervalNum] = useState(1);

  const target = 700;

  function easeOutExpo(x) {
    return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
  }

  useEffect(() => {
    const animationDuration = 2000;
    const frameDuration = 2000 / 60;
    const totalFrames = Math.round(animationDuration / frameDuration);
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = easeOutExpo(frame / totalFrames);
      const currentCount = Math.round(target * progress);

      if (target >= currentCount) {
        setTripNum(currentCount);
      }

      if (frame === totalFrames) {
        clearInterval(counter);
      }
    }, frameDuration);
  }, [target]);

  // const numInterval = setTimeout(() => {
  //   setTripNum(Math.round(easeOutExpo(intervalNum, 0, 700, 200)));
  //   setReviewNum(Math.round(easeOutExpo(intervalNum, 0, 100, 200)));
  //   setPlanNum(Math.round(easeOutExpo(intervalNum, 0, 470, 200)));
  //   setIntervalNum((prv) => prv * 1.1);
  // }, intervalNum);

  // if (tripNum >= 700) {
  //   clearInterval(numInterval);
  // }

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
