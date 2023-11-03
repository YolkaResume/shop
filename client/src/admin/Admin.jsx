import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adminLogin, loadArticles } from "../redux/actions";
import styles from "./styles.module.css";

import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab from "@mui/joy/Tab";
import TabPanel from "@mui/joy/TabPanel";
import ArticleTable from "./ArticleTable/ArticleTable";
import AddArticle from "./AdminArticle/AddArticle";

export default function Admin() {
  const admin = useSelector((state) => state.admin);
  const articles = useSelector((state) => state.articles);
  const dispatch = useDispatch();

  // Move the login function call to the useEffect hook
  useEffect(() => {
    if (!admin) {
      // Only call login if the admin is not logged in
      dispatch(adminLogin());
    }
    dispatch(loadArticles());
  }, [dispatch, admin]);

  return admin ? (
    <div>
      <div className={styles.Title}>Admin Panel</div>
      <Tabs aria-label="Basic tabs" defaultValue={0}>
        <TabList>
          <Tab>Articles</Tab>
          <Tab>Second tab</Tab>
          <Tab>Third tab</Tab>
        </TabList>
        <TabPanel value={0}>
          <ArticleTable articles={articles} />
        </TabPanel>
        <TabPanel value={1}>
          <AddArticle article={{name:"add",price:0,amount:0}}></AddArticle>
        </TabPanel>
        <TabPanel value={2}>
          <b>Third</b> tab panel
        </TabPanel>
      </Tabs>
    </div>
  ) : (
    <div>Login</div>
  );
}
