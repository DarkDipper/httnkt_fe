import {
    Container,
    IconButton,
    Typography,
    Drawer,
    Stack,
    Box,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { BiLeftArrow } from "react-icons/bi";
import Scrollbar from "./ScrollBar";
import { NAVBAR } from "../config";
import Logo from "../assets/Logo";
const RootStyle = styled("div")(({ theme }) => ({
    [theme.breakpoints.up("lg")]: {
        flexShrink: 0,
        transition: theme.transitions.create("width", {
            duration: theme.transitions.duration.shorter,
        }),
    },
}));
export default function NavBar() {
    return (
        <Drawer
            open
            variant="persistent"
            PaperProps={{
                sx: {
                    width: NAVBAR.DASHBOARD_WIDTH,
                    borderRightStyle: "dashed",
                    bgcolor: "background.default",
                    transition: (theme) =>
                        theme.transitions.create("width", {
                            duration: theme.transitions.duration.standard,
                        }),
                },
            }}
        >
            <RootStyle>
                <Scrollbar
                    sx={{
                        height: 1,
                        "& .simplebar-content": {
                            height: 1,
                            display: "flex",
                            flexDirection: "column",
                        },
                    }}
                >
                    <Container>
                        <Stack
                            spacing={3}
                            sx={{
                                pt: 3,
                                pb: 2,
                                flexShrink: 0,
                            }}
                        >
                            <Stack
                                direction="row"
                                alignItems="center"
                                justifyContent="space-between"
                            >

                                <Logo />
                                <IconButton>
                                    <BiLeftArrow />
                                </IconButton>
                            </Stack>
                        </Stack>
                        <Typography sx={{
                            // textOverflow: 'ellipsis',
                            // overflow: 'hidden',
                            // whiteSpace: 'nowrap',
                        }}>
                            Call by value & Call by reference trong C++
                        </Typography>
                    </Container>
                </Scrollbar>
            </RootStyle>
        </Drawer>
    );
}
