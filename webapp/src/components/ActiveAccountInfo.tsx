import React, { FC, useMemo } from 'react'
import { useAccount, useBalance, useConfig } from 'wagmi'
import { AccountInfo, AccountInfoProps } from './AccountInfo';

export interface ActiveAccountInfoProps extends Pick<AccountInfoProps, 'secondaryInfo'> {
  disconnectedPlaceholder?: React.ReactNode;
  theme?: 'light' | 'dark';
}

export const ActiveAccountInfo: FC<ActiveAccountInfoProps> = ({
  secondaryInfo,
  disconnectedPlaceholder = null,
  theme = 'light',
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
  const { chains } = useConfig();
  const chain = chains.find((c) => c.id === account.chainId);
  if (!account.isConnected) {
    return disconnectedPlaceholder;
  }
  return (
    <AccountInfo
      address={account.address || ''}
      secondaryInfo={secondaryInfo}
      networkName={chain?.name}
      networkColor='#2ecc71'
      balance={balance}
      theme={theme}
    />
  )
}
