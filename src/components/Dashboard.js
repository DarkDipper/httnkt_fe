import { Grid, Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import NavBar from "./NavBar";
import DashboardHeader from "./DashboardHeader";
import useSettings from "../hooks/useSettings";
import useCollapseDrawer from "../hooks/useCollapseDrawer";
export default function Dashboard() {
    const { collapseClick, isCollapse } = useCollapseDrawer();
    const { themeLayout } = useSettings();

    const [open, setOpen] = useState(false);

    const verticalLayout = themeLayout === "vertical";
    return (
        <Grid container>
            <Grid item xs={2}>
                <NavBar
                    isOpenSidebar={open}
                    onCloseSidebar={() => setOpen(false)}
                />
            </Grid>
            <Grid item xs={10} sx={{height:"100vh" ,display:"flex",flexDirection:"column"}}>
                <DashboardHeader
                    onOpenSidebar={() => setOpen(true)}
                    verticalLayout={verticalLayout}
                />
                <Container
                    sx={{
                        mt: 13,
                        mb: 5,
                        height: "100%",
                    }}
                >
                    <Outlet />
                </Container>
            </Grid>
        </Grid>
    );
}
