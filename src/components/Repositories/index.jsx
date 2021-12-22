import React from "react";
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

      <StyleTabPanel>panel repositories</StyleTabPanel>
      <StyleTabPanel>panel Starred</StyleTabPanel>
    </StyleTabs>
  );
};

export default Repositories;
