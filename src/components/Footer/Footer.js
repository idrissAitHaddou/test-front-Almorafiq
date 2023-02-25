import React from "react";
import styles from "./Footer.module.css";
import fb from "../../assets/icons/fb.png";
import tw from "../../assets/icons/tw.png";

const Footer = () => {
  return (
    <div className="w-full mt-28" style={styles}>
      <div className="bg-footerBg bg-opacity-50 p-6">
        <div className="w-11/12 flex flex-col  md:flex-row justify-between items-center mx-auto">
          <div className="flex flex-col gap-4">
            <h1 className="text-footertxt font-bold md:text-left text-center">
              SUBSCRIBE
            </h1>
            <div className="text-footertxt md:text-left text-center">
              Exciting things ahead,<br></br> stay tuned for more information.
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <form className="flex gap-y-4">
                  <input
                    placeholder="Enter Your Email Adress"
                    className="w-96 placeholder-footertxt text-footertxt border-2 border-footertxt px-4 py-2 bg-footerBg bg-opacity-40 focus:outline-none md700:w-60"
                  />
                  <button
                    type="button"
                    className="xxl:w-[6rem] px-6 py-2 bg-tertiary border-2 border-footertxt text-footertxt font-extrabold"
                  >
                    OK
                  </button>
                </form>
              </div>
              <div className="flex items-center gap-2 xxl:hidden">
                <div className="">
                  <label>
                    <input type="checkbox" />
                    <span></span>
                  </label>
                </div>
                <h1 className="text-footertxt">
                  I agree to receive news and updates
                </h1>
              </div>
            </div>
          </div>
          <div className="self-start">
            <div>
              <h1 className="text-footertxt font-bold md:text-left text-center mt-6 md:mt-0">
                FIND YOUR WAY
              </h1>
            </div>
            <div className="flex gap-x-16 mt-8 text-footertxt">
              <div className="flex flex-col gap-2">
                <div>Home</div>
                <div>What is BIZONE?</div>
                <div>More About BizOne!</div>
              </div>
              <div className="flex flex-col gap-2">
                <div>BizOne ++</div>
                <div>BizOne Today</div>
                <div>Help !</div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div className="w-11/12 mx-auto h-0.5 bg-footertxt mt-16 mb-4"></div>
        </div>
        <div className="flex justify-around text-footertxt">
          <div className="flex md:flex-row flex-col">
            <div className="text-xs md:text-sm">
              ©Proudly Created With <span className="font-bold">test.com.</span>{" "}
              Designed by<span className="font-bold">TEST</span>
            </div>
            <div className="text-xs md:text-sm mt-2 md:mt-0">test@test.com</div>
          </div>
          <div className="flex gap-3 xxl:hidden">
            <div className="w-5 h-5">
              <img src={fb} alt="fb" className="w-full h-full" />
            </div>
            <div className="w-6 h-6">
              <img src={tw} alt="tw" className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
