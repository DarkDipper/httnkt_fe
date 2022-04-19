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
export default function CustomCard({ title, description, icon, link="#", component="a" }) {
    const theme = useTheme();
    return (
        <Card>
            <RootStyle
                sx={{
                    bgcolor: theme.palette.primary.darker,
                }}
                component={component}
                href={link}
                target="_blank"
            >
                <Box sx={{ ml: 3, color: "common.white" }}>
                    <Typography gutterBottom variant="h4">
                        {title}
                    </Typography>
                    {description && (<Typography variant="body2" sx={{ opacity: 0.72 }}>
                        {description}
                    </Typography>)}
                </Box>
                {icon && icon}
            </RootStyle>
        </Card>
    );
}
