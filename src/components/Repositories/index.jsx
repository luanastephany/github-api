import React, { useEffect, useState } from "react";
import useGithub from "../../hooks/github-hooks";
import RepositoryItem from "../RepositoryItem";
import {
  StyleTab,
  StyleTablist,
  StyleTabPanel,
  StyleTabs,
  WrapperList,
} from "./styled";

const Repositories = () => {
  const { githubState, getUserRepos, getUserStarred } = useGithub();
  const [hasUserForSearchrepos, setHasUserForSearchrepos] = useState(false);

  useEffect(() => {
    if (githubState.user.login) {
      getUserRepos(githubState.user.login);
      getUserStarred(githubState.user.login);
    }
    setHasUserForSearchrepos(githubState.repositories);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [githubState.user.login]);

  return (
    <>
      {hasUserForSearchrepos ? (
        <StyleTabs
          selectedTabClassName="is-selected"
          selectedTabPanelClassName="is-selected"
        >
          <StyleTablist>
            <StyleTab>Repositories</StyleTab>
            <StyleTab>Starred</StyleTab>
          </StyleTablist>

          <StyleTabPanel>
            <WrapperList>
              {githubState.repositories.map((item) => (
                <RepositoryItem
                  key={item.id}
                  name={item.name}
                  linkToRepo={item.full_name}
                  fullname={item.full_name}
                />
              ))}
            </WrapperList>
          </StyleTabPanel>

          <StyleTabPanel>
            <WrapperList>
              {githubState.starred.map((item) => (
                <RepositoryItem
                  key={item.id}
                  name={item.name}
                  linkToRepo={item.html_url}
                  fullname={item.full_name}
                />
              ))}
            </WrapperList>
          </StyleTabPanel>
        </StyleTabs>
      ) : (
        <></>
      )}
    </>
  );
};

export default Repositories;
