'use client';

import Container from '@mui/material/Container';
import VillainIntakeForm from './VillainIntakeForm';

export default function Home() {
  return (
    <Container maxWidth="sm">
      <h1 className="text-9xl pb-8">Villainary</h1>
      <VillainIntakeForm></VillainIntakeForm>
    </Container>
  );
}
