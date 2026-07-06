import { Container, Typography, Box, Button, Grid, Stack } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';
import profile from '../data/profile';
import projects from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import SocialLinks from '../components/SocialLinks';

export default function HomePage() {
  const featured = projects.filter((p) => p.featured).slice(0, 2);

  return (
    <>
      <Box
        sx={{
          position: 'relative',
          minHeight: { xs: 470, md: 560 },
          display: 'flex',
          alignItems: 'flex-end',
          color: 'common.white',
          backgroundImage:
            'linear-gradient(90deg, rgba(10, 18, 33, 0.92) 0%, rgba(10, 18, 33, 0.72) 46%, rgba(10, 18, 33, 0.36) 100%), url(/images/safe-edge-ai-architecture.svg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Container maxWidth="md">
          <Box sx={{ py: { xs: 5, md: 7 }, maxWidth: 720 }}>
            <Typography variant="overline" sx={{ color: 'secondary.light' }}>
              {profile.tagline}
            </Typography>
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              sx={{ fontSize: { xs: '2.35rem', sm: '3rem', md: '3.75rem' }, lineHeight: 1.05 }}
            >
              {profile.headline}
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: 600, mb: 3, color: 'grey.100' }}>
              {profile.intro}
            </Typography>
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              useFlexGap
              sx={{
                flexWrap: 'wrap',
                '& .MuiIconButton-root': { color: 'common.white' },
              }}
            >
              <Button
                variant="contained"
                component={Link}
                to="/projects"
                endIcon={<ArrowForwardIcon />}
              >
                See my projects
              </Button>
              <Button
                variant="outlined"
                component={Link}
                to="/about"
                sx={{
                  color: 'common.white',
                  borderColor: 'rgba(255, 255, 255, 0.72)',
                  '&:hover': { borderColor: 'common.white' },
                }}
              >
                About me
              </Button>
              <SocialLinks />
            </Stack>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="md">
        <Box sx={{ mt: { xs: 4, md: 6 } }}>
          <Typography variant="h5" gutterBottom>
            Featured projects
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            A small sample of the edge platforms, data systems, and AI tooling I work on.
          </Typography>
          {featured.length > 0 && (
            <Grid container spacing={2}>
              {featured.map((project) => (
                <Grid key={project.title} size={{ xs: 12, sm: 6 }}>
                  <ProjectCard project={project} />
                </Grid>
              ))}
            </Grid>
          )}
        </Box>
      </Container>
    </>
  );
}
