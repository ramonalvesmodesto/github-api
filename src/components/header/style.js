import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;

  input {
      width: 100%;
      height: 40px;
      padding: 4px;
      padding-left: 15px;
      border-radius: 5px;
      border: 1px solid #888;
      outline: none;
  }

  button {
      width: 100px;
      background-color: #3498DB;
      color: white;
      border: none;
      border-radius: 5px;
      font-weight: bolder;
      margin-left: 10px;
      cursor: pointer;

      &:hover {
        background-color: #5DADE2;
      }
  }
`;
