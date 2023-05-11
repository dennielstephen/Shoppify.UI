import { useState } from 'react';
// import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography, Button, Drawer, List, ListItem, ListItemText } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <AppBar elevation={0} className='sticky bg-white/30 backdrop-blur-xl'>
      <Toolbar className="flex justify-between">
        {/* Logo */}
        <Button className="flex items-center gap-2">
          <img src="/logo.svg" alt="Logo" className="h-8" />
          <Typography variant="h6" className=" text-black font-sans">Shoppify</Typography>
        </Button>

        {/* Middle Navigation */}
        <nav className="hidden md:block">
          <Button className="mx-2 text-black">
            Mens
          </Button>
          <Button className="mx-2 text-black">
            Womens
          </Button>
          <Button className="mx-2 text-black">
            Accessories
          </Button>
          <Button className="mx-2 text-black">
            About
          </Button>
        </nav>

        {/* Profile and Cart */}
        <div className="flex items-center gap-4">
          <IconButton color="inherit" aria-label="Shopping Cart" className='text-black'>
            {/* <ShoppingCartIcon /> */}
            Shopping Cart
          </IconButton>
          <IconButton color="inherit" aria-label="Profile" className='text-black'>
            {/* <AccountCircleIcon /> */}
            Account
          </IconButton>

          {/* Hamburger menu for mobile */}
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerOpen}
            className="md:hidden"
          >
            {/* <MenuIcon /> */}
            Menu
          </IconButton>

          {/* Mobile Navigation Drawer */}
          <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerClose}>
            <List>
              <ListItem onClick={handleDrawerClose}>
                <ListItemText primary="Mens" />
              </ListItem>
              <ListItem  onClick={handleDrawerClose}>
                <ListItemText primary="Womens" />
              </ListItem>
              <ListItem onClick={handleDrawerClose}>
                <ListItemText primary="Accessories" />
              </ListItem>
              <ListItem onClick={handleDrawerClose}>
                <ListItemText primary="About" />
              </ListItem>
            </List>
          </Drawer>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
