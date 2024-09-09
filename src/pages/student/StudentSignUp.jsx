import { TextField } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const StudentSignUp = () => {
  return (
    <div>
 <div className="container">
 <header>
    <div className="logo">
      <Link to="/">My Mentor</Link>
    </div>
   </header>
      </div>

     <div className="container">
     <TextField
          id="outlined-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
        />
     </div>
    </div>

  );
};

export default StudentSignUp;
