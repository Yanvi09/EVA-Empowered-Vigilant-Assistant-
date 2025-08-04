import { Box, Typography, Grid, TextField, Button, Card, CardContent, Avatar } from '@mui/material';

const team = [
  { name: 'Anvi Yadav', role: 'Founder & Developer', initials: 'AY' },
  { name: 'Riya Patel', role: 'AI Engineer', initials: 'RP' },
  { name: 'Sana Sheikh', role: 'Safety Analyst', initials: 'SS' },
];

const Contact = () => {
  return (
    <Box sx={{ px: 4, py: 6 }}>
      <Typography variant="h4" align="center" mb={4} fontWeight={600}>
        Get in Touch
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <TextField fullWidth label="Name" margin="normal" />
          <TextField fullWidth label="Email" margin="normal" />
          <TextField fullWidth label="Message" margin="normal" multiline rows={4} />
          <Button variant="contained" sx={{ mt: 2 }}>
            Send Message
          </Button>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h6" mb={2}>
            Meet Our Team
          </Typography>
          <Grid container spacing={2}>
            {team.map((member, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Card className="neumorphic">
                  <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar sx={{ bgcolor: '#4B2E83' }}>{member.initials}</Avatar>
                    <Box>
                      <Typography>{member.name}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {member.role}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
