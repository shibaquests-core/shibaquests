import { defineConfig } from '@wagmi/cli';
import { react } from '@wagmi/cli/plugins';
import QuestsCollection from './src/abi/QuestsCollection.json';
import QuestsCollectionFactory from './src/abi/QuestsCollectionFactory.json';
import BasicQuestFactory from './src/abi/BasicQuestFactory.json';
 
export default defineConfig({
  out: 'src/generated.ts',
  contracts: [
    {
      name: 'QuestsCollection',
      abi: QuestsCollection,
    },
    {
      name: 'QuestsCollectionFactory',
      abi: QuestsCollectionFactory,
    },
    {
      name: 'BasicQuestFactory',
      abi: BasicQuestFactory,
    }
  ],
  plugins: [
    react(),
  ],
})
