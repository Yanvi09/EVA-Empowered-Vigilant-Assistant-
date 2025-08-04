import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import { FaHandsHelping, FaBell, FaShieldAlt } from 'react-icons/fa';

const keyFeatures = [
  {
    icon: <FaHandsHelping size={40} color="#4B2E83" />,
    title: 'Gesture-Based SOS',
    description: 'Shake or clap to trigger emergency alerts instantly.',
  },
  {
    icon: <FaBell size={40} color="#4B2E83" />,
    title: 'Instant Alerts',
    description: 'Real-time notifications sent to emergency contacts.',
  },
  {
    icon: <FaShieldAlt size={40} color="#4B2E83" />,
    title: 'Smart Activation',
    description: 'System detects unsafe patterns and auto-triggers alert.',
  },
];

const KeyFeatures = () => {
  return (
    <Box sx={{ px: 4, py: 6, backgroundColor: 'var(--background)' }}>
      <Typography variant="h4" align="center" mb={4} fontWeight={600}>
        Key Safety Features
      </Typography>

      <Grid container spacing={4}>
        {keyFeatures.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card className="neumorphic" sx={{ height: '100%' }}>
              <CardContent sx={{ textAlign: 'center' }}>
                <Box mb={2}>{feature.icon}</Box>
                <Typography variant="h6">{feature.title}</Typography>
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

export default KeyFeatures;
