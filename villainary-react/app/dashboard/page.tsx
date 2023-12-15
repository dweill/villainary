'use client';

import { selectUserState } from '@/app/state/userState.slice';
import Container from '@mui/material/Container';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Routes } from '../enums/routes';

const DashboardCard = dynamic(() => import('./DashboardCard'), { ssr: false });

export default function Page() {
    const router = useRouter();
    const villainName = useSelector(selectUserState).villainName;

    useEffect(() => {
        if (!villainName) {
            router.push(Routes.ROOT);
        }
    }, [villainName]);

    return (
        <Container maxWidth="sm">
            <DashboardCard></DashboardCard>
        </Container>
    );
}
