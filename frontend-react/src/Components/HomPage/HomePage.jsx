import React, { useState } from "react";
import Layout from "../../layout/Layout";
import { fetchAllArticles } from "../controller/requestController";

export default function HomePage() {
  const [articleData, setArticleData] = useState();

  const asyncFetching = async () => {
    setArticleData(await fetchAllArticles());
  };
  asyncFetching();
  //console.log(articleData);

  return (
    <>
      <h1>Home Page</h1>
    </>
  );
}
