import { Box, Container, Typography } from '@mui/material';
import SocialLinks from '../SocialLinks';
import profile from '../../data/profile';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={(theme) => ({ borderTop: `1px solid ${theme.vars.palette.divider}`, py: 3 })}
    >
      <Container
        maxWidth="md"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 1,
        }}
      >
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} {profile.name}
        </Typography>
        <SocialLinks />
      </Container>
    </Box>
  );
}
