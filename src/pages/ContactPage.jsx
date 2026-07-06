import { Container, Typography, Card, CardContent, Stack, Button } from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import profile from '../data/profile';
import SocialLinks from '../components/SocialLinks';

export default function ContactPage() {
  return (
    <Container maxWidth="md">
      <Typography variant="h3" component="h1" gutterBottom>
        Get in touch
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 560 }}>
        The fastest way to reach me is email. I’m also on GitHub and LinkedIn.
      </Typography>
      <Card sx={{ maxWidth: 480 }}>
        <CardContent>
          <Stack spacing={2} alignItems="flex-start">
            <Button
              variant="contained"
              startIcon={<EmailOutlinedIcon />}
              href={`mailto:${profile.email}`}
            >
              {profile.email}
            </Button>
            <SocialLinks />
          </Stack>
        </CardContent>
      </Card>
    </Container>
  );
}
