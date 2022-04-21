import { Container, Typography } from "@mui/material";
import { Code, TableCode, Image, Section } from "../components/render";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const axios = require("axios");

export default function LessonPage() {
    const [idContent, setIdContent] = useState(useParams().id_content);
    const [lesson, setLesson] = useState([]);
    useEffect(() => {
        const callData = async () => {
            const response = await axios.get(
                `https://52scxm.deta.dev/content/id/${idContent}`
            );
            // console.log(response.data["list_data"]);
            setLesson(response.data["list_data"]);
        };
        callData();
    }, [idContent]);
    return (
        <>
            <Typography variant="h3">{lesson["ten_noi_dung"]}</Typography>
            <Typography variant="subtitle2">{lesson["Mo_ta"]}</Typography>
            {lesson["Phan_muc"] &&
                lesson["Phan_muc"].map((muc, index) => {
                    return <Section key={index} section={muc} />;
                })}
        </>
    );
}
