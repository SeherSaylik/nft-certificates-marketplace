import React, { useState, useEffect } from "react";
import CartoonCharacterNFTImage from "../CartoonCharacterNFTImage/CartoonCharacterNFTImage";
import MyCartoonCharacterNFTDetails from "../MyCartoonCharacterNFTDetails/MyCartoonCharacterNFTDetails";
import Loading from "../Loading/Loading";
import "../../bootstrap.min.css"

const MyCartoonCharacters = ({
  accountAddress,
  cartoonCharacters,
  totalTokensOwnedByAccount,
}) => {
  const [loading, setLoading] = useState(false);
  const [myCartoonCharacters, setMyCartoonCharacters] = useState([]);

  useEffect(() => {
    if (cartoonCharacters.length !== 0) {
      if (cartoonCharacters[0].metaData !== undefined) {
        setLoading(loading);
      } else {
        setLoading(false);
      }
    }
    const my_cartoon_characters = cartoonCharacters.filter(
      (cartoon) => cartoon.currentOwner === accountAddress
    );
    setMyCartoonCharacters(my_cartoon_characters);
  }, [cartoonCharacters]);

  return (
    <div>
      <div className="card mt-1">
        <div className="card-body align-items-center d-flex justify-content-center">
          <h5>
            Total No. of CartoonCharacter's You Own : {totalTokensOwnedByAccount}
          </h5>
        </div>
      </div>
      <div className="d-flex flex-wrap mb-2">
        {myCartoonCharacters.map((cartoon) => {
          return (
            <div
              key={cartoon.tokenId.toNumber()}
              className="w-50 p-4 mt-1 border"
            >
              <div className="row">
                <div className="col-md-6">
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
                </div>
                <div className="col-md-6 text-center">
                  <MyCartoonCharacterNFTDetails
                    cartoon={cartoon}
                    accountAddress={accountAddress}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyCartoonCharacters;
