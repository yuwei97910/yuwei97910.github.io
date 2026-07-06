import { Container, Typography, Button, Box } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { getPostBySlug } from '../lib/posts';
import NotFoundPage from './NotFoundPage';

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) return <NotFoundPage />;

  return (
    <Container maxWidth="md">
      <Button component={Link} to="/blog" startIcon={<ArrowBackIcon />} sx={{ mb: 2 }}>
        All posts
      </Button>
      <Typography variant="overline" color="text.secondary" display="block">
        {post.date}
      </Typography>
      <Typography variant="h3" component="h1" gutterBottom>
        {post.title}
      </Typography>
      {post.image && (
        <Box
          component="img"
          src={post.image}
          alt={post.imageAlt}
          sx={{
            display: 'block',
            width: '100%',
            aspectRatio: '16 / 8',
            objectFit: 'contain',
            backgroundColor: 'background.default',
            borderRadius: 2,
            mb: 4,
          }}
        />
      )}
      <Box
        sx={(theme) => ({
          '& pre': {
            overflowX: 'auto',
            p: 2,
            borderRadius: 1,
            backgroundColor: theme.vars.palette.action.hover,
          },
          '& code': { fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace' },
          '& img': { maxWidth: '100%' },
          '& a': { color: theme.vars.palette.primary.main },
        })}
      >
        <ReactMarkdown>{post.body}</ReactMarkdown>
      </Box>
    </Container>
  );
}
