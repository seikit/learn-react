import CssBaseline from "@mui/material/CssBaseline";
import CustomAppBar from "./CustomAppBar";
import TopBar from "./TopBar";
import CustomDrawer from "./CustomDrawer";
import SideBar from "./SideBar";
import {Fragment, useState} from "react";

const MainNavigation = () => {
    const [open, setOpen] = useState()
    const handleToggleSideBar = () => {
        setOpen(!open);
    }

    return (
        <Fragment>
            <CssBaseline/>
            <CustomAppBar position="absolute" open={open}>
                <TopBar toggleDrawer={handleToggleSideBar} open={open}/>
            </CustomAppBar>

            <CustomDrawer variant="permanent" open={open}>
               <SideBar toggleDrawer={handleToggleSideBar}/>
            </CustomDrawer>
        </Fragment>
    )
}

export default MainNavigation;