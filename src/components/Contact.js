import { Button, Link, makeStyles, TextField, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';




function validate(input){
  const errorForms = {};
  const emailRegex = /\S+@\S+\.\S+/; // Expresión regular para validar formato de email

  if (!input.name || input.name.length < 1 || input.name.length > 20) {
    errorForms.name = "El nombre debe tener entre 1 y 20 caracteres";
  }

  if(!input.email || !emailRegex.test(input.email)){
    errorForms.email = "El formato de email no es válido";
  }

  if(!input.message || input.message.length < 1 || input.message.length > 350){
    errorForms.message = "El mensaje debe tener entre 1 y 350 caracteres";
  }

  return errorForms;
}
const socialLinks = {
  facebook: "https://www.facebook.com/RodrigoRojasAyala",
  twitter: "https://github.com/rojassrodrigo",
  instagram: "https://www.instagram.com/rojassrodrigo/"
}


const Contact = ({title, id, dark}) => {
    const clases = useStyles();
    const [input, setInput] = useState({
      name: '',
      email: '',
      message: '',
    });

    const [errorForms, seterrorForms] = useState({firstTry:true});


    useEffect(() => {
      seterrorForms(
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
  if(errorForms.firstTry){
      seterrorForms(validate({
          ...input,
          [e.target.name]: e.target.value
          })
      )}
  }

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   if (input.name && input.email && input.message >= 1) {
  //      setInput({
  //       name: "",
  //       email: "",
  //       message: "",
  //      })
  //      errorForms.firstTry = false
  //      if(errorForms.firstTry){
  //       alert("Missing dates")
  //   }
  //     } 
  // };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!input.name || !input.email || !input.message) {
      alert("Por favor complete todos los campos del formulario.");
      return;
    }

    setInput({
      name: "",
      email: "",
      message: "",
    });
    errorForms.firstTry = false;
    alert("El mensaje se envio correctamente.");
  };

  // function handleCheckerrorForms(e){
  //   e.preventDefault();
  //   const errors = validate({
  //     ...input,
  //     [e.target.name]: e.target.value,
  //   });
  //   seterrorForms(errors);
  //   if (Object.keys(errors).length === 0) {
  //     handleSubmit(e);
  //   }
  // }

  function handleCheckerrorForms(e){
    e.preventDefault();
    seterrorForms(validate({
        ...input,
        [e.target.name]: e.target.value,
    }))
    handleSubmit(e)
}
    return (
        <div className={clases.root}>
                    <div className={`${clases.section} ${dark && clases.sectiondark}`}>
                        <div className={clases.sectionCont} id={id}>
                            <Typography variant="h3">{title}</Typography>
                            <Typography variant="subtitle1" gutterBottom className={clases.h2}>
                            ¿Quieres ponerte en contacto conmigo? ¡Utiliza este formulario!
                            </Typography>
                            
                            <form className={clases.form} onSubmit={handleSubmit}>


                                <TextField
                                  className={clases.formField}
                                  name="name"
                                  label="Nombre"
                                  variant="outlined"
                                  value={input.name}
                                  onChange={(e) => handleChange(e)}
                                />
                                 {errorForms.name && (<div className={clases.errorForm}>{errorForms.name}</div>)}
                                <TextField
                                  className={clases.formField}
                                  name="email"
                                  label="Correo electrónico"
                                  variant="outlined"
                                  value={input.email}
                                  onChange={(e) => handleChange(e)}
                                />
                                {errorForms.email && (<div className={clases.errorForm}>{errorForms.email}</div>)}
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
                                {errorForms.message && (<div className={clases.errorForm}>{errorForms.message}</div>)}
                                <Button onClick={e => handleCheckerrorForms(e)} variant="contained" color="primary" type="submit">
                                  Enviar
                                </Button>
                              </form>
                              <div className={clases.social}>
                                <Link href={socialLinks.facebook} aria-label="Facebook">
                                  <FacebookIcon />
                                </Link>
                                <Link href={socialLinks.twitter} aria-label="Twitter">
                                  <GitHubIcon />
                                </Link>
                                <Link href={socialLinks.instagram} aria-label="Instagram">
                                  <InstagramIcon />
                                </Link>
                              </div>
                        </div>
                    </div>
        </div>

    )
}
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  section: {
    backgroundColor: theme.palette.background.paper,
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  sectionDark: {
    backgroundColor: theme.palette.background.default,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: 400,
    "& > *": {
      marginBottom: theme.spacing(2),
    },
  },
  h1: {
    fontWeight: "bold",
    marginBottom: theme.spacing(2),
  },
  h2: {
    fontStyle: "italic",
    marginBottom: theme.spacing(4),
  },
  formField: {
    marginBottom: theme.spacing(2),
    background: "#fff",
  },
  social: {
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(4),
    "& > *": {
      marginRight: theme.spacing(2),
    },
  },
    // section: {
    //     minHeight: "100vh"
    // },
    // sectiondark: {
    //     background: "#333",
    //     color: "#fff"
    // },
    sectionCont: {
      maxWidth: "90vw",
      margin: "0 auto",
      padding: theme.spacing(5),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    errorForm: {
      color: theme.palette.error.main,
      fontFamily: "Rubik, sans-serif",
      fontSize: "14px",
      fontWeight: "400",
      display: "flex",
      flexWrap: "wrap",
      marginTop: "5px",
      color: "rgb(204, 1, 1)",
      border: "1px solid rgb(204, 1, 1)",
      backgroundColor: "rgba(204, 1, 1, 0.1)",
      padding: "5px 10px",
  },
  button: {
    alignSelf: "flex-end",
  },
  
  }))

export default Contact;