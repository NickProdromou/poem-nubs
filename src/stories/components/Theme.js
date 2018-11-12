// @flow
import React from 'react';
import styled, { css } from 'styled-components';

import { type ColourScale, type ThemeColours } from '../../types/Theme';
import Text from '../../components/Text/Text';

const PalleteList = styled.div`
  display: flex;
`;

const PalleteContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Pallete = styled.div`
  ${({ theme: t, colour }) => css`
    background-color: ${colour};
    width: ${t.spacing.xxLarge};
    height: ${t.spacing.xxLarge};
  `};
`;

const ColourPalette = ({
  colourGroupName,
  colourList,
}: {
  colourGroupName: ThemeColours,
  colourList: ColourScale,
}) => (
  <React.Fragment>
    <Text weight="bold" font="body" size="ui" lineHeight="ui">
      {colourGroupName}
    </Text>
    <PalleteList>
      {Object.entries(colourList).map(([key, val]) => (
        <PalleteContainer>
          <Pallete colour={val} />
          <Text size="tiny">{key}</Text>
        </PalleteContainer>
      ))}
    </PalleteList>
  </React.Fragment>
);

export default ColourPalette;
