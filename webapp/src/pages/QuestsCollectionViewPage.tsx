import { FC, useEffect, useState } from 'react'
import { FeaturedQuestCollection } from '../components/FeaturedQuestCollection';
import { QuestItem } from '../components/QuestItem';
import { DeployedQuest, QuestsCollectionMetadata } from '../types';
import { useReadQuestsCollectionMetadata, useWriteQuestsCollectionSetQuests } from '../generated';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { getCIDLink } from '../utils/web3Storage';

export interface QuestsCollectionViewPageProps {
  
}

export const QuestsCollectionViewPage: FC<QuestsCollectionViewPageProps> = (props) => {
  const params = useParams();
  const [metadata, setMetadata] = useState<QuestsCollectionMetadata>();
  const [deployedQuests, setDeployedQuests] = useState<DeployedQuest[]>([]);
  const { writeContractAsync } = useWriteQuestsCollectionSetQuests();
  const { data: cid } = useReadQuestsCollectionMetadata({
    address: params.address as `0x${string}`,
  });
  useEffect(() => {
    void reloadQuests()
  }, [cid]);

  const reloadQuests = async () => {
    if (!cid) return;
    const medatada = await axios.get<QuestsCollectionMetadata>(getCIDLink(cid));
    setMetadata(medatada.data);
    setDeployedQuests(medatada.data.quests);
  };

  const collection = {
    id: '123',
    address: 'address',
    slug: 'slug',
    coverImageSrc: '',
    logoImageSrc: '',
    name: 'My Name Test Ok!!',
    status: 'status',
  };
  return (
    <div>
      <FeaturedQuestCollection collection={collection} rounded={false} />

      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mt-8 text-gray-600">Quests</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 w-full mt-8">
          {deployedQuests.map((quest) => <QuestItem quest={quest} />)}
        </div>
      </div>
    </div>
  )
}
