import React, { useState } from "react";
import useGitHub from "../../hooks/github-hooks";
import * as Styled from "./style";

function Header() {
  const { getUser } = useGitHub();
  const [usernameForSearch, setusernameForSearch] = useState(undefined);

  const submitGetUser = () => {
      if(!usernameForSearch) return;
      return getUser(usernameForSearch);
  }

  return (
    <header>
      <Styled.Wrapper>
        <input type="text" placeholder="Digite o nome do usuário" onChange={(e) => setusernameForSearch(e.target.value)}/>
        <button type="submit" onClick={submitGetUser}>Buscar</button>
      </Styled.Wrapper>
    </header>
  );
}

export default Header;
