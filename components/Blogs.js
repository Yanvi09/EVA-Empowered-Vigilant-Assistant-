import { Box, Typography, Grid, Card, CardMedia, CardContent, Button } from '@mui/material';

const blogPosts = [
  {
    title: '5 Must-Know Self-Defense Moves',
    excerpt: 'Discover powerful yet simple moves every woman should master for self-protection.',
    image: 'https://source.unsplash.com/400x250/?selfdefense,women',
  },
  {
    title: 'How AI Enhances Women Safety',
    excerpt: 'Learn how modern AI tools like EVA are making cities safer for women.',
    image: 'https://source.unsplash.com/400x250/?ai,safety',
  },
  {
    title: 'Best Safety Gadgets in 2025',
    excerpt: 'Check out this year’s most effective and affordable safety tech tools.',
    image: 'https://source.unsplash.com/400x250/?gadgets,safety',
  },
];

const Blogs = () => {
  return (
    <Box sx={{ px: 4, py: 6, backgroundColor: 'var(--background)' }}>
      <Typography variant="h4" align="center" mb={4} fontWeight={600}>
        Latest Blogs
      </Typography>

      <Grid container spacing={4}>
        {blogPosts.map((blog, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card className="neumorphic" sx={{ height: '100%' }}>
              <CardMedia component="img" height="200" image={blog.image} alt={blog.title} />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {blog.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {blog.excerpt}
                </Typography>
                <Button variant="text" sx={{ mt: 1, color: 'var(--primary)' }}>
                  Read More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Blogs;
