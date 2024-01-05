import React from 'react';
import { Container, Typography, Paper, List, ListItem, ListItemText } from '@mui/material';

const About = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80vh',
        padding: '2rem',
      }}
    >
      <Paper elevation={3} sx={{ padding: '2rem', textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          About
        </Typography>
        <Typography paragraph>
          Welcome to our Ticket System! This system is designed to help you manage
          and organize your tickets efficiently. Whether you're a customer or a
          support agent, our platform is here to streamline the ticketing process
          and provide a seamless experience.
        </Typography>
        <Typography>
          <strong>Features:</strong>
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="Submit and track tickets easily" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Efficient communication between users and support" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Real-time updates on ticket status" />
          </ListItem>
          <ListItem>
            <ListItemText primary="User-friendly interface for a smooth experience" />
          </ListItem>
        </List>
        <Typography paragraph>
          Thank you for choosing our Ticket System. If you have any questions or
          feedback, feel free to contact our support team. We are committed to
          providing you with the best ticketing experience.
        </Typography>
      </Paper>
    </Container>
  );
};

export default About
