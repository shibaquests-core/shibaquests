import { FC } from 'react'
import { HeroSection as HeroSectionComp } from '../../../components/website/HeroSection';
import { Link } from 'react-router-dom';

import LogoSrc from '../../../assets/logo.png';
import AppScreenshot1 from '../../../assets/app-screenshot-1.png';

export interface HeroSectionProps { }

export const HeroSection: FC<HeroSectionProps> = () => {
  return (
    <HeroSectionComp
      logoSrc={LogoSrc}
      badges={(
        <>
          <img src="https://img.shields.io/github/commit-activity/t/shibaquests-core/shibaquests" alt="github commits" />
          <img src="https://img.shields.io/github/created-at/shibaquests-core/shibaquests" alt="github commits" />
        </>
      )}
      event={{
        name: "2024 ETHToronto & ETHWomen", 
        url: "https://dorahacks.io/hackathon/ethtoronto2024",
      }}
      app={{
        version: "v1.0.0",
        url: "/",
      }}
      title="ShibaQuests"
      subtitle="Empowering Web3 Communities with Interactive Quests"
      appScreenshotSrc={AppScreenshot1}
      actions={(
        <>
          <div className="mt-6">
            <Link
              to="/"
              className="btn btn-primary text-white"
            >
              Get Started
            </Link>
          </div>
        </>
      )}
    />
  )
}
