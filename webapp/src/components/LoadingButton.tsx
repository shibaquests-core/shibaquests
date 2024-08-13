import classNames from 'classnames'
import React, { FC } from 'react'

export interface LoadingButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  loading: boolean;
  label: string;
  loadingLabel: string;
}

export const LoadingButton: FC<LoadingButtonProps> = ({ loading, label, loadingLabel, ...props }) => {
  return (
    <button {...props} className={classNames("btn btn-primary", { 'btn-disabled': loading })}>
      {loading && <span className="loading loading-spinner loading-sm"></span>}
      {loading ? loadingLabel : label}
    </button>
  )
}
