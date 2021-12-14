import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from '@mui/material/ListItemText';
import Group from "@mui/icons-material/Group";
import ConstructionIcon from '@mui/icons-material/Construction';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import FactoryIcon from '@mui/icons-material/Factory';

export const menuLinks = (
    <div>
        <ListItem button>
            <ListItemIcon>
                <Group/>
            </ListItemIcon>
            <ListItemText primary="Clientes"/>
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <ConstructionIcon/>
            </ListItemIcon>
            <ListItemText primary="Materiais"/>
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <PictureAsPdfIcon/>
            </ListItemIcon>
            <ListItemText primary="Propostas"/>
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <FactoryIcon/>
            </ListItemIcon>
            <ListItemText primary="Projetos"/>
        </ListItem>
    </div>
)