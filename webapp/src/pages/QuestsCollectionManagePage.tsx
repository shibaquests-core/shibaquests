import { FC, useEffect, useState } from 'react'
import { useReadQuestsCollectionMetadata, useWriteQuestsCollectionSetQuests } from '../generated'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { getCIDLink, uploadJSONToWeb3Storage } from '../utils/web3Storage'
import { DeployedQuest, QuestsCollectionMetadata } from '../types'
import { PlusCircleIcon } from '@heroicons/react/24/outline'
import { CreateBasicQuestModal, CreateBasicQuestModalId } from '../components/modals/CreateBasicQuestModal'
import { LoadingButton } from '../components/LoadingButton'
import { handleWeb3Error } from '../utils/handleWeb3Error'
import { useWaitForTransactionReceiptAsync } from '../hooks/useWaitForTransactionReceiptAsync'
import { toast } from 'react-toastify'
import { CreateERC721Modal, CreateERC721ModalId } from '../components/modals/CreateERC721QuestModal'

export interface QuestsCollectionManagePageProps {

}

export const QuestsCollectionManagePage: FC<QuestsCollectionManagePageProps> = () => {
  const navigate = useNavigate();
  const waitForTxn = useWaitForTransactionReceiptAsync();
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [metadata, setMetadata] = useState<QuestsCollectionMetadata>();
  const [deployedQuests, setDeployedQuests] = useState<DeployedQuest[]>([]);
  const { writeContractAsync } = useWriteQuestsCollectionSetQuests();
  const { data: cid } = useReadQuestsCollectionMetadata({
    address: params.address as `0x${string}`,
  });
  const reloadQuests = async () => {
    if (!cid) return;
    const medatada = await axios.get<QuestsCollectionMetadata>(getCIDLink(cid));
    setMetadata(medatada.data);
    setDeployedQuests(medatada.data.quests);
  };
  useEffect(() => {
    void reloadQuests()
  }, [cid]);

  const openModal = (modalId: string) => {
    const modal = document.getElementById(modalId) as HTMLElement  & { showModal: () => void };
    if (modal && typeof modal.showModal === 'function') {
      modal.showModal();
    }
  };
  const updateCollection = async () => {
    setLoading(true);
    const newMetadata = await uploadJSONToWeb3Storage({
      ...metadata,
      quests: deployedQuests,
    });
    try {      
      const txnHash = await writeContractAsync({
        address: params.address as `0x${string}`,
        args: [
          deployedQuests.map((quest) => quest.address as `0x${string}`),
          newMetadata,
        ]
      });
      await waitForTxn(txnHash);
      toast.success('Collection updated');
      navigate(`/quests-collections/${params.address ?? ''}`);
    } catch (error) {
      handleWeb3Error(error);
      setLoading(false);
    }
  };
  return ( 
    <>
      <CreateBasicQuestModal onDeployed={(quest) => setDeployedQuests([...deployedQuests, quest])} />
      <CreateERC721Modal onDeployed={(quest) => setDeployedQuests([...deployedQuests, quest])} />
      <div className="w-screen h-screen bg-gray-200 flex items-center justify-center">
        <div className="bg-white w-full max-w-xl border rounded-md shadow-sm">
          <div className="border-b">
            <div className="p-8">
              <h1 className="text-lg font-bold">
                {metadata?.name}
              </h1>
            </div>
          </div>
          <div className="p-8">
            <div className="font-semibold text-lg mb-2 text-gray-600">
              Quests
            </div>
            {deployedQuests.length === 0 ? (
            <div className="border border-gray-300 p-8 rounded-lg flex items-center justify-center border-dashed text-gray-500">
              No Quests Deployed
            </div>
            ) : (
              <div>
                <div className="border border-gray-300 rounded-lg text-gray-500">
                {deployedQuests.map((quest, idx) => (
                    <div className="p-2 border-b last:border-b-0 flex items-center">
                      <img src={getCIDLink(quest.icon)} className="w-16 h-16 border border-gray-400 rounded-lg mr-2" />
                      <div>
                        <div className="text-sm">
                          Quest {idx + 1}
                        </div>
                        <div className="font-semibold">
                          {quest.name}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            <div className="flex justify-end">
              <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-primary mt-2">
                  <PlusCircleIcon className="h-6 w-6" /> Add Quest
                </div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                  <li>
                    <a onClick={() => openModal(CreateBasicQuestModalId)}>Basic Quest</a>
                  </li>
                  <li>
                    <a onClick={() => openModal(CreateERC721ModalId)}>ERC721 Quest</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="p-8 border-t flex justify-end">
            <LoadingButton
              type="button"
              onClick={() => updateCollection()}
              loading={loading}
              label="Update Collection"
              loadingLabel="Updating..."
            />
          </div>
        </div>
      </div>
    </>
  )
}
