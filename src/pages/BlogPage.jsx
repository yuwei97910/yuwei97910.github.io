import {
  Container,
  Typography,
  Card,
  CardActionArea,
  CardContent,
  Stack,
  Box,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { getAllPosts } from '../lib/posts';

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <Container maxWidth="md">
      <Typography variant="h3" component="h1" gutterBottom>
        Blog
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Notes on what I’m building and learning.
      </Typography>
      <Stack spacing={2}>
        {posts.map((post) => (
          <Card key={post.slug}>
            <CardActionArea component={Link} to={`/blog/${post.slug}`}>
              {post.image && (
                <Box
                  component="img"
                  src={post.image}
                  alt={post.imageAlt}
                  sx={{
                    display: 'block',
                    width: '100%',
                    aspectRatio: '16 / 7',
                    objectFit: 'contain',
                    backgroundColor: 'background.default',
                    borderBottom: '1px solid',
                    borderColor: 'divider',
                  }}
                />
              )}
              <CardContent>
                <Typography variant="overline" color="text.secondary">
                  {post.date}
                </Typography>
                <Typography variant="h6">{post.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {post.summary}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
        {posts.length === 0 && (
          <Typography color="text.secondary">No posts yet — check back soon.</Typography>
        )}
      </Stack>
    </Container>
  );
}
