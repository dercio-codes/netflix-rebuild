import * as React from "react";
import { useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import AddIcon from "@mui/icons-material/Add";
import { Button, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";

const FAQ = (props) => {
  const AccodionItem = ({ title, answer }) => {
    return (
      <Accordion
        sx={{
          background: "rgba(21,21,21,1)",
          color: "#eee",
        }}
      >
        <AccordionSummary
          expandIcon={
            <AddIcon
              sx={{
                fill: "#eee",
              }}
            />
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{answer}</Typography>
        </AccordionDetails>
      </Accordion>
    );
  };
  const [questions, setQuestions] = React.useState([]);

  useEffect(() => {
    fetch("/FrequentlyAsked.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setQuestions(data);
      });
  }, []);

  return (
    <Box
      sx={{
        minminHeight: "100vh",
        background: "black",
        padding: "32px 150px",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: "800",
          color: "#eee",
          margin: "32px",
          textAlign: "center",
        }}
      >
        Frequently Asked Questions
      </Typography>
      {questions.map((question, index) => {
        return (
          <AccodionItem
            key={index}
            title={question.question}
            answer={question.answer}
          />
        );
      })}

      <br />
      <Typography variant="h6" sx={{
        color:"#eee",
        textAlign:'center',
        padding:'8px'
      }}>
        Ready to watch? Enter your email to create or restart your membership.
      </Typography>
      <div
        style={{
          display: "flex",
          width: "100%",
        }}
      >
        <TextField
          variant="filled"
          placeholder="Email address"
          sx={{
            width: "91%",
            background: "white",
          }}
        />
        <Button
          variant="filled"
          sx={{
            background: "#e50914",
            color: "#eee",
            fontWeight: "900",
            "&:hover": {
              background: "#e50914",
              color: "#aaa",
              fontWeight: "900",
            },
          }}
        >
          Sign Up
        </Button>
      </div>
    </Box>
  );
};

export default FAQ;
