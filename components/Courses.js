import { Grid, Card, CardContent, Typography, Button, Box } from '@mui/material';
import { GiPunchBlast, GiSelfLove, GiMartialArtsUniform, GiRunningNinja } from 'react-icons/gi';

const courses = [
  {
    icon: <GiPunchBlast size={40} color="#4B2E83" />,
    title: 'Basic Self-Defense',
    description: 'Learn essential moves to protect yourself in public places.',
  },
  {
    icon: <GiSelfLove size={40} color="#4B2E83" />,
    title: 'Street Smart Tactics',
    description: 'Handle real-life situations using awareness and confidence.',
  },
  {
    icon: <GiMartialArtsUniform size={40} color="#4B2E83" />,
    title: 'Advanced Strategies',
    description: 'Master martial techniques and quick counter moves.',
  },
  {
    icon: <GiRunningNinja size={40} color="#4B2E83" />,
    title: 'Teach & Learn',
    description: 'Empower others with your skills through training and guidance.',
  },
];

const Courses = () => {
  return (
    <Box sx={{ px: 4, py: 6 }}>
      <Typography variant="h4" align="center" mb={4} fontWeight={600}>
        Self-Defense Courses
      </Typography>

      <Grid container spacing={4}>
        {courses.map((course, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card className="neumorphic" sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <CardContent sx={{ textAlign: 'center' }}>
                <Box mb={2}>{course.icon}</Box>
                <Typography variant="h6">{course.title}</Typography>
                <Typography variant="body2" color="text.secondary" mb={2}>
                  {course.description}
                </Typography>
                <Button variant="contained">Enroll Now</Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Courses;
