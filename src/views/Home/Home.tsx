import React from 'react'
import styled from 'styled-components'
import { Heading, BaseLayout } from '@pancakeswap-libs/uikit'
import CardNav from 'components/CardNav'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import FarmStakingCard from './components/FarmStakingCard'
import CakeStats from './components/CakeStats'
import TotalValueLockedCard from './components/TotalValueLockedCard'
import Divider from './components/Divider'

const Hero = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.colors.primary};
  display: grid;
  grid-gap: 32px;
  grid-template-columns: 1fr;
  margin-left: auto;
  margin-right: auto;
  max-width: 250px;
  padding: 48px 0;
  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    font-size: 16px;
    li {
      margin-bottom: 4px;
    }
  }
  img {
    height: auto;
    max-width: 100%;
  }
  @media (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
    margin: 0;
    max-width: none;
  }
    background-image: url('/images/safefarm-banner.png');
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-top: 116px;
    text-align: center;
    background-repeat: no-repeat;
    background-size: 100% auto;
    padding-bottom: 116px;
  
  
`

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 48px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

const ColumFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between
`

const HeadImage = styled.img`
  width: 100%;
`;

const Home: React.FC = () => {
  const TranslateString = useI18n()

  return (
    <Page>
      <HeadImage src='images/safefarm-graphic.png' alt='' />
      {/* <Hero>
        <div>
          <Heading as="h1" size="xxl" mb="16px">
          </Heading>
        </div>
      </Hero> */}
      <Center>
        <CardNav />
      </Center>
      <Divider />
      <div>
        <Cards>
          <FarmStakingCard />
          <ColumFlexContainer>
            <CakeStats />
            <TotalValueLockedCard />
          </ColumFlexContainer>
        </Cards>
      </div>
    </Page>
  )
}

export default Home
