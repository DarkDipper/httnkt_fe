import {
    Grid,
    Typography,
    Pagination,
    Box,
    Button,
    styled,
    Snackbar,
    Alert,
} from "@mui/material";
import { useEffect, useState } from "react";
import ClockCountDown from "../components/ClockCountDown";
import { useNavigate } from "react-router-dom";
const axios = require("axios");

const Answer = styled(Button)(({ theme, checked }) => ({
    width: "18vw",
    height: "13vh",
    ...(checked && {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
    }),
    "&:hover": {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
    },
}));
export default function TestPage() {
    const [test, setTest] = useState();
    const [currentPage, setcurrentPage] = useState(1);
    const [timeOut, setTimeOut] = useState(false);
    const [Open, setOpen] = useState(false);
    const [buttonChecked, setbuttonChecked] = useState([
        false,
        false,
        false,
        false,
    ]);
    const [list_ans, setlistAns] = useState([]);
    const navigate = useNavigate();
    const [ID, setID] = useState(null);
    const changePage = (event, page) => {
        setcurrentPage(page);
    };
    const Submit = () => {
        // console.log(list_ans);
        setTimeOut(true);
        navigate("/result", { state: { list_ans: list_ans }, replace: true });
    };
    const changeClicked = (index, ans) => {
        if (!timeOut) {
            setlistAns(
                [...list_ans].map((q) => {
                    if (q["id"] === ID) {
                        q["ans"] = ans;
                    }
                    return q;
                })
            );
            setbuttonChecked(
                buttonChecked.map((val, i) => (i === index ? true : false))
            );
        }
    };
    useEffect(() => {
        const callData = async () => {
            const response = await axios.get(
                `https://52scxm.deta.dev/question/20`
            );
            setTest(response.data["list_data"]);
            // console.log(response.data);
            setlistAns(
                response.data["list_data"].map((q) => {
                    return { id: q["_id"], ans: " " };
                })
            )
            setID(response.data["list_data"][currentPage - 1]["_id"]);
        };
        callData();
    }, []);
    useEffect(() => {
        if (test) {
            setID(test[currentPage - 1]["_id"]);
            setbuttonChecked([false, false, false, false]);
            test &&
                list_ans.map((item) => {
                    if (item["id"] === test[currentPage - 1]["_id"]) {
                        test.map((q) => {
                            if (q["_id"] === test[currentPage - 1]["_id"]) {
                                setbuttonChecked(
                                    q["Cau_tra_loi"].map((val, i) =>
                                        val === item["ans"] ? true : false
                                    )
                                );
                            }
                        });
                    }
                });
        }
    }, [currentPage]);
    return (
        <>
            <Grid container sx={{ height: "100%" }}>
                <Grid
                    item
                    container
                    xs={4}
                    sx={{ display: "flex", height: "100%" }}
                >
                    <Grid item xs={12}>
                        <ClockCountDown
                            setTimeOut={setTimeOut}
                            setOpen={setOpen}
                        />
                        <Button
                            type="submit"
                            variant="outlined"
                            onClick={Submit}
                        >
                            Nộp bài
                        </Button>
                    </Grid>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            marginTop: "auto",
                        }}
                    >
                        <Pagination
                            sx={{ my: 2 }}
                            count={20}
                            color="primary"
                            boundaryCount={20}
                            page={currentPage}
                            onChange={changePage}
                        />
                    </Box>
                </Grid>
                <Grid item container xs={8}>
                    <div
                        style={{
                            height: "calc(100vh - 104px)",
                            display: "flex",
                            flexDirection: "column",
                            width: "100%",
                        }}
                    >
                        <div style={{ flexGrow: 1, overflowY: "auto" }}>
                            {test &&
                                test[currentPage - 1]["Cau_hoi"].map(
                                    (row, index) => {
                                        return (
                                            <Typography
                                                sx={{ whiteSpace: "pre-wrap" }}
                                                key={index}
                                            >
                                                {row}
                                            </Typography>
                                        );
                                    }
                                )}
                        </div>
                        <div
                            style={{
                                marginTop: "auto",
                                padding: 10,
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                                gap: 10,
                            }}
                        >
                            <Grid item>
                                <Answer
                                    style={{ width: "100%" }}
                                    variant="outlined"
                                    checked={buttonChecked[0]}
                                    onClick={() =>
                                        changeClicked(
                                            0,
                                            test[currentPage - 1].Cau_tra_loi[0]
                                        )
                                    }
                                >
                                    {test &&
                                        test[currentPage - 1]["Cau_tra_loi"][0]}
                                </Answer>
                            </Grid>
                            <Grid item>
                                <Answer
                                    style={{ width: "100%" }}
                                    variant="outlined"
                                    checked={buttonChecked[1]}
                                    onClick={() =>
                                        changeClicked(
                                            1,
                                            test[currentPage - 1].Cau_tra_loi[1]
                                        )
                                    }
                                >
                                    {test &&
                                        test[currentPage - 1]["Cau_tra_loi"][1]}
                                </Answer>
                            </Grid>
                            <Grid item>
                                <Answer
                                    style={{ width: "100%" }}
                                    variant="outlined"
                                    checked={buttonChecked[2]}
                                    onClick={() =>
                                        changeClicked(
                                            2,
                                            test[currentPage - 1].Cau_tra_loi[2]
                                        )
                                    }
                                >
                                    {test &&
                                        test[currentPage - 1]["Cau_tra_loi"][2]}
                                </Answer>
                            </Grid>
                            <Grid item>
                                <Answer
                                    style={{ width: "100%" }}
                                    variant="outlined"
                                    checked={buttonChecked[3]}
                                    onClick={() =>
                                        changeClicked(
                                            3,
                                            test[currentPage - 1].Cau_tra_loi[3]
                                        )
                                    }
                                >
                                    {test &&
                                        test[currentPage - 1]["Cau_tra_loi"][3]}
                                </Answer>
                            </Grid>
                        </div>
                    </div>
                </Grid>
            </Grid>
            <Snackbar
                open={Open}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                autoHideDuration={3000}
            >
                <Alert severity="info" sx={{ width: "100%" }}>
                    Đã hết thời gian làm bài. Vui lòng nhấn nộp bài
                </Alert>
            </Snackbar>
        </>
    );
}
