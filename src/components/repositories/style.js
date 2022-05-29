import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import styled from 'styled-components';

export const WrapperTab = styled(Tab)`
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  padding: 10px;
  border: 1px solid #888;
  cursor: pointer;
  user-select: none;
  background-color: white;
  overflow: hidden;

  &:focus {
      outline: none;
  }

  &.is-selected {
      border-bottom: 1px solid white;
  }
`;

export const WrapperTabs = styled(Tabs)`
  width: 50%;
`;

export const WrapperTabList = styled(TabList)`
  display: flex;
`;

WrapperTabList.tabsRole = 'TabList';

export const WrapperTabPanel = styled(TabPanel)`
    display: none;
    min-height: 40vh;
    min-width: 90vw;
    padding: 8px;
    margin-top: -1px;
    border: 1px solid #888;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;

    &.is-selected {
        display: block;
    }
`;

WrapperTabPanel.tabsRole = 'TabPanel';


