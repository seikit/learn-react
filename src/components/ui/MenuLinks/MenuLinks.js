import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from '@mui/material/ListItemText';
import Group from "@mui/icons-material/Group";
import ConstructionIcon from '@mui/icons-material/Construction';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import FactoryIcon from '@mui/icons-material/Factory';
import { Link } from "react-router-dom"
import classes from "./MenuLinks.module.css";

export const menuLinks = (
    <div>
        <Link to="/clientes" className={classes.menuLink}>
            <ListItem button>
                <ListItemIcon>
                    <Group/>
                </ListItemIcon>
                <ListItemText primary="Clientes"/>
            </ListItem>
        </Link>
        <Link to="/materiais" className={classes.menuLink}>
            <ListItem button>
                <ListItemIcon>
                    <ConstructionIcon/>
                </ListItemIcon>
                <ListItemText primary="Materiais"/>
            </ListItem>
        </Link>
        <Link to="/projetos" className={classes.menuLink}>
            <ListItem button>
                <ListItemIcon>
                    <FactoryIcon/>
                </ListItemIcon>
                <ListItemText primary="Projetos"/>
            </ListItem>
        </Link>
        <Link to="/propostas" className={classes.menuLink}>
            <ListItem button>
                <ListItemIcon>
                    <PictureAsPdfIcon/>
                </ListItemIcon>
                <ListItemText primary="Propostas"/>
            </ListItem>
        </Link>
    </div>
)