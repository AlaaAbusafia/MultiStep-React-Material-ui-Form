import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IntlTelInput from 'react-intl-tel-input';
import useForm from './useForm';
import 'react-intl-tel-input/dist/main.css';
import './SignUpStep.css';

import {
    Typography,
    Button,
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
import BlockSharpIcon from '@material-ui/icons/BlockSharp';

    

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
        margin: '1rem 0'
    },
    btn: {
        width: '100%',
        color: 'white',
        height: '3rem',
        background: 'red',
        "&:hover":{
             background: '#333',
        }
    },
    disabledBtn: {
        background: "rgba(0,0,0, 0.38",
        width: '100%',
        color: 'white',
        height: '3rem'
    },
    errorMsg: {
        marginTop: '-1rem',
        color: 'red',
        fontSize: '1rem',
        fontWeight: '200'
    }
});


const SignUpStep = () => {
    //Define The state Schema
    const stateSchema = {
        firstname: {value: "", error: ""},
        lastname: {value: "", error: ""},
        email: {value: "", error: ""},
        password: {value: "", error: ""},
        confirmPassword: {value: "", error: ""}
    }

    const stateValidatorSchema = {
        firstname: {
            required: true,
            validator: {
                func: value => /^([A-Za-z][A-Za-z'-])+([A-Za-z][A-Za-z'-]+)*/.test(value),
                error: "Firstname must be  more than ONE character"
             }
        },
        lastname: {
            required: true,
            validator: {
                func: value => /^([A-Za-z][A-Za-z'-])+([A-Za-z][A-Za-z'-])+([A-Za-z][A-Za-z'-])*/.test(value),
                error: "Lastname must be  more than THREE characters"
             }
        },
        email: {
            required: true,
            validator: {
                func: value => /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(value),
                error: "Invalid email address"
             }
        },
        password: {
            required: true,
            validator: {
                func: value => /^(?=.*[A-Za-z])(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/.test(value),
                error: "Must include special character and at least 6 charachters"
             }
        }
    }

    const {
        values,
        errors,
        dirty,
        handleOnChange } = useForm(stateSchema, stateValidatorSchema);

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

    const { firstname, lastname, email, password, confirmPassword } = values;

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
                            variant= "outlined"
                            name="firstname"
                            value= {firstname}
                            onChange={handleOnChange}
                    />
                    {errors.firstname && dirty.firstname && (
                        <Typography className= {styles.errorMsg}>
                            {errors.firstname}
                        </Typography>
                    )}
                    <TextField className={styles.textInput}
                            label= "Last Name"
                            variant= "outlined" 
                            name="lastname"
                            value= {lastname}
                            onChange={handleOnChange}
                    />
                    {errors.lastname && dirty.lastname && (
                        <Typography className= {styles.errorMsg}>
                            {errors.lastname}
                        </Typography>
                    )}
                    <IntlTelInput
                        preferredCountries= {['nz']}
                    />
                    <TextField className={styles.textInput}
                            label= "Email"
                            variant= "outlined"
                            name="email"
                            value= {email}
                            onChange={handleOnChange}
                    />
                    {errors.email && dirty.email && (
                        <Typography className= {styles.errorMsg}>
                            {errors.email}
                        </Typography>
                    )}
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
                            name="password"
                            value= {password}
                            onChange={handleOnChange}
                        />
                    </FormControl>
                    {errors.password && dirty.password && (
                        <Typography className= {styles.errorMsg}>
                            {errors.password}
                        </Typography>
                    )}
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
                            name="confirmPassword"
                            value= {confirmPassword}
                            onChange={handleOnChange}
                        />
                    </FormControl>
                    {confirmPassword !== password ? 
                        <Typography className= {styles.errorMsg}>Passwords don't match</Typography> : null
                    }
                    {
                        !firstname ||
                        !lastname ||
                        !email ||
                        !password ||
                        !confirmPassword ||
                        confirmPassword !== password
                        ?
                        (
                            <Button
                            className={styles.disabledBtn}
                            variant="contained"
                            disabled
                            endIcon= {<BlockSharpIcon />}
                        >
                            SIGN UP</Button>
                        )
                        :
                        (
                             <Button
                            className={styles.btn}
                            variant="contained"
                            type="submit"
                            endIcon= {<SendSharpIcon />}
                        >
                            SIGN UP</Button>

                        )
                    }
                        
                    
                    
                </form>
            </div>
        </div>
    )
}

export default SignUpStep;
