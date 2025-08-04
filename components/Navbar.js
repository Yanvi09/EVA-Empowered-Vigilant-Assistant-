import { AppBar, Toolbar, Typography, Button, IconButton, Stack } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: 'white', color: 'var(--secondary)', zIndex: 1200 }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" sx={{ color: 'var(--primary)', fontWeight: 700 }}>
          EVA
        </Typography>

        <Stack direction="row" spacing={2}>
          <a href="#hero"><Button color="inherit">Home</Button></a>
          <a href="#core-features"><Button color="inherit">Features</Button></a>
          <a href="#plans"><Button color="inherit">Plans</Button></a>
          <a href="#courses"><Button color="inherit">Courses</Button></a>
          <a href="#testimonials"><Button color="inherit">Stories</Button></a>
          <a href="#contact"><Button color="inherit">Contact</Button></a>
        </Stack>

        <IconButton color="inherit" sx={{ display: { xs: 'block', md: 'none' } }}>
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
