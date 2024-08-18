import { useQuery } from '@tanstack/react-query'
import { FC } from 'react'
import { getQuestsCollections } from '../client/queries/getQuestsCollections'
import { FeaturedQuestCollection } from '../components/FeaturedQuestCollection'
import { CollectionListingCard } from '../components/CollectionListingCard'
import { Link } from 'react-router-dom'
import { Topbar } from '../components/Topbar'
import { FooterSection } from '../sections/website/Index/FooterSection'
import { PlusIcon } from '@heroicons/react/24/solid'

export interface IndexPageProps {
  
}

export const IndexPage: FC<IndexPageProps> = () => {
  const { data } = useQuery({
    queryKey: ['quests-collections'],
    queryFn: () => getQuestsCollections(),
  })
  return (
  <>
  <Topbar />
  <div className="container mx-auto my-2 text-gray-800 mt-8">
        <h2 className="text-3xl mb-8">Featured</h2>
      </div>
      <div className="container mx-auto rounded-3xl overflow-hidden">
        {data?.featured && (
          <Link to={`/quests-collections/${data.featured.address}`}>
            <FeaturedQuestCollection
              name={data.featured.name}
              cover={data.featured.cover}
              logo={data.featured.logo}
            />
          </Link>
        )}
      </div>
      <div className="container mx-auto my-2 text-gray-800 mt-24">
        <div className="flex justify-between">
          <h2 className="text-3xl mb-8">Quest Collections</h2>
          <Link className="btn btn-outline btn-primary" to="/quests-collections/create">
            <PlusIcon className="h-5 w-5" />
            Create Collection
          </Link>
        </div>
        <div className="mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {data?.recent.map((collection) => (
                <Link to={`/quests-collections/${collection.address}`} className="flex">
                  <CollectionListingCard
                    key={collection.address}
                    name={collection.name}
                    cover={collection.cover}
                    logo={collection.logo}
                  />
                </Link>
            ))}
          </div>
        </div>
      </div>
      <FooterSection />
  </>
  )
}
