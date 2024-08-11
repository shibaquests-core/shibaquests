import { FC } from 'react'
import { HeroSection as HeroSectionComp } from '../../../components/website/HeroSection';
import { Link } from 'react-router-dom';

export interface HeroSectionProps { }

export const HeroSection: FC<HeroSectionProps> = () => {
  return (
    <HeroSectionComp
      logoSrc="https://place-hold.it/80x64/555"
      badges={(
        <>
          <img src="https://img.shields.io/github/commit-activity/t/shibaquests-core/shibaquests" alt="github commits" />
          <img src="https://img.shields.io/github/created-at/shibaquests-core/shibaquests" alt="github commits" />
        </>
      )}
      event={{
        name: "2024 ETHToronto &amp; ETHWomen", 
        url: "https://dorahacks.io/hackathon/ethtoronto2024",
      }}
      app={{
        version: "v1.0.0",
        url: "/app",
      }}
      title="ShibaQuests"
      subtitle="Empowering Web3 Communities with Interactive Quests"
      appScreenshotSrc="https://place-hold.it/600x400/555"
      actions={(
        <>
          <div className="mt-6">
            <Link
              to="/app"
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
