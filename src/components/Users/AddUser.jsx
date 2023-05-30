import { Box, FormControl, Grid, TextField } from "@material-ui/core";

export const AddUser = () => {
  return (
    <Grid
      item
      xs={8}
      container
      display="flex"
      direction="row"
      alignContent="center"
      wrap="nowrap"
      justifyContent="space-around"
      component="form"
      noValidate
      autoComplete="off"
      sm={{marginLeft: '1rem'}}
      BoxShadow='box-shadow: -2px 2px 50px 3px rgba(0,0,0,0.37);'
    >
      <TextField
        required
        id="outlined-required"
        label="Name"
        title="Name"
        type="text"
      />
      <TextField
        required
        label="Email Address"
        type="email"
        titlte="Email Address"
        id="outlined-required"
      />
      <TextField
        required
        label="Phone Number"
        type="phone"
        titlte="Phone Number"
        id="outlined-required"
      />
    </Grid>
  );
};

export default AddUser;
