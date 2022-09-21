import React from 'react';
import TransparentContainer from '../TransparentContainer/TransparentContainer';
import CircleAnimation from '../CircleAnimation/CircleAnimation';
import styled from 'styled-components';
import { myObjects } from '../../data/TextData';
import useWindowDimensions from '../../hooks/useWindowDimensions';

function Stats() {
  const { height, width } = useWindowDimensions();

  const SmallCircle = {
    size: 270,
    strokeWidth: 35,
    fontSize: 55,
  };

  const BigCircle = {
    size: 470,
    strokeWidth: 55,
    fontSize: 80,
  };

  const MediumCircle = {
    size: 330,
    strokeWidth: 45,
    fontSize: 65,
  };

  function useCirce() {
    if (width < 1250 && width > 800) {
      return BigCircle;
    } else if (width < 800) {
      return MediumCircle;
    } else return SmallCircle;
  }

  return (
    <TransparentContainer title={myObjects.stats.title} id="statics">
      <Wrapper>
        <CircleAnimation
          size={useCirce().size}
          strokeWidth={useCirce().strokeWidth}
          fontSize={useCirce().fontSize}
          percentage={90}
          color="yellow"
        >
          {' '}
          Zaniżonych <br /> odszkodowań{' '}
        </CircleAnimation>{' '}
        <CircleAnimation
          size={useCirce().size}
          strokeWidth={useCirce().strokeWidth}
          fontSize={useCirce().fontSize}
          percentage={90}
          color="yellow"
        >
          {' '}
          Zanizonych <br /> odszkodowań{' '}
        </CircleAnimation>{' '}
        <CircleAnimation
          size={useCirce().size}
          strokeWidth={useCirce().strokeWidth}
          fontSize={useCirce().fontSize}
          percentage={90}
          color="yellow"
        >
          {' '}
          Zanizonych <br /> odszkodowań{' '}
        </CircleAnimation>{' '}
      </Wrapper>
    </TransparentContainer>
  );
}

export default Stats;

const Wrapper = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: space-around;
  @media screen and (max-width: 1250px) {
    flex-direction: column;
  }
`;
