import { FC } from 'react'
import { AboutSection as AboutSectionComp } from '../../../components/website/AboutSection';

import AppScreenshot2 from '../../../assets/app-screenshot-2.png';


export interface AboutSectionProps {}

export const AboutSection: FC<AboutSectionProps> = () => {
  return (
    <AboutSectionComp
      imageSrc={AppScreenshot2}
      sections={[
        {
          title: "Overview",
          content: (
            <>
              <p>
                ShibaQuests is an innovative platform designed to empower communities within the Web3 ecosystem by allowing them to create, manage, and participate in quests.
              </p>
              <p>
                Developed during the 2024 ETHToronto &amp; ETHWomen hackathon, ShibaQuests leverages the power of Smart Contracts to enable users to craft interactive challenges that can be completed either on-chain or off-chain.
              </p>
              <p>
                The platform aims to serve as a dynamic tool for engaging users across a variety of Web3 applications, games, and more.
              </p>
            </>
          )
        },
        {
          title: "Key Features",
          content: (
            <>
              <p>
                <strong>Quest Creation:</strong> ShibaQuests provides users with the ability to create customizable quests through a user-friendly interface. These quests can range from simple tasks to complex challenges, tailored to the specific needs of the community. Each quest is governed by a Smart Contract, ensuring transparency, security, and immutability.
              </p>
              <p>
                <strong>Quests Collection:</strong> A unique feature of ShibaQuests is the Quests Collection, which allows users to group multiple quests into a collection. This feature is ideal for Web3 developers, game designers, and community leaders who want to create a series of interconnected challenges. The Quests Collection can be used to drive engagement, reward participation, and build community loyalty.
              </p>
              <p>
                <strong>Web3 Integration:</strong> The platform is fully integrated with Web3, making it easy for users to connect their wallets and participate in quests. Developers can also integrate ShibaQuests into their existing Web3 applications or games, using it as a tool to enhance user engagement and interaction.
              </p>
              <p>
                <strong>Community Engagement:</strong> ShibaQuests is designed with community building in mind. By enabling users to create and participate in quests, the platform fosters a sense of collaboration and achievement within the community. It also offers opportunities for communities to reward their members with tokens, NFTs, or other blockchain-based assets.
              </p>
            </>
          )
        }
      ]}
    />
  )
}
