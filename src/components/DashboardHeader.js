import { Container, IconButton
 } from "@mui/material";
import {BiSearch as SearchIcon} from 'react-icons/bi';
import { styled } from "@mui/material/styles";
const RootStyle = styled(Container)(({ theme }) => ({
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
}));
export default function DashboardHeader() {
    return (
        <RootStyle>
            <IconButton>
                <SearchIcon />
            </IconButton>
        </RootStyle>
    );
}