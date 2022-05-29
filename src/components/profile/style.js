import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 40px;
  margin-bottom: 40px;
  flex-wrap: wrap;
  
  h1 {
    font-weight: 900;
  }
`;

export const WrapperInfoUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 15px;

  h3 {
    display: inline;
  }
`;

export const WrapperStatusCounter = styled.div`
  display: flex;
  align-items: flex-start;

  div {
    margin-right: 16px;
    text-align: center;
  }
`;

export const WrapperUserName = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  
  h3 {
    margin-right: 8px;
    display: inline;
  }
`;

export const WrapperImage= styled.img`
  border-radius: 50%;
  width: 200px;
  height: 200px;
  margin: 8px 30px 8px 0;
`;