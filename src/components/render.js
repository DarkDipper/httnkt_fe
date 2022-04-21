import {
    Grid,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Typography,
} from "@mui/material";
import { CodeBlock, monokai } from "react-code-blocks";
export const Code = ({ children }) => (
    <Grid
        container
        sx={{
            mt: 3,
            mb: 3,
        }}
    >
        <Grid item xs={7}>
            <CodeBlock
                text={children}
                theme={monokai}
                language="cpp"
                customStyle={{
                    borderRadius: "5px",
                    fontSize: "0.65rem",
                }}
            />
        </Grid>
    </Grid>
);
export const TableCode = ({ children }) => {
    const keys = Object.keys(children);
    let rows = [];
    for (let i = 0; i < children[keys[0]].length; i++) {
        let row = (
            <TableRow key={i}>
                {keys.map((item, index) => (
                    <TableCell key={index}>{children[item][i]}</TableCell>
                ))}
            </TableRow>
        );
        rows.push(row);
    }
    return (
        <TableContainer
            sx={{
                mt: 3,
                mb: 3,
            }}
        >
            <Table aria-label="simple table">
                {keys[0] !== "0" && (
                    <TableHead>
                        <TableRow>
                            {keys.map((header, index) => (
                                <TableCell key={index} align={"center"}>{header}</TableCell>
                        ))}

                        </TableRow>
                    </TableHead>
                )}
                <TableBody>{rows}</TableBody>
            </Table>
        </TableContainer>
    );
};
export const Image = ({ src }) => {
    return (
        <Grid
            container
            sx={{
                mt: 3,
                mb: 3,
            }}
        >
            <Grid item xs={2} />
            <Grid item xs={9}>
                <img src={src} alt=" " />
            </Grid>
            <Grid item xs={1} />
        </Grid>
    );
};
export const Section = ({ section }) => {
    let contents = [];
    for (
        let i = 0;
        i <
        (section["noi_dung"].length > section["bo_sung"].length
            ? section["noi_dung"].length
            : section["bo_sung"].length);
        i++
    ) {
        section["noi_dung"][i] &&
            contents.push(
                <Typography
                    variant="body2"
                    sx={{
                        whiteSpace: "pre-line",
                    }}
                    key={i}
                >
                    {section["noi_dung"][i]}
                </Typography>
            );
        if (section["bo_sung"][i]) {
            if (section["bo_sung"][i]["Loai"] === "code") {
                contents.push(
                    <Code key={'Code'+i.toString()}>{section["bo_sung"][i]["noi_dung"]}</Code>
                );
            } else if (section["bo_sung"][i]["Loai"] === "img") {
                contents.push(
                    <Image src={section["bo_sung"][i]["noi_dung"]} key={'Image'+i.toString()} />
                );
            } else if (section["bo_sung"][i]["Loai"] === "table") {
                contents.push(
                    <TableCode key={'TableCode'+i.toString()}>{section["bo_sung"][i]["noi_dung"]}</TableCode>
                );
            }
        }
    }
    return (
        <>
            <Typography variant="h4">{section["ten_muc"]}</Typography>
            {contents}
        </>
    );
};
