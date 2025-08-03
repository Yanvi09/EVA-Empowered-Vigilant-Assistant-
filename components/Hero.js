import { Button, Typography, Box } from '@mui/material';

const Hero = () => {
  return (
    <Box sx={{ textAlign: 'center', padding: '100px 20px', backgroundColor: 'var(--primary)', color: 'white' }}>
      <Typography variant="h2">Your Safety. Our Mission.</Typography>
      <Button variant="contained" sx={{ backgroundColor: 'var(--cta-highlight)', margin: '20px' }}>
        Activate SOS
      </Button>
      <Button variant="outlined" sx={{ borderColor: 'white', color: 'white' }}>
        Explore Premium
      </Button>
    </Box>
  );
};

export default Hero;
