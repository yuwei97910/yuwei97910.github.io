import { Container, Typography, Grid } from '@mui/material';
import projects from '../data/projects';
import ProjectCard from '../components/ProjectCard';

export default function ProjectsPage() {
  return (
    <Container maxWidth="md">
      <Typography variant="h3" component="h1" gutterBottom>
        Projects
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Platform work, AI/data projects, and public GitHub repositories from my engineering and
        analytics path.
      </Typography>
      <Grid container spacing={2}>
        {projects.map((project) => (
          <Grid key={project.title} size={{ xs: 12, sm: 6 }}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
