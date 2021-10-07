import React, {useState} from 'react';
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
    IconButton
} from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import SendSharpIcon from '@material-ui/icons/SendSharp';

    

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
        width: '96%',
        marginBottom: '1rem'
    },
    btn: {
        width: '100%',
        color: 'white',
        height: '3rem',
        background: 'red',
        "&:hover":{
             background: '#333',
        }
    }
});


const SignUpStep = () => {
    //Add Hooks
    const [ showPasswordValue, setShowPasswordValue ] = useState({
        showPassword: false
    });

    const [ showConfirmPasswordValue, setShowConfirmPasswordValue ] = useState({
        showConfirmPassword: false
    });

    const handleClickShowPassword = () =>{
        setShowPasswordValue({
            showPassword: !showPasswordValue.showPassword
        })
    }

    const handleClickShowConfirmPassword = () =>{
        setShowConfirmPasswordValue({
            showConfirmPassword: !showConfirmPasswordValue.showConfirmPassword
        })
    }

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
                    
                    <FormControl className={styles.textInput} >
                        <InputLabel>Password</InputLabel>
                        <OutlinedInput
                            labelWidth={70}
                            type={showPasswordValue.showPassword? "text" : "password"}
                            endAdornment={
                                <InputAdornment position='end'>
                                    <IconButton 
                                        edge='end'
                                        onClick={handleClickShowPassword} >
                                            {showPasswordValue.showPassword? <Visibility /> : <VisibilityOff /> }
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    <FormControl className={styles.textInput} >
                        <InputLabel>Confirm Password</InputLabel>
                        <OutlinedInput
                            labelWidth={70}
                            type={showConfirmPasswordValue.showConfirmPassword? "text" : "password"}
                            endAdornment={
                                <InputAdornment position='end'>
                                    <IconButton 
                                        edge='end'
                                        onClick={handleClickShowConfirmPassword} >
                                            {showConfirmPasswordValue.showConfirmPassword? <Visibility /> : <VisibilityOff /> }
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    <>
                        <Button
                            className={styles.btn}
                            variant="contained"
                            type="submit"
                            endIcon= {<SendSharpIcon />}
                        >
                            SIGN UP</Button>
                    </>
                    
                </form>
            </div>
        </div>
    )
}

export default SignUpStep;
