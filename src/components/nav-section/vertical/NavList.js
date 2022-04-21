import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
// @mui
import { List, Collapse } from "@mui/material";
//
import { NavItemRoot, NavItemSub } from "./NavItem";
import { getActive } from "..";
const axios = require("axios");

// ----------------------------------------------------------------------

export function NavListRoot({ list, isCollapse }) {
    const { pathname } = useLocation();
    const active = getActive(list.path, pathname);
    const [Chapter,setChapter] = useState(null);
    const [open, setOpen] = useState(active);
    useEffect(() => {
        const callData = async () => {
            const response = await axios.get(list.getChapters);
            // console.log(response);
            setChapter(response.data["list_data"]);
        };
        if (list.getChapters) callData();
    }, [list.getChapters]);
    if (Chapter) {
        return (
            <>
                <NavItemRoot
                    item={list}
                    isCollapse={isCollapse}
                    active={active}
                    open={open}
                    onOpen={() => setOpen(!open)}
                />

                {!isCollapse && (
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            {(Chapter || []).map((item) => (
                                <NavListSub key={item["id"]} list={item} />
                            ))}
                        </List>
                    </Collapse>
                )}
            </>
        );
    }

    return <NavItemRoot item={list} active={active} isCollapse={isCollapse} />;
}

// ----------------------------------------------------------------------

function NavListSub({ list }) {
    const { pathname } = useLocation();

    const active = getActive(list.path, pathname);


    return <NavItemSub item={list} active={active} />;
}
