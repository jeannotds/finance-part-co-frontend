import React from "react";
import Image from 'next/image';
import loader from "../src/img/loading.gif";

function Loader() {
  return (
    <div className="loaderpage">
      <div className="loading">
        <Image src={loader} alt="loader" className="loading__image" />
      </div>
    </div>
  );
}

export default Loader;
