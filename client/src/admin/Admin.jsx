import { React, useState } from "react";
import { useSelector, useDispatch } from "react-redux"; // Добавьте useDispatch
import { adminLogin,loadArticles,loadCategories } from "../redux/actions";
import styles from "./styles.module.css";

import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab from "@mui/joy/Tab";
import TabPanel from "@mui/joy/TabPanel";
import ArticleTable from "./ArticleTable/ArticleTable";
import AddArticle from "./AdminArticle/AddArticle";
import Categories from "./Categories/Categories";
import { Box } from "@mui/joy";

export default function Admin() {
  const admin = useSelector((state) => state.admin);
  const articles = useSelector((state) => state.articles);
  const categories = useSelector((state) => state.categories);

  // Состояние для хранения данных формы
  const [user, setUser] = useState({
    username: "",
    password: "",
  });



  const dispatch = useDispatch(); // Используйте useDispatch для доступа к диспетчеру

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const adminVer = () => {
    // Используйте dispatch, чтобы отправить действие в Redux
    dispatch(adminLogin(user));
    dispatch(loadArticles());
    dispatch(loadCategories());
  };

  return admin ? (
    <Box>
      <Box className={styles.Title}>Admin Panel</Box>
      <Tabs aria-label="Basic tabs" defaultValue={0}>
        <TabList>
          <Tab>Change Articles</Tab>
          <Tab>Add Article</Tab>
          <Tab>Categories</Tab>
        </TabList>
        <TabPanel value={0}>
          <ArticleTable articles={articles} />
        </TabPanel>
        <TabPanel value={1}>
          <AddArticle article={{ name: "add", price: 0, amount: 0 }} categories={categories}></AddArticle>
        </TabPanel>
        <TabPanel value={2}>
          <Categories categories={categories}></Categories>
        </TabPanel>
      </Tabs>
    </Box>
  ) : (
    <Box className={styles.loginFormContainer}>
    <Box className={styles.loginForm}>
      <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={user.username}
          onChange={handleInputChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={user.password}
          onChange={handleInputChange}
        />
        <input
          type="submit"
          value={"Login"}
          onClick={adminVer}
        />
    </Box>
    </Box>
  );
}
