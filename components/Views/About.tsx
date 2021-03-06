import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { PageDataContext } from "../pageDataContext";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import * as MuiIcons from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  root: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    padding: "70px 0 70px 0",
    backgroundColor: theme.palette.secondary.main,
    textAlign: "center",
    color: "#fff",
  },

  contentContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontWeight: 300,
    color: "#FFF",
  },
  headerBar: {
    fontWeight: 700,
    backgroundColor: "#fff",
    height: 2,
    width: 70,
    margin: "25px 0 45px 0",
  },
  subHeading: {
    fontWeight: 800,
    color: "#1F2323",
    textAlign: "left",
    alignSelf: "flex-start",
  },
  cardContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    boxShadow: "0px 15px 55px 0px rgba(0, 0, 0, 0.13)",
    padding: 45,
    borderRadius: 4,
  },
  cardIconContainer: {
    display: "flex",
    color: "#595959",
    fontSize: 48,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: 800,
    color: "#444649",
    marginTop: 20,
    marginBottom: 10,
  },
  cardDescription: { color: "#444649" },
  mainContent: { marginBottom: 32, textAlign: "left" },
  listItem: {
    display: "flex",
    marginBottom: 8,
    "& :first-child": {
      marginRight: 16,
    },
  },
  bold: { fontWeight: "bolder" },
}));

const About = () => {
  const classes = useStyles();
  const [{ about }] = React.useContext(PageDataContext);

  const Card = ({ title, icon, description, ...rest }) => (
    <div className={classes.cardContainer} {...rest}>
      <div className={classes.cardIconContainer}>{icon}</div>
      <Typography className={classes.cardTitle}>{title}</Typography>
      <Typography className={classes.cardDescription}>{description}</Typography>
    </div>
  );

  return (
    <section id="about" className={classes.root}>
      <Container maxWidth="md" className={classes.contentContainer}>
        <Typography component="div" variant="h2" className={classes.header}>
          ABOUT
        </Typography>
        <div
          className={classes.headerBar}
          data-aos="fade-right"
          data-aos-delay="500"
        />
        <Grid container justify="center" alignItems="center" spacing={4}>
          <Grid item xs={12} data-aos="zoom-in-right" data-aos-delay="200">
            <Typography className={classes.subHeading} variant="h2">
              {about.title.toUpperCase()}
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            data-aos="zoom-in-left"
            data-aos-delay="200"
            className={classes.mainContent}
          >
            <Typography align="left">
              {documentToReactComponents(about.body.json)}
            </Typography>
          </Grid>
          {about.principleCardsCollection.items.map((principle, index) => {
            const CardIcon = MuiIcons[principle.iconTag];

            return (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  title={principle.title}
                  description={principle.body}
                  icon={<CardIcon fontSize="inherit" />}
                  data-aos="zoom-in-up"
                  data-aos-delay={300 * index}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </section>
  );
};

export default About;
