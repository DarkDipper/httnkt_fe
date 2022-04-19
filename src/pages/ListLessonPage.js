import { Typography, Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import navConfig from "../components/NavConfig";
import CustomCard from "../components/CustomCard";
import { GiBookshelf } from "react-icons/gi";
export default function ListLessonPage() {
    const theme = useTheme();
    const idParam = parseInt(useParams().id);
    const [listLessons, setlistLessons] = useState([]);
    const [Title, setTitle] = useState("");
    const styleIcon = {
        width: 120,
        height: 120,
        opacity: 0.12,
        position: "absolute",
        right: theme.spacing(-3),
        color: theme.palette.common.white,
    };
    useEffect(() => {
        const { id, title, listLesson } = navConfig
            .find((item) => item.subheader === "Lý thuyết")
            .items[0].children.find((item) => item.id === idParam);
        // console.log(listLesson);
        setlistLessons(listLesson);
        setTitle(title);
    }, [idParam]);
    return (
        <>
            {/* <Typography variant="h3"
                sx={{
                mb:3
            }}>{"Chương: " + Title}</Typography> */}
            <Grid container spacing={2}>
                {listLessons &&
                    listLessons.map((item, index) => {
                        return (
                            <Grid key={index} item xs={12} md={6}>
                                <CustomCard
                                    title={item.title}
                                    icon={<GiBookshelf style={styleIcon} />}
                                />
                            </Grid>
                        );
                    })}
            </Grid>
        </>
    );
}
