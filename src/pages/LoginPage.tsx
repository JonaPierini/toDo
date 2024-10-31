import { Box, Button, InputAdornment, TextField } from "@mui/material";
import { useFormHooks } from "../hooks/useFormHooks";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export const LoginPage = () => {
  const { formState, setFormsState } = useFormHooks({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const onLogin = () => {
    if (formState.email === "" || formState.password === "") return;
    console.log(formState.email);
    console.log(formState.password);
    setFormsState({
      email: "",
      password: "",
    });
  };

  return (
    <Box
      sx={{
        backgroundColor: "#FEFAE0",
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        component={"form"}
        sx={{
          p: 10,
          backgroundColor: "#626F47",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <TextField
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#FEFAE0", // Color del borde por defecto
              },
              "&:hover fieldset": {
                borderColor: "#FEFAE0", // Color del borde al pasar el mouse
              },
              "&.Mui-focused fieldset": {
                borderColor: "#FEFAE0", // Color del borde al hacer foco
              },
              "& input": {
                color: "#FEFAE0", // Color del texto que se escribe
              },
            },
            "& .MuiInputLabel-root": {
              color: "#FEFAE0", // Color del label por defecto
              "&.Mui-focused": {
                color: "#FEFAE0", // Color del label al hacer foco
              },
            },
            marginBottom: 2,
          }}
          autoComplete="off"
          label="Email"
          type="text"
          id="emailTextFiel"
          value={formState.email}
          onChange={(e) =>
            setFormsState({
              ...formState,
              email: e.target.value,
            })
          }
        />
        <TextField
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#FEFAE0", // Color del borde por defecto
              },
              "&:hover fieldset": {
                borderColor: "#FEFAE0", // Color del borde al pasar el mouse
              },
              "&.Mui-focused fieldset": {
                borderColor: "#FEFAE0", // Color del borde al hacer foco
              },
              "& input": {
                color: "#FEFAE0", // Color del texto que se escribe
              },
            },
            "& .MuiInputLabel-root": {
              color: "#FEFAE0", // Color del label por defecto
              "&.Mui-focused": {
                color: "#FEFAE0", // Color del label al hacer foco
              },
            },
            marginBottom: 2,
          }}
          autoComplete="off"
          label="Password"
          type={showPassword ? "text" : "password"}
          id="passwordTextFiel"
          value={formState.password}
          onChange={(e) =>
            setFormsState({
              ...formState,
              password: e.target.value,
            })
          }
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment
                  onClick={() => setShowPassword(!showPassword)}
                  position="end"
                >
                  {showPassword ? (
                    <Visibility sx={{ color: "#FEFAE0" }} />
                  ) : (
                    <VisibilityOff sx={{ color: "#FEFAE0" }} />
                  )}
                </InputAdornment>
              ),
            },
          }}
        />
        <Button
          onClick={onLogin}
          sx={{ backgroundColor: "#FEFAE0", color: "#626F47" }}
        >
          Ingresar
        </Button>
      </Box>
    </Box>
  );
};
