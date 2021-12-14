import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Toolbar from "@mui/material/Toolbar";

const TopBar = (props) => {
    return (
        <Toolbar sx={{pr: '24px',}}>
            <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={props.toggleDrawer}
                sx={{
                    marginRight: '36px', ...(props.open && {display: 'none'}),
                }}
            >
                <MenuIcon/>
            </IconButton>
            <Typography
                component="h1"
                variant="h6"
                color="inherit"
                noWrap
                sx={{flexGrow: 1}}
            >
                Logo - Nome
            </Typography>
            <IconButton color="inherit">
                <Badge color="secondary">
                    <AccountCircleIcon/>
                </Badge>
            </IconButton>
        </Toolbar>
    );
}

export default TopBar;