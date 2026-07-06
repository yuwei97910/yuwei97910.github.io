import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Typography,
  useColorScheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { Link, NavLink } from 'react-router-dom';
import profile from '../../data/profile';

const navItems = [
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Blog', to: '/blog' },
  { label: 'Resume', to: '/resume' },
  { label: 'Contact', to: '/contact' },
];

function ModeToggle() {
  const { mode, systemMode, setMode } = useColorScheme();
  const resolved = mode === 'system' ? systemMode : mode;
  if (!resolved) return null;
  return (
    <IconButton
      color="inherit"
      aria-label="toggle dark mode"
      onClick={() => setMode(resolved === 'dark' ? 'light' : 'dark')}
    >
      {resolved === 'dark' ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
    </IconButton>
  );
}

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <AppBar
      position="sticky"
      color="transparent"
      elevation={0}
      sx={(theme) => ({
        backdropFilter: 'blur(8px)',
        backgroundColor: `color-mix(in srgb, ${theme.vars.palette.background.default} 80%, transparent)`,
        borderBottom: `1px solid ${theme.vars.palette.divider}`,
      })}
    >
      <Container maxWidth="md">
        <Toolbar disableGutters>
          <Typography
            component={Link}
            to="/"
            variant="h6"
            sx={{ flexGrow: 1, color: 'inherit', textDecoration: 'none' }}
          >
            {profile.name}
          </Typography>

          <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 0.5, alignItems: 'center' }}>
            {navItems.map((item) => (
              <Button
                key={item.to}
                component={NavLink}
                to={item.to}
                color="inherit"
                sx={{ '&.active': { color: 'primary.main' } }}
              >
                {item.label}
              </Button>
            ))}
            <ModeToggle />
          </Box>

          <Box sx={{ display: { xs: 'flex', sm: 'none' }, alignItems: 'center' }}>
            <ModeToggle />
            <IconButton color="inherit" aria-label="open menu" onClick={() => setDrawerOpen(true)}>
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>

      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <List sx={{ width: 220 }}>
          {navItems.map((item) => (
            <ListItemButton
              key={item.to}
              component={NavLink}
              to={item.to}
              onClick={() => setDrawerOpen(false)}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
}
