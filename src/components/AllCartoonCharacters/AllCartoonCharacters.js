import React, { useState, useEffect } from "react";
import CartoonCharacterNFTImage from "../CartoonCharacterNFTImage/CartoonCharacterNFTImage";
import CartoonCharacterNFTDetails from "../CartoonCharacterNFTDetails/CartoonCharacterNFTDetails";
import Loading from "../Loading/Loading";

const AllCartoonCharacters = ({
  cartoonCharacters,
  accountAddress,
  totalTokensMinted,
  changeTokenPrice,
  toggleForSale,
  buyCartoonCharacter,
}) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (cartoonCharacters.length !== 0) {
      if (cartoonCharacters[0].metaData !== undefined) {
        setLoading(loading);
      } else {
        setLoading(false);
      }
    }
  }, [cartoonCharacters]);

  return (
    <div>
      <div className="card mt-1">
        <div className="card-body align-items-center d-flex justify-content-center">
          <h5>
            Total No. of CartoonCharacter's Minted On The Platform :{" "}
            {totalTokensMinted}
          </h5>
        </div>
      </div>
      <div className="d-flex flex-wrap mb-2">
        {cartoonCharacters.map((cartoon) => {
          return (
            <div
              key={cartoon.tokenId.toNumber()}
              className="w-50 p-4 mt-1 border"
            >
              {!loading ? (
                <CartoonCharacterNFTImage
                  colors={
                    cartoon.metaData !== undefined
                      ? cartoon.metaData.metaData.colors
                      : ""
                  }
                />
              ) : (
                <Loading />
              )}
              <CartoonCharacterNFTDetails
                cartoon={cartoon}
                accountAddress={accountAddress}
                changeTokenPrice={changeTokenPrice}
                toggleForSale={toggleForSale}
                buyCartoonCharacter={buyCartoonCharacter}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllCartoonCharacters;
