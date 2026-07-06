import { Stack, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import profile from '../data/profile';

export default function SocialLinks({ size = 'medium' }) {
  return (
    <Stack direction="row" spacing={0.5}>
      {profile.social.github && (
        <IconButton
          size={size}
          aria-label="GitHub"
          href={profile.social.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon fontSize={size} />
        </IconButton>
      )}
      {profile.social.linkedin && (
        <IconButton
          size={size}
          aria-label="LinkedIn"
          href={profile.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon fontSize={size} />
        </IconButton>
      )}
      {profile.email && (
        <IconButton size={size} aria-label="Email" href={`mailto:${profile.email}`}>
          <EmailOutlinedIcon fontSize={size} />
        </IconButton>
      )}
    </Stack>
  );
}
