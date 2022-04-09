import { Grid, Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import DashboardHeader from "./DashboardHeader";
export default function Dashboard() {
    return (
        <Grid container>
            <Grid item xs={2.2}>
                <NavBar />
            </Grid>
            <Grid container item xs={9.8} spacing={1} direction={"row"}>
                <Grid item xs={12}>
                    <DashboardHeader/>
                </Grid>
                <Grid item xs={12} >
                        <Outlet />
                </Grid>
            </Grid>
        </Grid>
    );
}
