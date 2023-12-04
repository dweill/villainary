'use client';

import Container from '@mui/material/Container';
import VillainIntakeForm from './VillainIntakeForm';
import { useSelector } from 'react-redux';
import {selectUserState} from "@/app/state/userState.slice";
import {useEffect} from "react";
import {useRouter} from "next/navigation";
import {Routes} from "@/app/enums/routes";

export default function Home() {
    const router = useRouter();
    const villainName = useSelector(selectUserState).villainName;

    useEffect(() => {
        if (villainName != undefined && villainName.length > 0) {
            router.push(Routes.PROFILE);
        }
    }, [villainName]);

  return (
    <Container maxWidth="sm">
      <h1 className="text-9xl pb-8">Villainary</h1>
      <VillainIntakeForm></VillainIntakeForm>
    </Container>
  );
}
