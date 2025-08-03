import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: 'white', color: 'var(--secondary)' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, color: 'var(--primary)' }}>
          EVA
        </Typography>
        <Button color="inherit">Home</Button>
        <Button color="inherit">Features</Button>
        <Button color="inherit">Plans</Button>
        <Button color="inherit">Dashboard</Button>
        <Button color="inherit">Contact</Button>
        <IconButton color="inherit">
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
