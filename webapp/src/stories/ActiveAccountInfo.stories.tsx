import { AccountInfo } from "../components/AccountInfo";
import { Meta, StoryObj } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ActiveAccountInfo } from "../components/ActiveAccountInfo";
import { Web3ModalProvider } from "../providers/Web3ModalProvider";
import { useAccount } from "wagmi";
import { Web3Button } from "@web3modal/react";

const queryClient = new QueryClient()

const ConnectWrapper = ({ children }: { children: React.ReactNode }) => {
  const account = useAccount();
  if (!account.isConnected) {
    return <Web3Button />
  }
  return (
    <>
      {children}
    </>
  )
}


const meta: Meta<typeof AccountInfo> = {
  component: AccountInfo,
  decorators: [
    (Story) => (
      <Web3ModalProvider>
        <QueryClientProvider client={queryClient}>
          <ConnectWrapper>
            {Story()}
          </ConnectWrapper>
        </QueryClientProvider>
      </Web3ModalProvider>
    )
  ]
};

export default meta;

// Default

export const Default: StoryObj = {
  render: () => (
    <ActiveAccountInfo />
  ),
};

// With Network

export const WithNetwork: StoryObj = {
  render: () => (
    <ActiveAccountInfo secondaryInfo="network" />
  ),
};

// With Balance

export const WithBalance: StoryObj = {
  render: () => (
    <ActiveAccountInfo secondaryInfo="balance" />
  ),
};