import React from "react";
import RepositoryItem from "../RepositoryItem";
import { StyleTab, StyleTablist, StyleTabPanel, StyleTabs } from "./styled";

const Repositories = () => {
  return (
    <StyleTabs
      selectedTabClassName="is-selected"
      selectedTabPanelClassName="is-selected"
    >
      <StyleTablist>
        <StyleTab>Repositories</StyleTab>
        <StyleTab>Starred</StyleTab>
      </StyleTablist>

      <StyleTabPanel>
        <RepositoryItem
          name="afrianska-landing-page"
          linkToRepo="https://github.com/luanastephany/afrianska-landing-page"
          fullname="luanastephany/afrianska-landing-page"
        />
      </StyleTabPanel>

      <StyleTabPanel>
        <RepositoryItem
          name="animais-fantasticos"
          linkToRepo="https://github.com/luanastephany/animais-fantasticos"
          fullname="luanastephany/animais-fantasticos"
        />
      </StyleTabPanel>
    </StyleTabs>
  );
};

export default Repositories;
