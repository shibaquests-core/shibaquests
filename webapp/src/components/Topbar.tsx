import { FC } from "react";
import {
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import ShibaQuestsSrc from "../assets/logo.png";
import ShibaQuestsWhiteSrc from "../assets/logo-white.png";
import { Link } from "react-router-dom";
import { ActiveAccountInfo } from "./ActiveAccountInfo";
import { useAccount } from "wagmi";
import { WalletIcon } from "./WalletIcon";
import { modal } from "../web3Modal";

interface TopbarProps {
  className?: string;
  theme?: 'light' | 'dark';
}

export const Topbar: FC<TopbarProps> = ({ className, theme = 'light' }) => {
  const onConnectWalletClick = async () => {
    await modal.open();
  }
  const acc = useAccount();
  return (
    <header className={className}>
      <nav
        className="container mx-auto flex items-center justify-between py-6"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">ShibaQuests</span>
            <img className="h-8 w-auto" src={theme === 'light' ? ShibaQuestsSrc: ShibaQuestsWhiteSrc} alt="" />
          </Link>
        </div>
        <div className="flex lg:hidden">
        </div>

        <div className="px-2 pt-2 pb-3 space-y-1 hidden md:inline-flex">
          <a
            href="https://dorahacks.io/buidl/14285"
            target="_blank"
            className="hidden md:inline-flex items-center text-gray-700 bg-gray-100 border border-gray-300 rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-950"
            rel="noreferrer"
          >
            <span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-primary rounded-full">
              BETA
            </span>
            <span className="ml-4 text-sm">
              This project was developed for the 2024 ETHToronto & ETHWomen Hackathon
            </span>
            <ChevronRightIcon
              className="ml-2 w-5 h-5 text-gray-500"
              aria-hidden="true"
            />
          </a>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {acc.isConnected ? (
            <button className="btn btn-ghost normal-case" onClick={onConnectWalletClick}>
              <ActiveAccountInfo secondaryInfo="network" theme={theme} />
            </button>
          ): (
            <button
              className="btn btn-ghost"
              onClick={onConnectWalletClick}
            >
              <WalletIcon className="w-5 h-5" /> 
              Connect Wallet
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};
