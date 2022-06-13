import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Grid from '@mui/material/Grid'
import { NavLink,useNavigate } from 'react-router-dom';



const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export default function Navbar() {
  const navigate = useNavigate()
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };  
  
  return (
    <Box  sx={{ flexGrow: 1 }}>
      <AppBar sx={{backgroundColor:'yellow'}} position="static">
        <Toolbar>
           <Grid container >
             
           <Grid item lg={3} sm={6} xs={12} >
         <Typography variant="h6" component="div" sx={{ flexGrow:0,color:'black' }}>
      
      <Tooltip title="Wellcome to dashboard">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
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
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">
                    
                   {setting}
                    
                    
                    </Typography>
                </MenuItem>
              ))}
            </Menu>
          
         
          </Typography>
          </Grid>  
          <Grid item lg={3} sm={6} xs={12}>
         <Typography variant="h6" component="div" sx={{ flexGrow:0,color:'black' }}>
         <NavLink to='.\Home' style={{ textDecoration: 'none'}}>Home</NavLink>
          </Typography>
          </Grid>  
          <Grid item lg={3} sm={6} xs={12}>
         <Typography variant="h6" component="div" sx={{ flexGrow:0,color:'black' }}>
            <NavLink to='.\About' style={{ textDecoration: 'none'}}>About</NavLink>
          </Typography>
          </Grid>  
          <Grid item lg={3} sm={6} xs={12}>
         <Typography variant="h6" component="div" sx={{ flexGrow:0,color:'black' }} >
         <NavLink to='.\SignUp' style={{ textDecoration: 'none'}}>SignUp</NavLink>
          </Typography>
          
          </Grid>           
          
          
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
