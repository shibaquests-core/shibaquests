import { defineConfig } from '@wagmi/cli';
import { react } from '@wagmi/cli/plugins';
import QuestsCollection from './src/abi/QuestsCollection.json';
import QuestsCollectionFactory from './src/abi/QuestsCollectionFactory.json';
import BasicQuestFactory from './src/abi/BasicQuestFactory.json';
import IQuest from './src/abi/IQuest.json';
 
export default defineConfig({
  out: 'src/generated.ts',
  contracts: [
    {
      name: 'IQuest',
      abi: IQuest,
    },
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
