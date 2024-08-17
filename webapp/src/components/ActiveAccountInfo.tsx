import React, { FC, useMemo } from 'react'
import { useAccount, useBalance, useNetwork } from 'wagmi'
import { AccountInfo, AccountInfoProps } from './AccountInfo';

export interface ActiveAccountInfoProps extends Pick<AccountInfoProps, 'secondaryInfo'> {
  disconnectedPlaceholder?: React.ReactNode;
}

export const ActiveAccountInfo: FC<ActiveAccountInfoProps> = ({
  secondaryInfo,
  disconnectedPlaceholder = null,
}) => {
  const account = useAccount();
  const { data: balanceData } = useBalance({
    address: account.address,
  });
  const balance = useMemo(() => {
    if (!balanceData) {
      return;
    }
    return parseFloat(balanceData?.formatted || '0')
  }, [balanceData]);
  const { chain } = useNetwork()
  if (!account.isConnected) {
    return disconnectedPlaceholder;
  }
  return (
    <AccountInfo
      address={account.address || ''}
      secondaryInfo={secondaryInfo}
      networkName={chain?.name}
      balance={balance}
    />
  )
}
