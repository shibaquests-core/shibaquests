import { FC } from 'react'
import { FeaturedQuestCollection } from '../components/FeaturedQuestCollection';
import { QuestItem } from '../components/QuestItem';

export interface QuestsCollectionViewPageProps {
  
}

export const QuestsCollectionViewPage: FC<QuestsCollectionViewPageProps> = (props) => {
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
          <QuestItem />
          <QuestItem />
          <QuestItem />
          <QuestItem />
        </div>
      </div>
    </div>
  )
}
