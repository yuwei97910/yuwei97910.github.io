import { Container, Typography, Box, Chip, Stack, Divider } from '@mui/material';
import profile from '../data/profile';
import { awards, certifications, experience, leadership } from '../data/experience';
import ExperienceSequence from '../components/ExperienceSequence';

export default function AboutPage() {
  return (
    <Container maxWidth="md">
      <Typography variant="h3" component="h1" gutterBottom>
        About me
      </Typography>
      {profile.bio.map((paragraph) => (
        <Typography key={paragraph} variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          {paragraph}
        </Typography>
      ))}

      <Box sx={{ my: 4 }}>
        <Typography variant="h5" gutterBottom>
          Skills
        </Typography>
        <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: 'wrap' }}>
          {profile.skills.map((skill) => (
            <Chip key={skill} label={skill} />
          ))}
        </Stack>
      </Box>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h5" gutterBottom>
        Experience
      </Typography>
      <ExperienceSequence items={experience} />

      <Divider sx={{ my: 4 }} />

      <Typography variant="h5" gutterBottom>
        Awards & certifications
      </Typography>
      <ExperienceSequence items={[...awards, ...certifications]} />

      <Divider sx={{ my: 4 }} />

      <Typography variant="h5" gutterBottom>
        Leadership
      </Typography>
      <ExperienceSequence items={leadership} />
    </Container>
  );
}
