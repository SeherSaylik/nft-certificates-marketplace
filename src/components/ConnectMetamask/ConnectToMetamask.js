import React from "react";
import metamaskIcon from "./metamask.png";
import "../../bootstrap.min.css"


const ConnectToMetamask = ({ connectToMetamask }) => {
  return (
    <div className="jumbotron">
      <h1 className="display-5">
        Cartoon Character NFT Marketplace
      </h1>
      <p className="lead">
        This is an NFT marketplace where you can mint your ERC721 implemented{" "}
        <i>Cartoon Character NFTs</i> and manage them.
      </p>
      <hr className="my-4" />
      <button
        onClick={connectToMetamask}
        className="btn btn-primary d-flex align-items-center"
        style={{ fontSize: "0.9rem", letterSpacing: "0.14rem" }}
      >
        Connect Metamask{" "}
        <img
          src={metamaskIcon}
          alt="metamask-icon"
          style={{ width: "2rem", marginLeft: "0.5rem" }}
        />
      </button>
    </div>
  );
};

export default ConnectToMetamask;
