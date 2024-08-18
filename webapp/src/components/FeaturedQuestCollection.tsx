import { FC } from 'react'
import classNames from 'classnames';
import { getCIDLink } from '../utils/web3Storage';

export interface FeaturedQuestCollectionProps {
  name: string;
  cover: string;
  logo: string;
  rounded?: boolean;
}

export const FeaturedQuestCollection: FC<FeaturedQuestCollectionProps> = ({ name, cover, logo, rounded }) => {
  const logoImageSrc = getCIDLink(logo);
  const coverImageSrc = getCIDLink(cover);
  return (
    <div className="w-full h-[420px] relative ">
      <div
        className={classNames(
          'w-full h-full absolute bg-cover bg-center',
          { 'rounded-3xl': rounded }
        )}
        style={{ backgroundImage: `url(${coverImageSrc})` }}
      />
      <div className={classNames(
        'quest-collection-page-cover-background',
        { 'rounded-3xl': rounded },
      )} />
      <div className="w-full h-full absolute flex flex-col justify-end">
        <div className="mint-page-cover" />
        <div className="px-24 py-8">
          <div className="w-full flex justify-center lg:block">
            <img
              src={logoImageSrc}
              className="w-32 h-32 rounded-lg border-4 border-gray-100"
            />
          </div>
          <h1 className="py-8 text-xl lg:text-4xl font-semibold text-white flex justify-center text-center lg:text-left lg:block">
            {name}
          </h1>
          <div className="flex justify-center lg:block">
            {/* <CollectionStatusBadge collection={collection} /> */}
          </div>
        </div>
      </div>
    </div>
  )
}
