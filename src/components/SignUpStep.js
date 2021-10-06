import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {
    Typography,
    Button, 
    Checkbox,
    TextField,
    OutlinedINput,
    FormControl,
    InputLabel,
    Grid
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
                    
                </form>
            </div>
        </div>
    )
}

export default SignUpStep;
