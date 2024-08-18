import { FC } from "react";
import { getCIDLink } from "../utils/web3Storage";

export interface CollectionListingCardProps {
  name: string;
  cover: string;
  logo: string;
}

export const CollectionListingCard: FC<CollectionListingCardProps> = ({
  name,
  cover,
  logo,
}) => {
  const logoImageSrc = getCIDLink(logo);
  const coverImageSrc = getCIDLink(cover);
  const backgroundUrl = coverImageSrc;
  const backgroundImage = backgroundUrl
    ? `linear-gradient(rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.60) 100%), url(${backgroundUrl})`
    : "";
  return (
    <div className="w-full bg-slate-50 border border-gray-300 rounded rounded-t-lg">
      <div
        className="w-full h-48 bg-cover bg-center bg-gray-200 rounded-t-lg flex flex-col justify-between"
        style={{ backgroundImage }}
      >
        <div />
        <div>
          <img
            src={logoImageSrc}
            className="w-20 h-20 rounded-lg border-2 border-gray-300 ml-8 mb-[-16px]"
          />
        </div>
      </div>
      <div className="p-8 border-t border-t-slate-400">
        <div className="font-bold text-gray-700">{name}</div>
      </div>
    </div>
  );
};
