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
                                px: 2.5,
                                flexShrink: 0,
                            }}
                        >
                            <Stack
                                direction="row"
                                alignItems="center"
                                justifyContent="space-between"
                            >
                                {/* <Typography variant="h5">News</Typography> */}
                                <Logo />

                                <IconButton>
                                    <BiLeftArrow />
                                </IconButton>
                            </Stack>
                        </Stack>
                        <Typography>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Explicabo autem dolore temporibus dolorum
                            maxime dignissimos ipsam voluptate dolores natus,
                            rerum ex voluptates, aperiam perspiciatis soluta
                            excepturi eius laborum atque veniam nobis,
                            consequuntur fugiat? Veritatis ipsum asperiores
                            quasi natus ipsam aspernatur recusandae quia
                            laudantium optio cumque expedita exercitationem
                            ullam quas fugit, in odit iusto nostrum suscipit
                            adipisci. Itaque, ipsa? Aliquid itaque veritatis
                            distinctio numquam soluta nesciunt aspernatur dolor
                            voluptate? Est animi excepturi nobis nihil nostrum
                            deleniti architecto, illo pariatur fugit. Ad, culpa!
                            Sunt, quia saepe! Quis quidem tenetur error voluptas
                            facilis quo eum veritatis obcaecati nemo. Molestias
                            perferendis, vero neque, reprehenderit magnam atque
                            repudiandae itaque odit esse delectus pariatur
                            doloribus quos dolore, nesciunt quisquam tempora!
                            Eveniet rem aliquam voluptas sapiente vero id,
                            voluptates dolorum non vitae sit repudiandae velit
                            reiciendis quod animi quisquam! Est consectetur
                            laudantium dignissimos! Rem sequi repellat rerum
                            facilis eveniet fugit neque veritatis illo
                            accusantium voluptatum, unde ipsum sint accusamus
                            nemo atque maxime explicabo esse voluptates tempore
                            doloribus? Exercitationem eius dolore tempore
                            aliquid reiciendis ex repellat inventore amet
                            commodi ea culpa, corrupti eos perferendis sint
                            assumenda, labore illo cumque fugiat reprehenderit.
                            Pariatur quaerat veniam excepturi optio obcaecati
                            quo rerum nesciunt, cumque molestias corporis hic
                            quasi illo totam. Officiis.
                        </Typography>
                        <Box sx={{ flexGrow: 1 }} />
                    </Container>
                </Scrollbar>
            </RootStyle>
        </Drawer>
    );
}
