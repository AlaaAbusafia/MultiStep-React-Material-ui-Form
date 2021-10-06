import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';
import './SignUpStep.css';

import {
    Typography,
    Button, 
    Grid,
    Checkbox,
    TextField,
    OutlinedInput,
    FormControl,
    InputLabel, 
    InputAdornment,
    IconButton, 
    
} from '@material-ui/core';

const useStyles = makeStyles({
    mainContainer: {
        display: 'grid',
        justifyContent: 'center',
        position: 'relative',
        zIndex: 5
    },
    formContainer: {
        position: 'relative',
        width: "28.125rem",
        padding: '2rem'

    },
    textInput: {
        width: '100%',
        marginBottom: '1rem'
    }
});


const SignUpStep = () => {
    const styles = useStyles();
    return (
        <div className={styles.mainContainer}>
            <Typography 
                varient="h5"
                style={{ color: "#999", textAlign: "center"}}
             >
                Sign Up With Email
            </Typography>
            <div className={styles.formContainer}>
                <form>
                    <TextField className={styles.textInput} 
                            label= "First Name"
                            variant= "outlined" />
                    <TextField className={styles.textInput}
                            label= "Last Name"
                            variant= "outlined" />
                    <IntlTelInput
                        preferredCountries= {['nz']}
                    />
                    <TextField className={styles.textInput}
                            label= "Email"
                            variant= "outlined" />
                    
                    <FormControl>
                        <InputLabel>Password</InputLabel>
                        <OutlinedInput
                            labelWidth={70}
                            endAdornment={
                                <InputAdornment position='end'>
                                    <IconButton edge='end' />
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    
                </form>
            </div>
        </div>
    )
}

export default SignUpStep;
