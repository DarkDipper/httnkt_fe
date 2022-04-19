import {
    Grid,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Divider
} from "@mui/material";
import { CodeBlock, monokai } from "react-code-blocks";
export const Code = ({ children }) => (
    <Grid
        Container
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
                        {keys.map((item, index) => (
                            <TableCell key={index}>{item}</TableCell>
                        ))}
                    </TableHead>
                )}
                <TableBody>{rows}</TableBody>
            </Table>
            <Divider/>
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
                <img src={src} />
            </Grid>
            <Grid item xs={1} />
        </Grid>
    );
};
