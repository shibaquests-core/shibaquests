import { waitForTransactionReceipt } from 'viem/actions';
import { useClient } from 'wagmi';


export const useWaitForTransactionReceiptAsync = () => {
  const wagmiClient = useClient();

  return async (hash: `0x${string}`) => {
    if (!wagmiClient) {
      throw new Error('No client');
    }
    return waitForTransactionReceipt(wagmiClient, {
      hash,
    });
  }
}
