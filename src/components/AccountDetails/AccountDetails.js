import React from "react";
import "../../bootstrap.min.css"

const AccountDetails = ({ accountAddress, accountBalance }) => {
  return (
    <div>
      <div className="jumbotron">
        <h1 className="display-5">CartoonCharacter NFT Marketplace</h1>
        <p className="lead">
          This is an NFT marketplace where you can mint ERC721 implemented{" "}
          <i>Cartoon Character NFTs</i> and manage them.
        </p>
        <hr className="my-4" />
        <p className="lead">Account address :</p>
        <h4>{accountAddress}</h4>
        <p className="lead">Account balance :</p>
        <h4>{accountBalance} Ξ</h4>
      </div>
    </div>
  );
};

export default AccountDetails;
