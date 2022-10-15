import React, { useState } from "react";
import {
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
  Box,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import "../styles/skills.css";
import { workExperienceData, academicProjects } from "../data";
import WorkIcon from "@mui/icons-material/Work";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const Experience = () => {
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Grid container>
                  <Grid item lg={3}>
                    <Typography variant="h4">Experience</Typography>
                  </Grid>
                </Grid>
                <Divider />
              </Grid>

              {/* Only on Mobile */}
              <Grid item xs={12} sx={{ display: { xs: "block", sm: "none" } }}>
                <Grid container spacing={2}>
                  {/* Education */}
                  <Grid item xs={12}>
                    <Card>
                      <CardContent>
                        <Grid container>
                          <Grid item lg={3}>
                            <Typography variant="h4" color="#c62d70">
                              Work Experience
                            </Typography>
                          </Grid>
                        </Grid>
                        <Divider sx={{ marginBottom: "20px" }} />
                        <Grid container spacing={2}>
                          {workExperienceData.map((ele) => {
                            return (
                              <Grid item xs={12}>
                                <Card>
                                  <CardContent>
                                    <Grid container>
                                      <Grid
                                        item
                                        xs={1}
                                        sx={{
                                          display: "flex",
                                          justifyContent: "center",
                                          alignItems: "center",
                                          marginRight: "20px",
                                        }}
                                      >
                                        <WorkIcon fontSize="large" />
                                      </Grid>
                                      <Grid item xs={7}>
                                        <Typography variant="h6">
                                          {ele.role}
                                        </Typography>
                                        <Typography variant="subtitle2">
                                          {ele.company}
                                        </Typography>
                                      </Grid>
                                      <Grid
                                        item
                                        xs={12}
                                        sx={{
                                          display: "flex",
                                          justifyContent: "end",
                                        }}
                                      >
                                        <Typography variant="subtitle2">
                                          {ele.timeline}
                                        </Typography>
                                      </Grid>
                                      <Grid
                                        item
                                        xs={1}
                                        sx={{
                                          marginRight: "20px",
                                          marginTop: "5px",
                                        }}
                                      ></Grid>
                                      <Grid
                                        item
                                        xs={11}
                                        sx={{
                                          marginLeft: "25px",
                                        }}
                                      >
                                        <Typography variant="h6">
                                          Responsibilities
                                        </Typography>
                                        <Divider />
                                        <Typography sx={{ marginTop: "5px" }}>
                                          {ele.description}
                                        </Typography>
                                      </Grid>
                                    </Grid>
                                  </CardContent>
                                </Card>
                              </Grid>
                            );
                          })}
                        </Grid>
                      </CardContent>
                    </Card>
                  </Grid>

                  {/* Tools and technology */}
                  <Grid item xs={12}>
                    <Card>
                      <CardContent>
                        <Grid container>
                          <Grid item lg={3}>
                            <Typography variant="h4" color="#c62d70">
                              Academic Projects
                            </Typography>
                          </Grid>
                        </Grid>
                        <Divider sx={{ marginBottom: "20px" }} />
                        <Grid container spacing={4}>
                          <Grid item xs={12}>
                            {/* <Typography variant="h6">
                              Languages and Frameworks
                            </Typography>
                            <Divider /> */}
                            <Grid container spacing={2}>
                              {academicProjects.map((ele) => {
                                return (
                                  <Grid item xs={12}>
                                    <Card>
                                      <CardContent>
                                        <Typography variant="h6">
                                          <b>{ele.name}</b>
                                        </Typography>
                                        <Divider />
                                        <Typography>
                                          {ele.description}
                                        </Typography>
                                      </CardContent>
                                    </Card>
                                  </Grid>
                                );
                              })}
                            </Grid>
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </Grid>

              {/* Only on Destop */}
              <Grid item xs={12} sx={{ display: { xs: "none", sm: "block" } }}>
                <AppBar position="static">
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="secondary"
                    textColor="inherit"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                    sx={{ backgroundColor: "#c62d70" }}
                  >
                    <Tab label="Work Experience" {...a11yProps(0)} />
                    <Tab label="Academic Projects" {...a11yProps(1)} />
                  </Tabs>
                </AppBar>

                {/* Education */}
                <TabPanel value={value} index={0} dir={theme.direction}>
                  <Grid container spacing={2}>
                    {workExperienceData.map((ele) => {
                      return (
                        <Grid item xs={12}>
                          <Card>
                            <CardContent>
                              <Grid container>
                                <Grid
                                  item
                                  xs={1}
                                  sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    marginRight: "20px",
                                  }}
                                >
                                  <WorkIcon fontSize="large" />
                                </Grid>
                                <Grid item xs={7}>
                                  <Typography variant="h6">
                                    {ele.role}
                                  </Typography>
                                  <Typography variant="subtitle2">
                                    {ele.company}
                                  </Typography>
                                </Grid>
                                <Grid
                                  item
                                  xs={3}
                                  sx={{
                                    display: "flex",
                                    justifyContent: "end",
                                    alignItems: "center",
                                  }}
                                >
                                  <Typography>{ele.timeline}</Typography>
                                </Grid>

                                <Grid
                                  item
                                  xs={1}
                                  sx={{ marginRight: "20px", marginTop: "5px" }}
                                ></Grid>
                                <Grid
                                  item
                                  xs={11}
                                  sx={{
                                    marginLeft: "25px",
                                  }}
                                >
                                  <Typography variant="h6">
                                    Responsibilities
                                  </Typography>
                                  <Divider />
                                  <Typography sx={{ marginTop: "5px" }}>
                                    {ele.description}
                                  </Typography>
                                </Grid>
                              </Grid>
                            </CardContent>
                          </Card>
                        </Grid>
                      );
                    })}
                  </Grid>
                </TabPanel>

                {/* Skills */}
                <TabPanel value={value} index={1} dir={theme.direction}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      {/* <Typography variant="h6">Libraries</Typography>
                      <Divider /> */}
                      <Grid container spacing={2}>
                        {academicProjects.map((ele) => {
                          return (
                            <Grid item xs={12}>
                              <Card>
                                <CardContent>
                                  <Typography variant="h6">
                                    <b>{ele.name}</b>
                                  </Typography>
                                  <Divider />
                                  <Typography sx={{ marginTop: "5px" }}>
                                    {ele.description}
                                  </Typography>
                                </CardContent>
                              </Card>
                            </Grid>
                          );
                        })}
                      </Grid>
                    </Grid>
                  </Grid>
                </TabPanel>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Experience;
