import React from 'react';
import styled from 'styled-components'
import Container from './Container'

const PageWrapper = styled(Container)`
  min-height: calc(100vh - 64px);
  background: url(images/background.png);
  background-size: cover;
  background-position: top;
  width: 100%;
`

const PageContainer = styled.div`
  padding-top: 16px;
  padding-bottom: 16px;
  max-width: 992px;
  margin-left: auto;
  margin-right: auto;

  ${({ theme }) => theme.mediaQueries.sm} {
    padding-top: 24px;
    padding-bottom: 24px;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-top: 32px;
    padding-bottom: 32px;
  }
`;

const Page = ({ children }) => {

  return (
    <PageWrapper>
      <PageContainer>
        {children}
      </PageContainer>
    </PageWrapper>
  )
};

export { PageWrapper }
export default Page
