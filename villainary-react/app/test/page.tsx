'use client';

import { useSelector } from 'react-redux';
import { selectUserState } from '../state/userState.slice';

export default function Page() {
  const user = useSelector(selectUserState);
  return <div>Hello {user.villainName}</div>;
}
