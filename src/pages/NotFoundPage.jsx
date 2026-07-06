import { Container, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <Container maxWidth="md">
      <Box sx={{ textAlign: 'center', py: 8 }}>
        <Typography variant="h1" color="primary" gutterBottom>
          404
        </Typography>
        <Typography variant="h5" gutterBottom>
          This page doesn’t exist.
        </Typography>
        <Button variant="contained" component={Link} to="/" sx={{ mt: 2 }}>
          Back home
        </Button>
      </Box>
    </Container>
  );
}
