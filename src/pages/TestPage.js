import { Grid, Typography, Pagination, Box } from "@mui/material";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import ClockCountDown from "../components/ClockCountDown";
export default function TestPage() {
    return (
        <>
            <Grid container>
                <Grid item xs={3}>
                    <ClockCountDown />
                    <Typography>OK</Typography>
                </Grid>
                <Grid item xs={9}>
                    <Typography>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Quidem adipisci quam sequi consectetur saepe
                        aliquid, sunt laboriosam ipsum maiores eius voluptates
                        reprehenderit ab sed ex impedit? Alias nemo molestiae
                        debitis nostrum, voluptatum explicabo blanditiis nisi
                        neque aperiam iure perferendis quidem. Hic nobis culpa
                        repellendus quod minus ex saepe praesentium laudantium
                        itaque suscipit? Facere quidem deleniti quam adipisci
                        blanditiis rem reiciendis, laboriosam, quasi animi
                        labore error voluptatibus, sint atque necessitatibus
                        culpa itaque sunt excepturi commodi consectetur placeat
                        pariatur tempore ratione recusandae quo! Tempore
                        excepturi quae temporibus! Nesciunt mollitia, quasi
                        culpa voluptate voluptates, quibusdam reprehenderit,
                        nulla cum doloremque beatae fugiat quidem! Nam.
                    </Typography>
                    <Box sx={{
                        position:"absolute",
                        display: "flex",
                        justifyContent: "center",
                        bottom:0,
                    }}>
                        <Pagination
                            sx={{ my: 2 }}
                            count={20}
                            color="primary"
                            boundaryCount={20}
                        />
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}
