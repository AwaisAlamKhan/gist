import React, { FC } from "react";
import Header from "../components/header/Header";
import GistList from "../components/gistList/GistList";
import Grid from '@mui/material/Grid';

const Home: FC<{}> = ({ }) => {
  return (
    <>
      <Header />
      <GistList />
    </>
  );
};

export default Home;
