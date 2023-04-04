import React, { useState } from "react";
import "./RespoPriceTags.css";
import CheckSvg from "./CheckSvg";
import { respoPriceData } from "./RespoPricedata";

function RespoPriceTags(props) {
  const [priceDatas] = useState(respoPriceData);
  return (
    <div className="RespoPriceTags">
      <div className="RespoTags">{/* <h1>Monthly </h1> */}</div>

      <div className="RespoPriceCategoryContainer">
        {priceDatas.map((price) => (
          <>
            <div className="RespoPriceCategoryItems">
              <div className="RespoPriceCategory RespoFreePrice">
                {price.tear === "Basic" ? (
                  <>
                    <div className="BestValueBannerContanier ">
                      <div className="BestValueBanner">
                        <h3>Best value</h3>
                      </div>
                    </div>
                  </>
                ) : null}
                <div className="RespoPriceCategoryMain">
                  <div className="RespoPriceCategoryTag">
                    <h1>{price.tear}</h1>
                  </div>
                  <div className="RespoPriceCategoryCategory">
                    <p>{price.description}</p>
                  </div>
                  <div className="RespoPriceCategoryPrice">
                    <div className="RespoPriceCategoryPriceMoney">
                      <h1 className="moneySign">
                        $ <span>USD</span>
                      </h1>
                      <h3 className="pricetag"> {price.price}</h3>
                    </div>
                    <div className="pricetagMonth"> /month</div>
                  </div>
                  <div className="RespoPriceCategoryCategoryButton">
                    <a
                      href={price.link}
                      onClick={() => window.open(`${price.link}`, "_parent")}
                    >
                      <button class="button-9" role="button">
                        {price.buttonTag}
                      </button>
                    </a>
                    <div className="RespoPriceCategoryCheckSvg">
                      <div className="RespoPriceCategoryCheck">
                        {price.plans.map((plan) => (
                          <>
                            <p className="checkadnCommnets">
                              <CheckSvg />
                              {plan}
                            </p>
                          </>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
      {/* <div className="RespoPriceCategoryCategoryButton">
        <div className="RespoBodyTopBodyButton">
          <img src={chromeImgicon} alt="chromeImgicon" />
          Add To browser
        </div>
      </div> */}
    </div>
  );
}

export default RespoPriceTags;
