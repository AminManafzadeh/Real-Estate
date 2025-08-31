import React from "react";
import { ClipLoader } from "react-spinners";

function Loading({ loading, size = 25 }) {
  return (
    <ClipLoader
      color="#304ffe"
      loading={loading}
      size={size}
      cssOverride={{ margin: "auto" }}
    />
  );
}

export default Loading;
