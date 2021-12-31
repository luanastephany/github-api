import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import styled from "styled-components";

export const StyleTabs = styled(Tabs)`
  font-size: 16px;
  width: 1000px;
  margin-top: 16px;
`;

export const StyleTablist = styled(TabList)`
  display: flex;
  margin: 0;
  list-style-type: none;
  padding: 4px;
  gap: 10px;
`;
StyleTablist.tabsRole = "TabList";

export const StyleTab = styled(Tab)`
  border: none;
  padding: 8px;
  cursor: pointer;
  user-select: none;
  color: #fff;

  &.is-selected {
    border-bottom: 1px solid red;
  }
`;
StyleTab.tabsRole = "Tab";

export const StyleTabPanel = styled(TabPanel)`
  display: none;

  &.is-selected {
    display: block;
  }
`;
StyleTabPanel.tabsRole = "TabPanel";

export const WrapperList = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;
