import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box, CircularProgress } from '@mui/material';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';

const AboutPage = lazy(() => import('./pages/AboutPage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const BlogPostPage = lazy(() => import('./pages/BlogPostPage'));
const ResumePage = lazy(() => import('./pages/ResumePage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function Loading() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', py: 10 }}>
      <CircularProgress />
    </Box>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/about"
          element={
            <Suspense fallback={<Loading />}>
              <AboutPage />
            </Suspense>
          }
        />
        <Route
          path="/projects"
          element={
            <Suspense fallback={<Loading />}>
              <ProjectsPage />
            </Suspense>
          }
        />
        <Route
          path="/blog"
          element={
            <Suspense fallback={<Loading />}>
              <BlogPage />
            </Suspense>
          }
        />
        <Route
          path="/blog/:slug"
          element={
            <Suspense fallback={<Loading />}>
              <BlogPostPage />
            </Suspense>
          }
        />
        <Route
          path="/resume"
          element={
            <Suspense fallback={<Loading />}>
              <ResumePage />
            </Suspense>
          }
        />
        <Route
          path="/contact"
          element={
            <Suspense fallback={<Loading />}>
              <ContactPage />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<Loading />}>
              <NotFoundPage />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}
