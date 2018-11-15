// @flow
import React from 'react';
import styled, { css } from 'styled-components';
import { Flex, Box } from '@rebass/grid';

import {
  type ColourScale,
  type ThemeColours,
  type ThemeSpacing,
} from '../../../src/types/theme';
import Text from '../../../src/components/text/text';
import Wrapper from '../../../src/components/wrapper/wrapper';

export const ColourPalette = ({
  colourGroupName,
  colourList,
}: {
  colourGroupName: ThemeColours,
  colourList: ColourScale,
}) => {
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

  return (
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
};

export const SpacingList = ({ spacing }: { spacing: ThemeSpacing }) => {
  const Space = styled.div`
    ${({ theme, space }) => css`
      margin-right: ${theme.spacing.large};

      background: ${theme.colours.primary.light};
      padding: ${space};
      width: 75px;

      &:after {
        content: '';
        display: block;
        padding-top: 100%;
        background: ${theme.colours.primary.dark};
      }
    `};
  `;

  return (
    <Wrapper constrain>
      <Flex
        flexWrap="wrap"
        flexDirection="row"
        alignItems="center"
        justifyContent="spaceBetween"
      >
        {Object.entries(spacing).map(([k, v]) => (
          <Box>
            <Space space={v} />
            <Text colour={{ type: 'neutral', shade: 'dark' }} size="detail">
              {k}
            </Text>
          </Box>
        ))}
      </Flex>
    </Wrapper>
  );
};
