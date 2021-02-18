import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import styles from "./MobileComponent.module.css";
import Close from "@material-ui/icons/Close";
import image1 from "../assets/images/image1 small.svg";
import { Api } from "../config/Api";
import Model3 from "./Model3";
import {FaQuestion} from 'react-icons/fa'

export default function Model2(props) {
  const useStyles = makeStyles((theme) => ({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      width: "90%",
      height: "84%",
      borderRadius: "8px",
      outline: "none",
      marginTop: "50px",
      overflow: "scroll",
    },
  }));

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const close = () => {
    handleClose();
    props.close();
    props.closefirst();
    props.closesecond();
  };

  return (
    <>
      <button
        className={styles.btn1}
        onClick={() => {
          handleOpen();
        }}
      >
        Siguiente
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        hideBackdrop={true}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <>
              <div className={styles.mainCont}>
                <Close
                style={{position: "fixed", top: "13%", right: "7%"}}
                  onClick={close}
                  fontSize="large"
                  className={styles.closeall}
                />
                <br />
                <br />
                <div className={styles.imageCont}>
                  <img
                    src={image1}
                    alt={"image1"}
                    className={styles.imagesmall}
                  />
                </div>
                <div className={styles.Cont2}>
                  <h1 className={styles.heading1}>{props.data.name}</h1>
                  <hr className={styles.hr} />
                  <div className={styles.boxx}>
                  <h1 className={styles.heading1}>Declaración del testigo</h1>
                  <div>
                    <span className={styles.boxx}>
                  <FaQuestion color="#ffffff" className={styles.question} />
                  <span className={styles.four}>0/4</span>
                  </span>              
                  </div>
                  </div>
                  <div classes={styles.box}>
                  <p className={styles.pera1} ><i>¡Aquí encontrarás las <b>claves</b> para resolver el crimen! Lee atentamente y <b>toca el texto</b> que consideres importante de la declaración para añadirla a tu <b>panel de claves</b></i></p>
                  
                    <p className={styles.pera1}>{props.data.response_3.text}</p>
                  </div>
                </div>
                <br />
                <br />
                <br />
                <div className={styles.btneCont} 
                style={{position: "fixed", top: "90%",width: "90%"}}
                >
                <button
                  className={styles.btne}
                  onClick={() => {
                    close()
                  }}
                >
                  Visión de Detective (2)
                </button>
              </div>
              </div>
            
            </>
          </div>
        </Fade>
      </Modal>
    </>
  );
}
