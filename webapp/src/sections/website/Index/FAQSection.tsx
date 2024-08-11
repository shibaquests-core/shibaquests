import { FC } from 'react'
import { FAQSection as FAQSectionComp } from '../../../components/website/FAQSection';

export interface FAQSectionProps {}

export const FAQSection: FC<FAQSectionProps> = (props) => {
  return (
    <FAQSectionComp
      items={[
        {
          question: "What is ShibaQuests?",
          answer: "ShibaQuests is an innovative platform that empowers communities within the Web3 ecosystem by allowing them to create, manage, and participate in quests. It leverages the power of Smart Contracts to craft interactive challenges that can be completed on-chain or off-chain."
        },
        {
          question: "How can I create a quest?",
          answer: "Users can create customizable quests through ShibaQuests&#39; user-friendly interface. The quests can range from simple tasks to complex challenges and are governed by Smart Contracts, ensuring transparency, security, and immutability."
        },
        {
          question: "What is the QuestsCollection feature?",
          answer: "The QuestsCollection feature allows users to group multiple quests into a collection. This is especially useful for Web3 developers, game designers, and community leaders who want to create a series of interconnected challenges to drive engagement, reward participation, and build community loyalty."
        },
      ]}
    />
  )
}
