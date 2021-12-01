import React from "react";
import loadingGIF from "./loading.gif";
import "../../bootstrap.min.css"

const Loading = () => {
  return <img src={loadingGIF} alt="Loading.." className="d-block m-auto" />;
};

export default Loading;
