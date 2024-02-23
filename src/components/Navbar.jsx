import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ArrowDownAltIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
import { useMediaQuery, useTheme, Menu, MenuItem } from '@mui/material';
import Image from 'next/image';

const drawerWidth = 240;
const navItems = [
  '',
  'Our Services',
  'About MEFIC',
  'Media Center',
  'Careers',
];

function Navbar(props) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const { window } = props;
  const theme = useTheme();
  const isXSmallScreen = useMediaQuery('(max-width: 1042px)');
  const isTabScreen = useMediaQuery('(max-width: 943px)');
  const isTabletScreen = useMediaQuery('(min-width: 1200px)');
  const isSmallScreen = useMediaQuery('(max-width: 900px)');
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
    setDrawerOpen(!drawerOpen);
  };

  const handleDropdownToggle = (event) => {
    if (anchorEl && anchorEl === event.currentTarget) {
      setAnchorEl(null);
    } else {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleDropdownClose = () => {
    setAnchorEl(null);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Divider />
      <List>
        {navItems.map((item, index) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{ textAlign: 'center' }}
              onClick={(event) => handleDropdownToggle(event)}
            >
              <ListItemText primary={item} />
              {index !== 0 && (index === 2 || index === 1) && <ArrowDownAltIcon />}
            </ListItemButton>
            <Menu
              id={item}
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleDropdownClose}
              MenuListProps={{
                'aria-labelledby': item,
              }}
            >
              <MenuItem onClick={handleDropdownClose}>Item 1</MenuItem>
              <MenuItem onClick={handleDropdownClose}>Item 2</MenuItem>
              <MenuItem onClick={handleDropdownClose}>Item 3</MenuItem>
            </Menu>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box>
      <AppBar
        component="nav"
        sx={{
          display: 'flex',
          flexDirection: 'row',
          paddingX: isTabletScreen ? '100px' : '0px',
          justifyContent: 'space-around',
          backgroundColor: '#1E2538',
          boxShadow: 'none',
          paddingY: '15px',
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <Image
            src="./weblogo 2.svg"
            alt=""
            width={isXSmallScreen ? 100 : 150}
            height={isXSmallScreen ? 35 : 50}
          />
          <Box>
            {isMediumScreen ? null : (
              navItems.map((item, index) => (
                <Button
                  key={item}
                  aria-controls={item}
                  aria-haspopup="true"
                  onClick={(event) => handleDropdownToggle(event)}
                  sx={{
                    fontSize: isTabScreen ? '12px' : '',
                    paddingX: '1rem',
                    textTransform: 'none',
                    color: '#fff',
                    fontFamily:"Open Sans"
                  }}
                >
                  {item}
                  {index !== 0 && (index === 2 || index === 1) && <ArrowDownAltIcon />}
                </Button>
              ))
            )}
            <Button
              variant="contained"
              sx={{
                maxWidth: '20rem',
                minHeight: '3rem',
                fontWeight: 600,
                marginLeft: '50px',
                textTransform: 'none',
                background: '#E95A0C',
                display: isSmallScreen ? 'none' : '',
              }}
              endIcon={<ArrowRightAltIcon />}
              icon={ArrowRightAltIcon}
            >
              Contact us
            </Button>
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{
              display: { md: 'none' },
              right: mobileOpen ? '10px' : '',
              transition: 'right 0.3s ease-in-out',
              marginRight: '0px',
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant={isSmallScreen ? 'temporary' : 'permanent'}
          open={mobileOpen}
          anchor="right"
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              backgroundColor:"#E95A0C"
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

Navbar.propTypes = {
  window: PropTypes.func,
};

export default Navbar;
