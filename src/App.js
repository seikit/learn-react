import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import MainNavigation from "./components/ui/MainNavigation";
import { Routes, Route } from "react-router-dom";
import Customers from "./pages/Customers";
import Materials from "./pages/Materials";
import Projects from "./pages/Projects";
import Proposals from "./pages/Proposals";

const mdTheme = createTheme({
    shape: {
        borderRadius: 4,
    },
});


function App() {
    return (<ThemeProvider theme={mdTheme}>
        <Box sx={{display: 'flex'}}>
            <MainNavigation></MainNavigation>
            <Box
                component="main"
                sx={{
                    backgroundColor: (theme) => theme.palette.mode === 'dark' ? theme.palette.grey[100] : theme.palette.grey[900],
                    flexGrow: 1,
                    height: '100vh',
                    overflow: 'auto',
                }}
            >
                <Toolbar/>
                <Container maxWidth="xl" sx={{mt: 4, mb: 4}} disableGutters={true}>
                    <Routes>
                        <Route path="/clientes" element={<Customers />} />
                        <Route path="/materiais" element={<Materials />} />
                        <Route path="/projetos" element={<Projects />} />
                        <Route path="/propostas" element={<Proposals />} />
                    </Routes>
                </Container>
            </Box>
        </Box>
    </ThemeProvider>);
}

export default App;
