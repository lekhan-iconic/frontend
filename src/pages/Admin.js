import {
  Box,
  Tab,
  Tabs,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import Sidenav from "../Sidenav";

export default function Admin() {
  const [activeTab, setActiveTab] = useState(0);
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({ id: "", name: "", email: "" });
  const [editMode, setEditMode] = useState(false);
  const [editStudent, setEditStudent] = useState({
    id: "",
    name: "",
    email: "",
  });

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleAddStudent = () => {
    if (newStudent.id && newStudent.name && newStudent.email) {
      setStudents([...students, newStudent]);
      setNewStudent({ id: "", name: "", email: "" });
    }
  };

  const handleDeleteStudent = (studentId) => {
    setStudents(students.filter((student) => student.id !== studentId));
  };

  const handleEditStudent = (student) => {
    setEditMode(true);
    setEditStudent(student);
  };

  const handleUpdateStudent = () => {
    if (editStudent.id && editStudent.name && editStudent.email) {
      setStudents(
        students.map((student) =>
          student.id === editStudent.id ? editStudent : student
        )
      );
      setEditMode(false);
      setEditStudent({ id: "", name: "", email: "" });
    }
  };

  const handleCancelEdit = () => {
    setEditMode(false);
    setEditStudent({ id: "", name: "", email: "" });
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1>Admin</h1>
          <Box sx={{ width: "100%" }}>
            <Tabs value={activeTab} onChange={handleTabChange}>
              <Tab label="Student Management" />
              <Tab label="Facility Management" />
              <Tab label="Login Credentials" />
              <Tab label="Student Details" />
            </Tabs>
            <Box
              sx={{
                bgcolor: "background.paper",
                minHeight: 200,
                p: 2,
                mt: 2,
              }}
            >
              {activeTab === 0 && (
                <>
                  {editMode ? (
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                      }}
                    >
                      <TextField
                        label="ID"
                        value={editStudent.id}
                        onChange={(e) =>
                          setEditStudent({ ...editStudent, id: e.target.value })
                        }
                      />
                      <TextField
                        label="Name"
                        value={editStudent.name}
                        onChange={(e) =>
                          setEditStudent({
                            ...editStudent,
                            name: e.target.value,
                          })
                        }
                      />
                      <TextField
                        label="Email"
                        value={editStudent.email}
                        onChange={(e) =>
                          setEditStudent({
                            ...editStudent,
                            email: e.target.value,
                          })
                        }
                      />
                      <Button onClick={handleUpdateStudent}>Update</Button>
                      <Button onClick={handleCancelEdit}>Cancel</Button>
                    </Box>
                  ) : (
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                      }}
                    >
                      <TextField
                        size="small"
                        label="ID"
                        autoFocus
                        value={newStudent.id}
                        onChange={(e) =>
                          setNewStudent({ ...newStudent, id: e.target.value })
                        }
                      />
                      <TextField
                        size="small"
                        label="Name"
                        value={newStudent.name}
                        onChange={(e) =>
                          setNewStudent({ ...newStudent, name: e.target.value })
                        }
                      />
                      <TextField
                        size="small"
                        label="Email"
                        value={newStudent.email}
                        onChange={(e) =>
                          setNewStudent({
                            ...newStudent,
                            email: e.target.value,
                          })
                        }
                      />
                      <Button
                        size="small"
                        onClick={handleAddStudent}
                        variant="contained"
                      >
                        SEARCH
                      </Button>
                    </Box>
                  )}
                  <TableContainer>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>ID</TableCell>
                          <TableCell>Name</TableCell>
                          <TableCell>Email</TableCell>
                          <TableCell>Action</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {students.map((student) => (
                          <TableRow key={student.id}>
                            <TableCell>{student.id}</TableCell>
                            <TableCell>{student.name}</TableCell>
                            <TableCell>{student.email}</TableCell>
                            <TableCell>
                              <IconButton
                                onClick={() => handleEditStudent(student)}
                              >
                                Edit
                              </IconButton>
                              <IconButton
                                onClick={() => handleDeleteStudent(student.id)}
                              >
                                Delete
                              </IconButton>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </>
              )}
              {activeTab === 1 && <p>Content for Facility Management</p>}
              {activeTab === 2 && <p>Content for Login Credentials</p>}
              {activeTab === 3 && (
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Action</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {students.map((student) => (
                        <TableRow key={student.id}>
                          <TableCell>{student.id}</TableCell>
                          <TableCell>{student.name}</TableCell>
                          <TableCell>{student.email}</TableCell>
                          <TableCell>
                            <IconButton
                              onClick={() => handleEditStudent(student)}
                            >
                              Edit
                            </IconButton>
                            <IconButton
                              onClick={() => handleDeleteStudent(student.id)}
                            >
                              Delete
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
