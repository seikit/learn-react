import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import { menuLinks } from "./MenuLinks";
import { Fragment } from "react";

const SideBar = (props) => {
    return (
        <Fragment>
            <Toolbar sx={{display: 'flex', alignItems: 'center', justifyContent: 'flex-end', px: [1],}}>
                <IconButton onClick={props.toggleDrawer}>
                    <ChevronLeftIcon/>
                </IconButton>
            </Toolbar>
            <Divider/>
            <List>{menuLinks}</List>
        </Fragment>
    );

}

export default SideBar;