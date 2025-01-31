import { createWeb3Modal } from '@web3modal/wagmi/react'
import { defaultWagmiConfig } from '@web3modal/wagmi/react/config';
import { defineChain } from 'viem'

// 0. Setup queryClient

// 1. Get projectId from https://cloud.walletconnect.com
const puppynet = defineChain({
  id: 157,
  name: 'Puppynet',
  nativeCurrency: {
    decimals: 18,
    name: 'BONE',
    symbol: 'BONE',
  },
  rpcUrls: {
    default: {
      http: ['https://puppynet.shibrpc.com']
    },
  },
});

const chains = [puppynet] as const
const projectId = import.meta.env.VITE_WEB3_MODAL_PROJECT_ID as string;

// 2. Create wagmiConfig
const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

export const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
})

// 3. Create modal
export const modal = createWeb3Modal({
  wagmiConfig: config,
  projectId,
  enableAnalytics: true,
  enableOnramp: true,
})
