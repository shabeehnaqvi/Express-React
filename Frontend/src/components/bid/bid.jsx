import React, { useEffect, useState } from "react";

import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { toast, ToastContainer } from "react-toastify";

const theme = createTheme();
function Jobsbids() {
  const [cards, setCards] = useState([]);
  function markCompleted(card) {
    toast("The Job Is Rejected");
  }
  function markRejected(card) {
    toast("The Job Is Accepted and Marked as complete");
    card.bid.push("User1");
  }

  useEffect(() => {
    console.log("=======");
    fetch("http://localhost:3001/jobs")
      .then((response) => response.json())
      .then((data) => {
        console.log("=======", cards);
        setCards(data);
      });
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Container sx={{ py: 8 }} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={4}>
              {cards.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {card.details}
                      </Typography>
                      <hr />
                      <Typography gutterBottom variant="h6" component="h3">
                        Budget : ${card.budget}
                      </Typography>
                      <hr />
                      <Typography>Worker Required : {card.worker}</Typography>
                      <Typography>Payment Method : {card.method}</Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        onClick={() => {
                          markRejected(card);
                        }}
                        size="medium"
                      >
                        Accept
                      </Button>
                      <Button
                        onClick={() => {
                          markCompleted(card);
                        }}
                        size="medium"
                      >
                        Reject
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </ThemeProvider>
        <ToastContainer />
      </>
    </div>
  );
}

export default Jobsbids;
