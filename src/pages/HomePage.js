import {
    Container,
    Grid,
    Typography,
    Card,
    CardContent,
    CardActionArea,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Welcome from "../components/Welcome";
import CustomCard from "../components/CustomCard";
import { GrGoogle } from "react-icons/gr";
import {SiLeetcode} from "react-icons/si";
export default function HomePage() {
    const theme = useTheme();
    const styleIcon={
        width: 120,
        height: 120,
        opacity: 0.12,
        position: "absolute",
        right: theme.spacing(-3),
        color: theme.palette.common.white,
    }
    return (
        <Container>
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <Welcome />
                </Grid>
                <Grid item xs={6}>
                    <CustomCard
                        title="Google"
                        description={
                            "Dụng cụ tốt nhất mọi thời đại của developer"
                        }
                        icon = {<GrGoogle style={styleIcon}/>}
                    >
                    </CustomCard>
                </Grid>
                <Grid item xs={6}>
                    <CustomCard
                        title="Leet Code"
                        description={
                            "Phải mang lý thuyết vào thực nghiệm mới tốt hơn được"
                        }
                        icon = {<SiLeetcode style={styleIcon}/>}
                    >
                    </CustomCard>
                </Grid>
            </Grid>
        </Container>
    );
}