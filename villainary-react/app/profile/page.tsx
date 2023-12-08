import { Container } from '@mui/material';
import dynamic from "next/dynamic";

const Profile = dynamic(() => import('./Profile'), { ssr: false });

export default function Page() {
  return (
    <Container maxWidth="sm">
      <Profile />
    </Container>
  );
}
