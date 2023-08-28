import { Box, Button, Container, TextField } from '@mui/material'
import SaveIcon from "@mui/icons-material/Save";
import React from 'react'

const AddTodoComp = () => {
  return (
    <Container>
      <Box
        sx={{
          display: { xs: "block", sm: "flex" },
          justifyContent: "center",
          m: { xs: 4, sm: "auto" },
          height: { xs: "120px", sm: "80px" },
        }}>
        <TextField id="outlined-basic" label="New Todo" variant="outlined" />
        <Button variant="contained" endIcon={<SaveIcon />}>
          Send
        </Button>
      </Box>
    </Container>
  );
}

export default AddTodoComp