import { FC } from 'react'
import { CreateQuestsCollectionForm, CreateQuestsCollectionFormValues } from '../components/forms/CreateQuestsCollectionForm';
import { useForm } from 'react-hook-form';

export interface QuestsCollectionCreatePageProps {
  
}

export const QuestsCollectionCreatePage: FC<QuestsCollectionCreatePageProps> = (props) => {
  const form = useForm<CreateQuestsCollectionFormValues>();
  return (
    <div className="w-screen h-screen bg-gray-200 flex items-center justify-center">
      <div className="bg-white w-full max-w-xl border rounded-md shadow-sm">
        <div className="p-8 border-b">
          <ol className="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
            <li className="flex md:w-full items-center text-blue-600 dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
              <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                <span className="me-2">1</span>
                Collection <span className="hidden sm:inline-flex sm:ms-2">Info</span>
              </span>
            </li>
            <li className="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
              <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                <span className="me-2">2</span>
                Quests
              </span>
            </li>
            <li className="flex items-center">
              <span className="me-2">3</span>
              Confirmation
            </li>
          </ol>
        </div>
        <div className="p-8">
          <CreateQuestsCollectionForm form={form} onSubmit={console.log} />
        </div>
      </div>
    </div>
  )
}
