import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Container,
  Grid,
  TextField,
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    position: "relative",
    textAlign: "center",
    padding: 0,
  },
  input: {
    "& label.Mui-focused": {
      color: "#000",
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#000",
      },
    },
  },
  textArea: { minHeight: 150 },

  button: {
    color: "#262626",
    borderColor: "#fff",
    textTransform: "none",
    marginTop: 5,
    fontSize: "18px",
    float: "right",

    "&:hover": {
      background: theme.palette.primary.main,
      borderColor: theme.palette.primary.main,
    },
    "& .MuiSvgIcon-root": {
      transition: "all 0.3s ease",
    },
  },
  closeButton: {
    position: "absolute",
    right: 0,
  },
  loadingContainer: { position: "relative" },
  loading: {
    position: "absolute",
    bottom: 0,
    left: 8,
    right: 8,
  },
}));


const ContactForm = props => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container
        component="form"
        maxWidth="sm"
        className={classes.root}
        {...props}
        target="_blank"
        action={`https://formsubmit.co/1469c38b371f8ce8332bc8addcef5941`}
        method="POST"
      >
        <Grid container spacing={2}>
          <Grid item xs={6} sm={6}>
            <TextField
              className={classes.input}
              autoComplete="given-name"
              name="firstName"
              variant="outlined"
              required
              fullWidth
              id="firstName"
              label="First Name"
              aria-label="first name"
            />
          </Grid>
          <Grid item xs={6} sm={6}>
            <TextField
              className={classes.input}
              variant="outlined"
              required
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              aria-label="last name"
              autoComplete="family-name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              className={classes.input}
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Email Address"
              type="email"
              name="email"
              aria-label="email"
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              className={classes.input}
              variant="outlined"
              required
              fullWidth
              label="Phone"
              type="tel"
              id="phone"
              name="phone"
              aria-label="phone number"
            />
          </Grid>
          <Grid item xs={12} className={classes.loadingContainer}>
            <TextField
              className={classes.input}
              id="message"
              name="message"
              label="Message"
              fullWidth
              multiline
              rows="6"
              variant="outlined"
            />

          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Send Message
            </Button>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default ContactForm;
