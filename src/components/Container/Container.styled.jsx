import styled from '@emotion/styled';

export const ContainerMain = styled.div`
  max-width: 320px;
  //margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;

  @media screen and (min-width: 768px) {
    width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding-left: 32px;
    padding-right: 32px;
  }
`;
