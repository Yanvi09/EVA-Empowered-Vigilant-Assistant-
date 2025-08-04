import { Box, Typography, Grid, Card, CardContent, Avatar } from '@mui/material';

const testimonials = [
  {
    name: 'Priya Sharma',
    story:
      'I used EVA’s SOS alert while coming home late — my family got notified instantly. Thank you EVA!',
  },
  {
    name: 'Aditi Verma',
    story:
      'Live tracking helped my best friend locate me during a cab ride. This app makes me feel safe always.',
  },
  {
    name: 'Sneha Kapoor',
    story:
      'The AI detection alerted me when someone followed me. I felt protected even when alone.',
  },
];

const Testimonials = () => {
  return (
    <Box sx={{ px: 4, py: 6 }}>
      <Typography variant="h4" align="center" mb={4} fontWeight={600}>
        Hear From Our Users
      </Typography>

      <Grid container spacing={4}>
        {testimonials.map((user, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card className="neumorphic" sx={{ height: '100%' }}>
              <CardContent>
                <Avatar sx={{ bgcolor: '#4B2E83', width: 56, height: 56, mb: 2 }}>
                  {user.name[0]}
                </Avatar>
                <Typography variant="h6">{user.name}</Typography>
                <Typography variant="body2" color="text.secondary" mt={1}>
                  "{user.story}"
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Testimonials;
