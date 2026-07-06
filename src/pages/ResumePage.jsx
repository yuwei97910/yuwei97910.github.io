import { Container, Typography, Button, Divider, Box } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import profile from '../data/profile';
import { awards, certifications, education, experience, leadership } from '../data/experience';
import ExperienceSequence from '../components/ExperienceSequence';

export default function ResumePage() {
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 2,
          mb: 4,
        }}
      >
        <Typography variant="h3" component="h1">
          Resume
        </Typography>
        {profile.resumePdf && (
          <Button
            variant="contained"
            startIcon={<DownloadIcon />}
            href={profile.resumePdf}
            download
          >
            Download PDF
          </Button>
        )}
      </Box>

      <Typography variant="h5" gutterBottom>
        Experience
      </Typography>
      <ExperienceSequence items={experience} />

      <Divider sx={{ my: 4 }} />

      <Typography variant="h5" gutterBottom>
        Education
      </Typography>
      <ExperienceSequence items={education} />

      <Divider sx={{ my: 4 }} />

      <Typography variant="h5" gutterBottom>
        Awards
      </Typography>
      <ExperienceSequence items={awards} />

      <Divider sx={{ my: 4 }} />

      <Typography variant="h5" gutterBottom>
        Certifications
      </Typography>
      <ExperienceSequence items={certifications} />

      <Divider sx={{ my: 4 }} />

      <Typography variant="h5" gutterBottom>
        Leadership
      </Typography>
      <ExperienceSequence items={leadership} />
    </Container>
  );
}
