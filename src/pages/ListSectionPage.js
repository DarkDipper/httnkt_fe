import {Box, Card, CardContent, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Section } from "../components/render";
const axios = require("axios");
//4501104147@student.hcmue.edu.vn
export default function ListSectionPage() {
    const [keyWord, setKeyWord] = useState(useParams().keyword);
    const [listSection, setListSection] = useState([]);
    useEffect(() => {
        const callData = async () => {
            const response = await axios.get(`https://52scxm.deta.dev/find/${keyWord}`);
            setListSection(response.data["list_data"]);
        };
        callData();
    },[keyWord]);
    return (
        <Box>
            {listSection.map((item, index) => {
                    return (
                        <Card key={index} sx={{
                            mt: 3,
                        }}>
                            <CardContent>
                                <Section section={item}/>
                            </CardContent>
                        </Card>
                    )
            })}
        </Box>
    );
}
