import { useState } from 'react';
// import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography, Button, Drawer, List, ListItem, ListItemText, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import reactLogo from '../../assets/react.svg';


const pages = ['Mens', 'Womens', 'Accessories', 'About']
const profiles = ['My Orders', 'Profile', 'Login']

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };


  return (
    <AppBar elevation={0} className='sticky bg-white/30 backdrop-blur-xl'>
      <Toolbar className="flex justify-between">
        {/* Logo */}
        <Button className="flex items-center gap-2">
          <img src={reactLogo} alt="Logo" className="h-8" />
          <Typography variant="h6" className=" text-black font-sans">Shoppify</Typography>
        </Button>

        {/* Middle Navigation */}
        <nav className="hidden md:block">
          {pages.map((page) => (
            <Button key={page} className="mx-2 text-black">
              {page}
            </Button>
          ))}
          {/* <Button className="mx-2 text-black">
            Womens
          </Button>
          <Button className="mx-2 text-black">
            Accessories
          </Button>
          <Button className="mx-2 text-black">
            About
          </Button> */}
        </nav>

        {/* Profile and Cart */}
        <nav className="flex items-center gap-4">
          <IconButton className='fill-black' aria-label="Shopping Cart">
            <ShoppingCartIcon />
          </IconButton>
          <IconButton className='fill-black' onClick={handleMenuOpen} onMouseOver={handleMenuOpen} edge="end" aria-label="Profile" aria-haspopup="true">
            <AccountCircleIcon />
          </IconButton>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose} MenuListProps={{onMouseLeave:handleMenuClose}}>

            {profiles.map((profile) => (
              <MenuItem key={profile} onClick={handleMenuClose}>{profile}</MenuItem>
            ))}
            {/* <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>Login</MenuItem> */}
          </Menu>

          {/* Hamburger menu for mobile */}
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerOpen}
            className="md:hidden"
          >
            <MenuIcon className='fill-black' />
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
        </nav>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
