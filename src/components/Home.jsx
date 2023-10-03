import Card from "./Card";
import Grid from "./Grid";
import Container from "./Container";
import SearchBar from "./SearchBar";

import React from "react";
import { useState } from "react";
import { fetchHeros } from "../libs/utils";

const IMG_FANTASTIC = "portrait_fantastic";

export default function Home() {
  const [heroes, setHeroes] = useState([]);
  const [error, setError] = useState();

  let cards;

  const handleClick = async (e, args) => {
    e.preventDefault();
    if (args === "") return;

    try {
      return await fetchHeros(args);
    } catch (err) {
      return err;
    }
  };

  if (heroes) {
    cards = heroes.map((hero) => (
      <Card
        name={hero.name}
        key={hero.id}
        id={hero.id}
        thumbnail={`${hero.thumbnail.path}/${IMG_FANTASTIC}.${hero.thumbnail.extension}`}
      />
    ));
  }

  return (
    <Container>
      <div className="title">
        <h1>Developer Marvel API</h1>
      </div>
      <SearchBar
        handleClick={handleClick}
        setHeroes={setHeroes}
        setError={setError}
      />
      <h2>Results</h2>
      <Grid>{cards ? cards : null}</Grid>
    </Container>
  );
}
