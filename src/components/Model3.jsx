import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import styles from "./MobileComponent.module.css";
import Close from "@material-ui/icons/Close";
import image1 from "../assets/images/image1 smile.svg";
import { Api } from "../config/Api";
import { BiTimeFive } from "react-icons/bi";
import Model4 from "./Model4";

export default function Model3(props) {
  const useStyles = makeStyles((theme) => ({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      width: "90%",
      height: "70%",
      borderRadius: "8px",
      outline: "none",
      marginTop: "140px",
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
    handleClose()
    props.close()
    props.closefirst()
}

  return (
    <>
      <button
        className={styles.bottombtn1}
        onClick={() => {
          props.close();
        }}
      >
        Atrás
      </button>
      <button
        className={styles.bottombtn2}
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
                  onClick={close}
                  fontSize="large"
                  className={styles.close}
                />
                <div className={styles.imageCont}>
                  <img src={image1} alt={"image1"} className={styles.image1} />
                </div>
                <div className={styles.Cont1}>
                  <h1 className={styles.heading1}>{props.data.name}</h1>
                  <hr className={styles.hr} />
                  <div classes={styles.box1}>
                    <p className={styles.pera1}>{props.data.result_4.text}</p>
                    <p className={styles.pera1}>
                      {props.data.result_4.textItalic}
                    </p>
                    <div className={styles.btns}>
                      <button className={styles.fivemin}>
                        <BiTimeFive color="#c40d0d" size={25} />
                        &nbsp;+5 min
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.btn1Cont}>
                <Model4
                  data={props.data}
                  close={handleClose}
                  closesecond={props.close}
                  closefirst={props.closefirst}
                />
              </div>
            </>
          </div>
        </Fade>
      </Modal>
    </>
  );
}
