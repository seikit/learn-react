import './App.css';
import {styled, createTheme, ThemeProvider} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import MainNavigation from "./components/ui/MainNavigation";

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
                <Container maxWidth="lg" sx={{mt: 4, mb: 4}}>
                    // Render content here
                </Container>
            </Box>
        </Box>
    </ThemeProvider>);
}

export default App;
