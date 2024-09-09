import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, Card, CardContent, FormControlLabel, Radio, RadioGroup, Typography, Box } from '@mui/material';
import { GoPerson } from "react-icons/go";

import './sign.css';

const SignUp = () => {
  const [selectedRole, setSelectedRole] = useState('');
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      role: '',
    },
    
    validationSchema: Yup.object({
      role: Yup.string().required('Please select a role'),
    }),
    onSubmit: (values) => {
      if (values.role === 'Student') {
        navigate('/student-signup');
      } else if (values.role === 'BusinessOwner') {
        navigate('/business-owner-signup');
      }
    },
  });

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
    formik.setFieldValue('role', event.target.value);
  };

  const handleCardClick = (value) => {
    setSelectedRole(value);
    formik.setFieldValue('role', value);
  };

  const getCircleColor = (role) => {
    return selectedRole === role ? '#2196F3' : 'white';
  };

  return (
    <div>
      <div className="container">
 <header>
    <div className="logo">
      <Link to="/">My Mentor</Link>
    </div>
   </header>
      </div>
    <Box className="sign-up-container container">
      <Typography variant="h4" gutterBottom>
        Join as a Business Owner or Student
      </Typography>
      <RadioGroup
        aria-label="role"
        name="role"
        value={selectedRole}
        onChange={handleRoleChange}
        className="radio-group">

        <Card className={`role-card ${selectedRole === 'BusinessOwner' ? 'selected' : ''}`}
          onClick={() => handleCardClick('BusinessOwner')}  >
          <CardContent>
            <Box
              className="circle"
              style={{ backgroundColor: getCircleColor('BusinessOwner') }}
              onClick={(e) => e.stopPropagation()}
            />
            <FormControlLabel
              value="BusinessOwner"
              control={<Radio sx={{ display: 'none' }} />}
              label={
                <Box>
                  <GoPerson />
                  <Typography variant="h6">
                    I'm a Business Owner, hiring for a project
                  </Typography>
                </Box>}
              sx={{ m: 0 }}
            />
          </CardContent>
        </Card>
        <Card
          className={`role-card ${selectedRole === 'Student' ? 'selected' : ''}`}
          onClick={() => handleCardClick('Student')}
        >
          <CardContent>
            <Box
              className="circle"
              style={{ backgroundColor: getCircleColor('Student') }}
              onClick={(e) => e.stopPropagation()}
            />
            <FormControlLabel
              value="Student"
              control={<Radio sx={{ display: 'none' }} />}
              label={
                <Box>
                  <GoPerson />
                  <Typography variant="h6">
                    I'm a student, looking for work
                  </Typography>
                </Box>}
              sx={{ m: 0 }}
            />
          </CardContent>
        </Card>
      </RadioGroup>
      {formik.errors.role && (
        <Typography color="error" variant="body2" sx={{ mt: 1 }}>
          {formik.errors.role}
        </Typography>)}
      <Button
        variant="contained"
        color="primary"
        onClick={formik.handleSubmit}
        sx={{ mt: 3 }}>
        Create an account
      </Button>
      <Typography variant="body2" sx={{ mt: 2 }}>
        Already have an account? <Link to="/login">Log In</Link>
      </Typography>
    </Box>
    </div>

  );
};

export default SignUp;
