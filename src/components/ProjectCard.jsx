import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Chip,
  Stack,
  Button,
  CardMedia,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

export default function ProjectCard({ project }) {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {project.image && (
        <CardMedia
          component="img"
          height="172"
          image={project.image}
          alt={project.imageAlt ?? ''}
          sx={{
            objectFit: 'contain',
            backgroundColor: 'background.default',
            borderBottom: '1px solid',
            borderColor: 'divider',
          }}
        />
      )}
      <CardContent sx={{ flex: 1 }}>
        <Typography variant="h6" gutterBottom>
          {project.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {project.description}
        </Typography>
        <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: 'wrap' }}>
          {project.tags.map((tag) => (
            <Chip key={tag} label={tag} size="small" variant="outlined" />
          ))}
        </Stack>
      </CardContent>
      {(project.repo || project.link) && (
        <CardActions>
          {project.repo && (
            <Button
              size="small"
              startIcon={<GitHubIcon />}
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
            >
              Code
            </Button>
          )}
          {project.link && (
            <Button
              size="small"
              startIcon={<LaunchIcon />}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live
            </Button>
          )}
        </CardActions>
      )}
    </Card>
  );
}
