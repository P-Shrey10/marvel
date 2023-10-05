import Button from "./Button";
import { React, useRef } from "react";

export default function SearchBar({ handleClick, setHeroes, setError }) {
  let input = useRef();
  return (
    <form>
      <input type="text" placeholder="Search Hero..." ref={input} />
      <Button
        text={"Search"}
        handleClick={(e) => {
          handleClick(e, input.current.value)
            .then((data) => setHeroes(data.data.results))
            .catch((err) => setError(err));
        }}
      />
    </form>
  );
}
