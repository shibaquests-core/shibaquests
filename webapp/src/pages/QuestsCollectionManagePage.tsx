import { FC } from 'react'

export interface QuestsCollectionManagePageProps {
  
}

export const QuestsCollectionManagePage: FC<QuestsCollectionManagePageProps> = (props) => {
  return (
    <div className="w-screen h-screen bg-gray-200 flex items-center justify-center">
      <div className="bg-white w-full max-w-xl border rounded-md shadow-sm">
        <div className="p-8">
          Quests
        </div>
      </div>
    </div>
  )
}
