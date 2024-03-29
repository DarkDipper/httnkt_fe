// @mui
import { styled } from "@mui/material/styles";
import { List, Box, ListSubheader, Container } from "@mui/material";
//
import { NavListRoot } from "./NavList";
// ----------------------------------------------------------------------

export const ListSubheaderStyle = styled((props) => (
    <ListSubheader disableSticky disableGutters {...props} />
))(({ theme }) => ({
    ...theme.typography.overline,
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(1),
    color: theme.palette.text.primary,
    transition: theme.transitions.create("opacity", {
        duration: theme.transitions.duration.shorter,
    }),
}));

// ----------------------------------------------------------------------

export default function NavSectionVertical({
    navConfig,
    isCollapse = false,
    ...other
}) {
    return (
        <Box {...other}>
            {navConfig.map((group) => (
                <List key={group.subheader} disablePadding>
                    <Container>
                        <ListSubheaderStyle
                            sx={{
                                ...(isCollapse && {
                                    opacity: 0,
                                }),
                            }}
                        >
                            {group.subheader}
                        </ListSubheaderStyle>
                    </Container>
                    {group.items.map((list) => (
                        <NavListRoot
                            key={list.title}
                            list={list}
                            isCollapse={isCollapse}
                        />
                    ))}
                </List>
            ))}
        </Box>
    );
}
