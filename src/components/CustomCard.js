import { Typography, Card, CardActionArea, Box } from "@mui/material";
import { useTheme, styled } from "@mui/material";

const RootStyle = styled(CardActionArea)(({ theme }) => ({
    display: "flex",
    position: "relative",
    alignItems: "center",
    padding: theme.spacing(3),
    backgroundColor: theme.palette.primary.darker,
    justifyContent: "start",
}));
export default function CustomCard({ title, description, icon }) {
    const theme = useTheme();
    return (
        <Card>
            <RootStyle
                sx={{
                    bgcolor: theme.palette.primary.darker,
                }}
            >
                <Box sx={{ ml: 3, color: "common.white" }}>
                    <Typography gutterBottom variant="h4">
                        {title}
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.72 }}>
                        {description}
                    </Typography>
                </Box>
                {icon}
            </RootStyle>
        </Card>
    );
}
