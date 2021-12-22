import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import styled from "styled-components";

export const StyleTabs = styled(Tabs)`
  font-size: 16px;
  width: 100%;
  margin-top: 16px;
`

export const StyleTablist = styled(TabList)`
  display: flex;
  margin: 0;
  list-style-type: none;
  padding: 4px;
  gap: 10px;
`
StyleTablist.tabsRole = "TabList";

export const StyleTab = styled(Tab)`
  border-radius: 16px;
  border: 1px solid #ccc;
  padding: 8px;
  cursor: pointer;
  user-select: none;

  &.is-selected {
    border: 1px solid #055c66;
  }
`
StyleTab.tabsRole = "Tab";

export const StyleTabPanel = styled(TabPanel)`
  padding: 8px;
  border: 1px solid #ccc;
  box-shadow: 0 0 0.3em rgba(0, 0, 0, 0.3);
  display: none;

  &.is-selected {
    display: block;
  }
`
StyleTabPanel.tabsRole = "TabPanel";
