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
export default function CustomCard({ title, description, icon, link=null, component,target, to }) {
    const theme = useTheme();
    return (
        <Card>
            <RootStyle
                sx={{
                    bgcolor: theme.palette.primary.darker,
                    height:"110px"
                }}
                component={component}
                href={link}
                target={target}
                to={to}
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
