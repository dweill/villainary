import Container from "@mui/material/Container";
import DashboardCard from './DashboardCard';
import { useSelector } from "react-redux";
import { selectUserState } from "@/app/state/userState.slice";

export default function Page() {
    return (
        <Container maxWidth="sm">
            <DashboardCard></DashboardCard>
        </Container>
    )
}