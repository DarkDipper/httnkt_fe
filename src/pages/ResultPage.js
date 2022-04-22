import { Typography, Card, CardContent } from "@mui/material";
import { useEffect, useState } from "react";
import { MotivationIllustration } from "../assets";
import { useLocation } from "react-router-dom";
import { Section } from "../components/render";
import { useTheme } from "@mui/material";
const axios = require("axios");
export default function ResultPage() {
    const theme = useTheme();
    const [result, setResult] = useState();
    const [pass, setPass] = useState(false);
    const location = useLocation();
    useEffect(() => {
        const callData = async () => {
            console.log(location.state.list_ans);
            const response = await axios.post(
                "https://52scxm.deta.dev/submit",
                {
                    list_ans: location.state.list_ans,
                }
            );
            console.log(response.data["list_data"]);
            setResult(response.data["list_data"]);
            setPass(
                response.data["list_data"]["number_of_correct"] ===
                    response.data["list_data"]["number_of_question"]
                    ? true
                    : false
            );
        };
        callData();
    }, []);
    return (
        <>
            <Typography variant="h3">
                {result &&
                    "Kết quả: " +
                        result["number_of_correct"] +
                        "/" +
                        result["number_of_question"]}
            </Typography>
            {result &&
                (pass ? (
                    <>
                        <MotivationIllustration
                            sx={{
                                p: 3,
                                width: 400,
                                margin: { xs: "auto", md: "inherit" },
                                display: { xs: "none", md: "block" },
                            }}
                        />
                        <Typography
                            variant="h4"
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            Chúc mừng bạn đã vượt qua bài kiểm tra
                        </Typography>
                    </>
                ) : (
                    <>
                        <Typography variant="h6">
                            Hãy xem lại nội dung gợi ý và tiếp tục cố gắng nhé
                        </Typography>
                        {result["detail"].map((item,i) => {
                            return (
                                <>
                                    <Typography variant="h4"
                                        sx={{
                                            mt: 3,
                                            color: theme.palette.primary.main,
                                        }}
                                        key={i}
                                    >
                                        {item["ten_noi_dung"]}
                                    </Typography>
                                    {item["content"].map((muc, index) => {
                                        return (
                                            <Card
                                                key={"card"+index.toString()}
                                                sx={{
                                                    mt: 3,
                                                }}
                                            >
                                                <CardContent>
                                                    <Section section={muc} />
                                                </CardContent>
                                            </Card>
                                        );
                                    })}
                                </>
                            );
                        })}
                    </>
                ))}
        </>
    );
}
