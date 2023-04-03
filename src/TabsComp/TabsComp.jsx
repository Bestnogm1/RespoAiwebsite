import "./TabsComp.css";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React from "react";
import TwitterTap from "./TwitterTap/TwitterTap";
import RedditTab from "./RedditTab/RedditTab";
import LinkedinTap from "./LinkedinTap/LinkedinTap";
function TabsComp(props) {
  return (
    <Tabs isManual variant="enclosed" colorScheme="green" className="TabsComp">
      <TabList className="TabsList">
        <Tab className="button-48">
          <span>Twitter</span>
        </Tab>
        <Tab className="button-48">
          <span>Reddit</span>
        </Tab>
        <Tab className="button-48">
          <span>Linkedin</span>
        </Tab>
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
