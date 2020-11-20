import React from "react";

import useStyles from "./Home.styles";

const Home = () => {
  const classes = useStyles();

  return <section className={classes.homeRoot} />;
};

export default Home;
