import { Box, Stack, Typography } from '@mui/material';

export default function ExperienceSequence({ items }) {
  return (
    <Stack spacing={3}>
      {items.map((item) => (
        <Box
          key={`${item.org}-${item.period}`}
          sx={(theme) => ({
            pl: 2.5,
            borderLeft: `2px solid ${theme.vars.palette.primary.main}`,
          })}
        >
          <Typography variant="overline" color="text.secondary">
            {item.period}
          </Typography>
          <Typography variant="h6">{item.title}</Typography>
          <Typography variant="subtitle2" color="primary" gutterBottom>
            {item.org}
          </Typography>
          {item.summary && (
            <Typography variant="body2" color="text.secondary">
              {item.summary}
            </Typography>
          )}
          {item.highlights?.length > 0 && (
            <Box component="ul" sx={{ mt: 1, mb: 0, pl: 2.5 }}>
              {item.highlights.map((h) => (
                <Typography key={h} component="li" variant="body2" color="text.secondary">
                  {h}
                </Typography>
              ))}
            </Box>
          )}
        </Box>
      ))}
    </Stack>
  );
}
