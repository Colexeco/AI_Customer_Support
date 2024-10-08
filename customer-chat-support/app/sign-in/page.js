import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { FcGoogle } from "react-icons/fc";

export default function SignIn() {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        bgcolor: "background.main",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          mt: 2,
          mb: 2,
          fontWeight: "bold",
          transform: "translateZ(0)",
          transition: "transform 0.4s ease-out",
          "&:hover": {
            transform: "translateY(-5px) translateZ(0)",
          },
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
        }}
      >
        Panora Chatbot{" "}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        size="large"
        sx={{
          mt: 4,
          textTransform: "none",
          borderRadius: 40,
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
        }}
        startIcon={<FcGoogle />}
      >
        Sign In with Google
      </Button>
    </Box>
  );
}
