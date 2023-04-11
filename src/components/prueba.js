import { Paper, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import Alert from "@material-ui/lab/Alert";
import AlertTitle from "@material-ui/lab/AlertTitle";

function validate(input){
  const errors = {};
  const emailRegex = /\S+@\S+\.\S+/; // Expresión regular para validar formato de email

  if (!input.name || input.name.length < 4) {
    errors.name = "El nombre debe tener más de cuatro letras.";
  }

  if(!input.email || !emailRegex.test(input.email)){
    errors.email = "El formato de email no es válido";
  }

  if(!input.message || input.message.length < 1 || input.message.length > 150){
    errors.message = "El mensaje debe tener entre 1 y 150 caracteres";
  }

  return errors;
}


const Contact = ({title, id, dark}) => {
      const clases = useStyles();
      const [showAlert, setShowAlert] = useState(false);
      const [name, setName] = useState("");
      const [email, setEmail] = useState("");
      const [message, setMessage] = useState("");

      const [input, setInput] = useState({
      name: '',
      email: '',
      message: '',
    });

    const [errors, setErrors] = useState({firstTry:true});

    // const validateForm = () => {
    //     const { name, email, message } = input;
    //     if (!name || !email || !message) {
    //       setShowAlert(true);
    //     } else {
    //       setShowAlert(false);
    //       handleSubmit();
    //     }
    //   };
    useEffect(() => {
      setErrors(
        validate({
          ...input,
        })
      );
    }, [input]);
    function handleChange(e){
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    if(errors.firstTry){
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
            })
        )}
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(name, email, message);
        if (input.name && input.email && input.message >= 1) {
           setInput({
            name: "",
            email: "",
            message: "",
           })
           errors.firstTry = false
           if(errors.firstTry){
            alert("Missing dates")
        }
          } 
      };

      function handleCheckErrors(e){
        e.preventDefault();
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value,
        }))
        handleSubmit(e)
    }
    

      return (
        <div className={clases.root}>
                <Typography variant="h4" component="h1" gutterBottom className={clases.h1}>
                  Contáctanos
                </Typography>
                <Typography variant="subtitle1" gutterBottom className={clases.h2}>
                  ¡Envíanos tus preguntas, comentarios o sugerencias!
                </Typography>
          <form className={clases.form} onSubmit={handleSubmit}>
           {showAlert && (
                <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                Por favor complete todos los campos del formulario.
                </Alert>
            )}
            <TextField
              className={clases.formField}
              name="name"
              label="Nombre"
              variant="outlined"
              value={input.name}
              onChange={(e) => handleChange(e)}
            />
            {errors.name && (<div className={clases.error}>{errors.name}</div>)}
            <TextField
              className={clases.formField}
              name="email"
              label="Correo electrónico"
              variant="outlined"
              value={input.email}
              onChange={(e) => handleChange(e)}
            />
            <TextField
              className={clases.formField}
              name="message"
              label="Mensaje"
              variant="outlined"
              multiline
              rows={4}
              value={input.message}
              onChange={(e) => handleChange(e)}
            />
            <Button onClick={e => handleCheckErrors(e)} variant="contained" color="primary" type="submit">
              Enviar
            </Button>
          </form>
          <div className={clases.social}>
            <IconButton aria-label="Facebook">
              <FacebookIcon />
            </IconButton>
            <IconButton aria-label="Twitter">
              <TwitterIcon />
            </IconButton>
            <IconButton aria-label="Instagram">
              <InstagramIcon />
            </IconButton>
          </div>
        </div>
      );
    }

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: '400px',
    marginBottom: theme.spacing(2),
  },
  formField: {
    marginBottom: theme.spacing(2),
  },
  social: {
    display: 'flex',
    justifyContent: 'center',
    '& > *': {
      marginRight: theme.spacing(1),
    },
  },
    section: {
        minHeight: "100vh"
    },
    sectiondark: {
        background: "#333",
        color: "#fff"
    },
    sectionCont:{
        maxWidth: "80vw",
        margin: "0 auto",

    },
    h1: {
      fontSize: "2.5rem",
      marginBottom: "1rem",
      fontWeight: "bold",
    },
    
    h2: {
      fontSize: '1.5rem',
      marginBottom: '1rem',
      fontWeight: 'bold'
    },
    error: {
      fontFamily: "Rubik, sans-serif",
      fontSize: "14px",
      fontWeight: "400",
      display: "flex",
      flexWrap:' wrap',
      marginTop:' 5px',
      color:' rgb(204, 1, 1)'
  }
  }))

export default Contact;