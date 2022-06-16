import { React } from 'react';
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
  return (
    <Main>
      <MainImage />
      <MainTitle>
        <MainContents />
        <MainReward />
      </MainTitle>
    </Main>
  );
}

export default App;
