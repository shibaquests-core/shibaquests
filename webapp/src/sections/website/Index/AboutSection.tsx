import { FC } from 'react'
import { AboutSection as AboutSectionComp } from '../../../components/website/AboutSection';

export interface AboutSectionProps {}

export const AboutSection: FC<AboutSectionProps> = () => {
  return (
    <AboutSectionComp
      imageSrc='https://place-hold.it/600x400/555'
      sections={
        [
          {
            title: "Overview",
            content: (
              <p>
                ShibaQuests is an innovative platform designed to empower communities within the Web3 ecosystem by allowing them to create, manage, and participate in quests. Developed during the 2024 ETHToronto &amp; ETHWomen hackathons, ShibaQuests leverages the power of Smart Contracts to enable users to craft interactive challenges that can be completed either on-chain or off-chain. The platform aims to serve as a dynamic tool for engaging users across a variety of Web3 applications, games, and more.
              </p>
            )
          },
          {
            title: "Key Features",
            content: (
              <p>
                Quest Creation: ShibaQuests provides users with the ability to create customizable quests through a user-friendly interface. These quests can range from simple tasks to complex challenges, tailored to the specific needs of the community. Each quest is governed by a Smart Contract, ensuring transparency, security, and immutability.
QuestsCollection: A unique feature of ShibaQuests is the QuestsCollection, which allows users to group multiple quests into a collection. This feature is ideal for Web3 developers, game designers, and community leaders who want to create a series of interconnected challenges. The QuestsCollection can be used to drive engagement, reward participation, and build community loyalty.
On-chain and Off-chain Compatibility: ShibaQuests is designed to accommodate both on-chain and off-chain challenges. On-chain quests are recorded directly on the blockchain, offering verifiable proof of completion and enabling decentralized rewards distribution. Off-chain quests, while not recorded on the blockchain, still provide a seamless experience for users, making the platform versatile for a wide range of applications.
Web3 Integration: The platform is fully integrated with Web3, making it easy for users to connect their wallets and participate in quests. Developers can also integrate ShibaQuests into their existing Web3 applications or games, using it as a tool to enhance user engagement and interaction.
Community Engagement: ShibaQuests is designed with community building in mind. By enabling users to create and participate in quests, the platform fosters a sense of collaboration and achievement within the community. It also offers opportunities for communities to reward their members with tokens, NFTs, or other blockchain-based assets.
              </p>
            )
          }
        ]
      }
    />
  )
}
