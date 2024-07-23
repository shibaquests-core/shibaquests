import { CheckCircleIcon, CheckIcon, LockClosedIcon } from '@heroicons/react/24/solid'
import React, { FC } from 'react'

export interface QuestItemProps {
  
}

export const QuestItem: FC<QuestItemProps> = (props) => {
  const quest = {
    id: '123',
    name: 'Quest Name',
    description: 'Lore ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc. Donec nec odio vitae nunc. Donec nec odio vitae nunc.',
    iconImageSrc: '',
    completed: true,
  }
  return (
    <div className="border border-gray-300 rounded-md w-full">
      <div className="flex p-8">
        <div className="shrink-0 w-16 h-16 relative">
          {!quest.completed && (
            <div className="absolute top-0 right-0 w-16 h-16 rounded-md bg-[rgba(119,119,119,0.9)] flex items-center justify-center">
              <LockClosedIcon className="h-6 w-6 text-white" />
            </div>
          )}
          <img src={quest.iconImageSrc} className="h-16 w-16 border-4 border-gray-500 rounded-md" />
        </div>
        <div className="pl-4 w-full">
          <div>
            <h1 className="text-xl font-semibold text-gray-700">{quest.name}</h1>
            <div>
              <p className="text-gray-600">{quest.description}</p>
            </div>
          </div>
        </div>
      </div>
        <div className="w-full grid grid-cols-2 mt-4 border-t">
          <button className="btn btn-ghost btn-block rounded-none rounded-bl-md">Read More</button>
          {quest.completed ? (
            <div className="flex items-center justify-center">
              <div className="flex text-green-500 font-bold">
                <CheckCircleIcon className="h-6 w-6 mr-2" />
                Completed
              </div>
            </div>
          ) : (
            <button className="btn btn-disabled btn-block opacity-70 rounded-none rounded-br-md">
              <LockClosedIcon className="h-6 w-6" />
            </button>
          )}
        </div>
    </div>
  )
}
