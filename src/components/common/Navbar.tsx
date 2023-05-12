import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography, Button, Drawer, List, ListItem, ListItemText, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import reactLogo from '../../assets/react.svg';

const profiles = ['Profile', 'My Orders', 'Login']

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null)
  

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  };

  return (
    <AppBar elevation={0} className='sticky bg-white/30 backdrop-blur-xl'>
      <Toolbar className="flex justify-between">
        {/* Logo */}
        <Link to="/">
          <Button className="flex items-center gap-2">
            <img src={reactLogo} alt="Logo" className="h-8" />
            <Typography variant="h6" className=" text-black font-sans">Shoppify</Typography>
          </Button>
        </Link>

        {/* Middle Navigation */}
        <nav className="hidden md:block">
          <Link to="/">
            <Button className="mx-2 text-black">
              Mens
            </Button>
          </Link>
          <Link to="/">
            <Button className="mx-2 text-black">
              Womens
            </Button>
          </Link>
          <Link to="/">
            <Button className="mx-2 text-black">
              Accessories
            </Button>
          </Link>
          <Link to="/about">
            <Button className="mx-2 text-black">
              About
            </Button>
          </Link>
        </nav>

        {/* Profile and Cart */}
        <div className="flex items-center gap-4">
          <IconButton onClick={handleOpenUserMenu} onMouseOver={handleOpenUserMenu} className='fill-black' aria-label="Profile">
            <AccountCircleIcon />
          </IconButton>
          <Menu
              sx={{ mt: '45px' }}
              id='menu-appbar'
              anchorEl={anchorElUser}
              anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
              MenuListProps={{ onMouseLeave: handleCloseUserMenu }}
          >
              {profiles.map((profile) => (
                  <MenuItem key={profile} onClick={handleCloseUserMenu}>
                      <Typography textAlign='center'>{profile}</Typography>
                  </MenuItem>
              ))}
          </Menu>
          <IconButton className='fill-black' aria-label="Shopping Cart">
            <ShoppingCartIcon />
          </IconButton>


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
              <ListItem onClick={handleDrawerClose}>
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
