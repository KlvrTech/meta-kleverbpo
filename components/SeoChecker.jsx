import React from "react";
import { TypingText } from "./CustomTexts";

const SeoChecker = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <form
        className="max-w-md -mt-12 mx-auto sm:mt-12 ml-6 mb-16 mr-6"
        action="https://api.web3forms.com/submit"
        method="POST"
      >
        <input
          type="hidden"
          name="access_key"
          value="f62be8e1-f88d-4b66-8be8-3ab6491c9028"
        />
        <TypingText title="Free Web Analysis" textStyles="text-center" />
        <p className="mt-[8px] font-normal sm:text-[16px] text-[16px] text-left text-secondary-white">
          Ask DMA to create a comprehensive and aggressive digital marketing
          plan taking your business to new heights.
        </p>
        <div>
          <label name="url" className="leading-7 text-sm text-white">
            Website
          </label>

          <input
            type="text"
            required
            id="message"
            name="message"
            placeholder="www.example.com"
            className="w-full bg-[#323F5D] bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white focus:text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div>
          <label name="Email" className="leading-7 text-sm text-white">
            Email
          </label>
          <div className="flex flex-row">
            <input
              required
              id="email"
              name="email"
              placeholder="john@rhcp.com"
              className="w-full bg-[#323F5D] bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white focus:text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            <div className=" ml-2 w-1/2">
              <input
                type="hidden"
                name="redirect"
                value="https://web3forms.com/success"
              />

              <button
                type="submit"
                className="flex mx-auto text-white bg-purple-700 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </form>
      <div className="flex flex-row -mt-12 mb-12 sm:hidden">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-phone-call"
            width={20}
            height={20}
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#be83fa"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <path d="M4 4h5l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v5a1 1 0 0 1 -1 1a16 16 0 0 1 -16 -16a1 1 0 0 1 1 -1" />
            <path d="M15 7a2 2 0 0 1 2 2" />
            <path d="M15 3a6 6 0 0 1 6 6" />
          </svg>
        </div>
        <a
          href="tel:+(973) 444-2767"
          className="pl-4 leading-normal text-white hover:text-purple-400"
        >
          (973) 444-2767
        </a>
      </div>
    </div>
  );
};

export default SeoChecker;
