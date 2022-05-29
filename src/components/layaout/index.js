import React from 'react'
import useGitHub from '../../hooks/github-hooks';
import Header from '../header'
import * as Styled from './style'

function Layaout({children}) {
  const { github } = useGitHub();
  
  return (
    <Styled.WrapperLayaout>
        <Header />
        {github.hasUser ? (
          <>{children}</>
        ): (
          <h3>Nenhum usuário pesquisado</h3>
        )}
    </Styled.WrapperLayaout>
  )
}

export default Layaout