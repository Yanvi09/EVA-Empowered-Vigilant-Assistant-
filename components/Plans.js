import { Grid, Card, CardContent, Typography, Button } from '@mui/material';

const plans = [
  {
    title: 'Free Plan',
    price: '$0',
    features: ['Basic SOS', '1 Emergency Contact', '1 Safe Zone'],
  },
  {
    title: 'Pro Plan',
    price: '$9.99',
    features: ['All Features', '5 Contacts', 'Advanced AI Alerts'],
  },
  {
    title: 'Enterprise Plan',
    price: 'Custom',
    features: ['Group Safety Tools', 'NGO Integration'],
  },
];

const Plans = () => {
  return (
    <Grid container spacing={4} sx={{ padding: '50px 20px' }}>
      {plans.map((plan, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card className="neumorphic">
            <CardContent>
              <Typography variant="h5">{plan.title}</Typography>
              <Typography variant="h6">{plan.price}</Typography>
              <ul>
                {plan.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <Button variant="contained" sx={{ marginTop: '10px' }}>
                Get Started
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Plans;
