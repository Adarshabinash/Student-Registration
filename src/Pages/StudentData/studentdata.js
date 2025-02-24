import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const StudentData = () => {
  const [studentData, setStudentData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/getAllStudents")
      .then((res) => {
        if (res.status === 200) {
          setStudentData(res.data);
        } else {
          console.log("Some error occured!");
          toast.error("Something went wrong. Please try again later !", {
            style: { color: "white", backgroundColor: "black" },
          });
        }
      })
      .catch((err) => {
        toast.error("Something went wrong. Please try again later !", {
          style: { color: "white", backgroundColor: "black" },
        });
        console.log("Error--->", err);
      });
  }, []);

  //todo-------------------------Console logs--------------------------------
  console.log("studentData------------------->", studentData);

  return (
    <div style={styles.pageBody}>
      <h1 style={styles.title_bar2}>Student List</h1>
      <Button variant="contained" style={styles.addMoreButton}>
        Add More Students
      </Button>
      <Paper style={{ margin: "2%" }}>
        <Table style={{ fontSize: "100%" }}>
          <TableHead>
            <TableRow>
              <TableCell>Sl. No.</TableCell>
              <TableCell>Student Name</TableCell>
              <TableCell>Studentid</TableCell>
              <TableCell>Class</TableCell>
              <TableCell>Section</TableCell>
              <TableCell>Subject</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              {studentData.map((item, index) => {
                <TableCell>{index + 1}</TableCell>;
              })}
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
      <ToastContainer />
    </div>
  );
};

export default StudentData;

const styles = {
  title_bar: {
    color: "blue",
    borderBottom: "4px black solid",
    width: "60%",
    marginLeft: "20%",
  },
  title_bar2: {
    color: "black",
    borderBottom: "4px black solid",
    width: "70%",
    marginLeft: "14%",
  },
  addMoreButton: {
    marginLeft: "80%",
    width: "10%",
    fontFamily: "Bahnschrift SemiCondensed",
  },
};
