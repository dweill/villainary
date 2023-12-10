import Container from "@mui/material/Container";
import dynamic  from "next/dynamic";

const DashboardCard = dynamic(() => import('./DashboardCard'), {ssr: false});
export default function Page() {
    return (
        <Container maxWidth="sm">
            <DashboardCard></DashboardCard>
        </Container>
    )
}