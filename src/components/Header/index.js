import React, { useState } from "react";
import useGithub from "../../hooks/github-hooks";
import { Wrapper } from "./styled";

const Header = () => {
  const { getUser } = useGithub();
  const [usernameForSearch, setUsernameForSearch] = useState(undefined);

  const submitGetUser = () => {
    if (!usernameForSearch) return;
    return getUser(usernameForSearch);
  };

  return (
    <Wrapper>
      <header>
        <input
          type="text"
          placeholder="Digite o username"
          onChange={(event) => setUsernameForSearch(event.target.value)}
        />
        <button type="submit" onClick={submitGetUser}>
          <span>Buscar</span>
        </button>
      </header>
    </Wrapper>
  );
};

export default Header;
