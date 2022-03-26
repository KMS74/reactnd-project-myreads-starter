import React from "react";
import { Link } from "react-router-dom";

function ArrowBack(props) {
  const { onReset } = props;

  return (
    <Link to="/">
      <button className="close-search" onClick={onReset}>
        close
      </button>
    </Link>
  );
}

export default ArrowBack;
