import { Grid, Card, CardContent, Typography, Button } from '@mui/material';
import { AiOutlineSafety } from 'react-icons/ai';

const features = [
  {
    title: 'AI-Powered Threat Detection',
    description: 'Scans real-time surroundings using camera/mic AI models.',
  },
  {
    title: 'Live Location Tracking',
    description: 'Friends/family can request live tracking with OTP auth.',
  },
  {
    title: 'Gesture-Based SOS Activation',
    description: 'Trigger SOS via double-shake or clap recognition.',
  },
];

const Features = () => {
  return (
    <Grid container spacing={4} sx={{ padding: '50px 20px' }}>
      {features.map((feature, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card className="neumorphic">
            <CardContent>
              <AiOutlineSafety size={50} color="var(--primary)" />
              <Typography variant="h5">{feature.title}</Typography>
              <Typography variant="body2">{feature.description}</Typography>
              <Button variant="outlined" sx={{ marginTop: '10px' }}>
                Learn More
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Features;
