import { Grid, Card, CardContent, Typography, Box } from '@mui/material';
import { MdOutlineSecurity, MdGpsFixed, MdRecordVoiceOver, MdTouchApp } from 'react-icons/md';

const features = [
  {
    icon: <MdOutlineSecurity size={40} color="#4B2E83" />,
    title: 'AI Threat Detection',
    description: 'Real-time surroundings analysis using ML models.',
  },
  {
    icon: <MdGpsFixed size={40} color="#4B2E83" />,
    title: 'Live Location Tracking',
    description: 'Track user location with OTP-based authorization.',
  },
  {
    icon: <MdRecordVoiceOver size={40} color="#4B2E83" />,
    title: 'Voice Alert System',
    description: 'Loud SOS voice triggers in case of danger.',
  },
  {
    icon: <MdTouchApp size={40} color="#4B2E83" />,
    title: 'Quick Activation',
    description: 'Emergency activation via shake, tap, or gesture.',
  },
];

const CoreFeatures = () => {
  return (
    <Box sx={{ px: 4, py: 6, backgroundColor: 'var(--background)' }}>
      <Typography variant="h4" align="center" mb={4} fontWeight={600}>
        Core Safety Features
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card className="neumorphic" sx={{ height: '100%' }}>
              <CardContent sx={{ textAlign: 'center' }}>
                <Box mb={2}>{feature.icon}</Box>
                <Typography variant="h6" fontWeight={600}>
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CoreFeatures;
