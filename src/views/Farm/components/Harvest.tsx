import React from 'react';
import styled from 'styled-components';

import { Contract } from 'ethers';

import Button from '../../../components/Button';
import Card from '../../../components/Card';
import CardContent from '../../../components/CardContent';
import CardIcon from '../../../components/CardIcon';
import Label from '../../../components/Label';
import Value from '../../../components/Value';

import useEarnings from '../../../hooks/useEarnings';
import useHarvest from '../../../hooks/useHarvest';

import { getDisplayBalance } from '../../../utils/formatBalance';
import TokenSymbol from '../../../components/TokenSymbol';
import { Farm } from '../../../wsb';

interface HarvestProps {
  farm: Farm;
}

const Harvest: React.FC<HarvestProps> = ({ farm }) => {
  const earnings = useEarnings(farm.contract);
  const { onReward } = useHarvest(farm);
  console.log('farm.earnToken.symbol :>> ', farm.earnToken.symbol);

  const tokenName = farm.earnTokenName === 'VDS' ? 'Share' : 'Dollar';
  return (
    <Card>
      <CardContent>
        <StyledCardContentInner>
          <StyledCardHeader>
            <CardIcon>
              <TokenSymbol symbol={farm.earnToken.symbol} />
            </CardIcon>
            <Value value={getDisplayBalance(earnings)} />
            <Label text="WSB Earned" />
          </StyledCardHeader>
          <StyledCardActions>
            <Button onClick={onReward} disabled={earnings.eq(0)} text="Settle"  />
          </StyledCardActions>
        </StyledCardContentInner>
      </CardContent>
    </Card>
  );
};

const StyledCardHeader = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;
const StyledCardActions = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${(props) => props.theme.spacing[6]}px;
  width: 100%;
`;

const StyledSpacer = styled.div`
  height: ${(props) => props.theme.spacing[4]}px;
  width: ${(props) => props.theme.spacing[4]}px;
`;

const StyledCardContentInner = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`;

export default Harvest;
