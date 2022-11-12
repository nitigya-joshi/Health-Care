import React from "react";
import { HashLink } from "react-router-hash-link";
import AppButton from "../../../../Reuseable/Button/AppButton";
import styles from "./Tables.module.css";

function Medications() {
  return (
    <div className={`${styles["table"]}`}>
      <div className={`${styles["table-card"]}`}>
        <div className={`${styles["row"]} ${styles["mb-10"]}`}>
          <h4 className={`${styles["table-heading"]}`}>Medications</h4>
          <HashLink smooth to="/appointmentTable">
            <AppButton text="Browse All" icon="fas fa-browser" />
          </HashLink>
        </div>
        <table>
          <tr>
            <th>Medication Name</th>
            <th>Date</th>
            <th>Frequency</th>
            <th>Condition</th>
          </tr>
          <tr>
            <td>Urgent</td>
            <td>22/10/2022</td>
            <td>Sri City Government Hospital</td>
            <td>25/10/2022</td>
          </tr>
          <tr>
            <td>Follow-up</td>
            <td>11/11/2022</td>
            <td>Morar Hospital</td>
            <td>15/11/2022</td>
          </tr>
          <tr>
            <td>Follow-up</td>
            <td>12/11/2022</td>
            <td>Apollo Spectra</td>
            <td>18/11/2022</td>
          </tr>
          <tr>
            <td>Cronic care</td>
            <td>13/11/2022</td>
            <td>Reliance Healthcare</td>
            <td>20/11/2022</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Medications;
