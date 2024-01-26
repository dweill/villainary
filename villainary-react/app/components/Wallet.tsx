'use client';

import { useSelector } from 'react-redux';
import { Currencies } from '../enums/currencies';
import { selectUserState } from '../state/userState.slice';
import Money from './Money';

export default function Wallet() {
    const currentFunds = useSelector(selectUserState)?.currentFunds;

    return (
        <div>
            {' '}
            Current Balance:{' '}
            <Money value={currentFunds} currency={Currencies.USD} />
        </div>
    );
}
