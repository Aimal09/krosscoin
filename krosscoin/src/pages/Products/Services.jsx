import React from "react";
import { Link } from "react-router-dom";
import FullHeader from "../../components/Headers/FullHeader";

function Services() {
  return (
    <>
      <FullHeader />
      <div className="polygon-bg min-h-screen pt-[33px] pb-[38px] lg:pt-[92px] bg-primary">
        <div className="mx-auto px-2 md:px-4 lg:px-0 lg:w-[960px]">
          <div className="text-white flex flex-col gap-1">
            <span className="font-normal text-white/70">
              <Link to={"/products"}>Products/ </Link>
              <Link
                to={"/products/services"}
                className="text-white font-semibold"
              >
                Services
              </Link>
            </span>
            <h1 className="font-semibold">Services</h1>
          </div>
          <div className="mt-[32px] py-[28px] px-[21px] rounded-none bg-secondary/30 md:px-[70px] md:py-[50px] md:mt-[40px] md:rounded-[25px]">
            <p className="text-secondary-100">@KSSTippingBot</p>
            <ul className="mt-[20px] text-white">
              <li className="text-[24px] pb-[.1px] border-b border-b-white w-fit">
                <a
                  href="https://t.me/TurtleNetwork"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <p>Link to Telegram</p>
                </a>
              </li>
            </ul>
            <p className="text-white mt-[20px] block">
              KSSTippingBot tipping service for the Turtle Network Platform, on
              Telegram & Discord.
            </p>
            <p className="text-white mt-[20px] block">@KSSTippingBot details</p>
            <div className="mt-[20px] pt-[20px] border-t border-customGray">
              <p className="text-secondary-100">@KrossNodeBot</p>
              <ul className="mt-[20px] text-white">
                <li className="text-[24px] pb-[.1px] border-b border-b-white w-fit">
                  <a
                    href="https://t.me/TurtleNodeBot"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <p>Link to Telegram</p>
                  </a>
                </li>
              </ul>
              <p className="text-white mt-[20px] block">
                Notification service for the Kross Network & Waves Platform, on
                Telegram.
              </p>
              <p className="text-white mt-[20px] block">
                @KrossNodeBot details
              </p>
            </div>
            <div className="mt-[20px] pt-[20px] border-t border-customGray">
              <p className="text-secondary-100">BlackKrossNode on Waves</p>
              <p className="text-white mt-[20px] block">
                Node running on the Waves Platform <br /> <br />
                Lease to Alias: BlackKross on Waves Platform, receive 96% of
                rewards in WAVES, including a bonus of 6 KrossNetwork
                ($KSS)/block, distributed once per day and paid-out
                proportionally to staked amount of WAVES.
              </p>
            </div>
            <div className="mt-[20px] pt-[20px] border-t border-customGray">
              <p className="text-secondary-100">BlackKrossNode on West</p>
              <p className="text-white mt-[20px] block">
                Node running on the West Platform <br /> <br />
                Lease to Address:{" "}
                <code className="whitespace-pre-wrap break-words w-full">3Nu1tgCX228vvydfS9rhwfv6XXQoaaGWW5v</code> on WEST
                Platform, receive 90% of rewards in WEST, distributed once per
                week and paid-out proportionally, on Sundays, to staked amount
                of WEST.
              </p>
            </div>
            <div className="mt-[20px] pt-[20px] border-t border-customGray">
              <p className="text-secondary-100">
                BlackKrossNode on LTO Network
              </p>
              <p className="text-white mt-[20px] block">
                Node running on the LTO network <br /> <br />
                Lease to Address:{" "}
                <code className="whitespace-pre-wrap break-words w-full">3JsZN7TwprVdXr9CbQ9EUvLSBG2YSZgdPGB</code> on LTO network
                , receive 97, 5% of rewards in LTO, distributed once per week
                and paid-out proportionally, on Sundays, to staked amount of
                LTO.
              </p>
            </div>
            <div className="mt-[20px] pt-[20px] border-t border-customGray">
              <p className="text-secondary-100">Disclaimer</p>
              <div className="text-white mt-[20px] block">
                <p>KrossNetwork & Exchange Disclaimers</p> <br /> <br />
                <p>
                  <b>Exchange / DEX</b>: It’s important to understand that we
                  don’t have access to user funds, to user accounts or details.
                  We are not able to recover lost private keys. Using the
                  network built-in exchange is subject to the following
                  <a
                    href="https://docs.turtlenetwork.eu/files/placeholder.pdf"
                    target={"_blank"}
                    rel="noreferrer"
                    className="capitalize inline-block ml-2 underline"
                  >
                    disclaimer.
                  </a>
                </p>
                <br />
                <p>
                  <b>KrossNetwork ($KSS) Coin</b>: $KSS is not an investment
                  instrument, having $KSS doesn’t give you rights on some sort
                  of fixed profit sharing, some kind of promised returns or
                  anything in this regard. The sole use case of $KSS is as
                  utility token within Kross Network. All services offered by
                  Kross Network are subject to the following
                  <a
                    href="https://docs.turtlenetwork.eu/files/placeholder.pdf"
                    target={"_blank"}
                    rel="noreferrer"
                    className="capitalize inline-block ml-2 underline"
                  >
                    disclaimer.
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[1350px] right-[10px] polygon-bg opacity-60 inline-block h-[389px] w-[447px]"></div>
      </div>
    </>
  );
}

export default Services;
