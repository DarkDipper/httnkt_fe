import { useState } from "react";
import { useNavigate, useSearchParams, useLocation } from "react-router-dom";
// @mui
import { styled } from "@mui/material/styles";
import {
    Input,
    Slide,
    Button,
    InputAdornment,
    ClickAwayListener,
    IconButton,
} from "@mui/material";
// utils
import cssStyles from "../utils/cssStyles";

import { BiSearch as SearchIcon } from "react-icons/bi";
// ----------------------------------------------------------------------

const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 92;

const SearchbarStyle = styled("div")(({ theme }) => ({
    ...cssStyles(theme).bgBlur(),
    top: 0,
    left: 0,
    zIndex: 99,
    width: "100%",
    display: "flex",
    position: "absolute",
    alignItems: "center",
    height: APPBAR_MOBILE,
    padding: theme.spacing(0, 3),
    boxShadow: theme.customShadows.z8,
    [theme.breakpoints.up("md")]: {
        height: APPBAR_DESKTOP,
        padding: theme.spacing(0, 5),
    },
}));

// ----------------------------------------------------------------------

export default function Searchbar() {
    const navigate = useNavigate();
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    const [isOpen, setOpen] = useState(false);
    const [query, setQuery] = useState(searchParams.get("query"));

    const handleOpen = () => {
        setOpen((prev) => !prev);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSearch = () => {
        handleClose();
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        handleSearch();
    };

    return (
        <ClickAwayListener onClickAway={handleClose}>
            <form
                onSubmit={(e) => {
                    handleSubmit(e);
                }}
            >
                <div>
                    {!isOpen && (
                        <IconButton onClick={handleOpen}>
                            <SearchIcon />
                        </IconButton>
                    )}

                    <Slide
                        direction="down"
                        in={isOpen}
                        mountOnEnter
                        unmountOnExit
                    >
                        <SearchbarStyle>
                            <Input
                                autoFocus
                                fullWidth
                                disableUnderline
                                placeholder="Search…"
                                startAdornment={
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                }
                                sx={{ mr: 1, fontWeight: "fontWeightBold" }}
                                value={query}
                                onChange={(e) => {
                                    setQuery(e.target.value);
                                }}
                            />
                            <Button
                                type="submit"
                                variant="contained"
                                onClick={handleSearch}
                            >
                                Search
                            </Button>
                        </SearchbarStyle>
                    </Slide>
                </div>
            </form>
        </ClickAwayListener>
    );
}
