import "./TabsComp.css";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React from "react";
import TwitterTap from "./TwitterTap/TwitterTap";
import RedditTab from "./RedditTab/RedditTab";
import LinkedinTap from "./LinkedinTap/LinkedinTap";
function TabsComp(props) {
  return (
    <Tabs variant="soft-rounded" colorScheme="green" className="TabsComp">
      <TabList className="TabsList">
        <Tab className="TabsListButtons">Twitter</Tab>
        <Tab className="TabsListButtons">Reddit</Tab>
        <Tab className="TabsListButtons">Linkedin</Tab>
      </TabList>
      <TabPanels className="TabsListTabPanels">
        <TabPanel>
          <TwitterTap />
        </TabPanel>
        <TabPanel>
          <RedditTab />
        </TabPanel>
        <TabPanel>
          <LinkedinTap />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default TabsComp;

// npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion
