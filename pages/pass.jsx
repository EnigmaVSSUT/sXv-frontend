import { Button } from "@mui/material";
import ReactToPrint from "react-to-print";
import React, { Component } from "react";
import styles from "../styles/pass.module.css";
import { useRef } from "react";
const Pass = () => {
  const ref = useRef();
  return (
    <div>
      <ReactToPrint
        trigger={() => {
          return <Button>Print</Button>;
        }}
        content={() => ref.current}
        //    documentTitle="Star-Night Pass"
        //    pageStyle="print"
        ref={ref}
      />
      <div className={styles.html}>
        <div className={styles.ticket}>
          <div className={styles.left}>
            <div className={styles.image}>
              <p className={styles.admit}>
                <span>ADMIT ONE</span>
                <span>ADMIT ONE</span>
                <span>ADMIT ONE</span>
              </p>
            </div>
            <div className={styles.ticketinfo}>
              <p className={styles.date}>
                <span>MONDAY</span>
                <span className="june-29">MARCH 6TH</span>
                <span>2023</span>
              </p>
              <div className={styles.showname}>
                <h1>Star Night</h1>
                <h2>Asees Kaur</h2>
              </div>
              <div className={styles.time}>
                <p>
                  STARTS <span>@</span> 7:00 PM
                </p>
              </div>
              <p className={styles.location}>
                <span>Open Air Theatre</span>
                <span className="separator">
                  <i className="far fa-smile"></i>
                </span>
                <span>VSSUT, Burla</span>
              </p>
            </div>
          </div>
          <div className={styles.right}>
            <p className={styles.admit}>
              <span>ADMIT ONE</span>
              <span>ADMIT ONE</span>
              <span>ADMIT ONE</span>
            </p>
            <div className={styles.rightinfo}>
              <div className={styles.det}>
                <div className={styles.showname}>
                  <h1>Star Night</h1>
                </div>
                <div className={styles.time}>
                  <p>
                    7:00 PM <span>TO</span> 10:00 PM
                  </p>
                  <p>
                    DOORS <span>@</span> 6:00 PM
                  </p>
                </div>
              </div>
              <div className={styles.barcode}>
                <p>Soham Samantaray</p>
                <p>COLLEGE: VSSUT</p>
                <p>ID:21021452666</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pass;
