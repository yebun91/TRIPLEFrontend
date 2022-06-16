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
  const [intervalNum, setIntervalNum] = useState(2);

  // function easeOutExpo(easeNum) {
  //   return easeNum === 1 ? 1 : 1 - Math.pow(2, -10 * easeNum);
  // }

  function easeOutQuint(t, b, c, d) {
    return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
  }

  let time = 0;
  setTimeout(() => {
    setTripNum(Math.ceil(easeOutQuint(time, tripNum, 10, intervalNum)));
    if (tripNum >= 700) {
      time = 0;
    }
  }, time);

  // t = 시간 - 애니메이션 시작 이후 경과한 시간입니다. 일반적으로 0에서 시작하고 게임 루프 또는 기타 업데이트 기능을 사용하여 천천히 증가합니다.
  // b = 시작 값 - 애니메이션의 시작 지점입니다. 일반적으로 정적 값입니다. 예를 들어 0에서 시작할 수 있습니다.
  // c = 값 의 변화 - 시작점에서 끝점까지 이동하는 데 필요한 변화량. 또한 일반적으로 정적 값입니다.
  // d = Duration - 애니메이션에 소요되는 시간입니다. 일반적으로 정적 값도 있습니다.

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
