import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Stepper, Step, StepLabel, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        width: '50%',
        margin: '6rem auto',
        border: '1px solid #ccc',
        "& .MuiStepIcon-root.MuiStepIcon-active": {
            color: "red"
        }
    },

});

const UserForm = () => {

    function getSteps(){
        return ["SIGN UP" , "CHOOSE PLAN", "CHECKOUT"];
    }

    function getStepsContent(stepIndex) {
        switch(stepIndex) {
            case 0: 
                return "Step One (SIGN UP)";
            
            case 1: 
                return "Step Two (CHOOSE PLAN)";
            
            case 2: 
                return "Step Three (CHECKOUT)";
            
            default:
                return "UNknown Step!";

        }
    }

    const steps = getSteps();
    const styles = useStyles();
    return (
        <div>
            <Stepper alternativeLabel className={styles.root}>
                {steps.map(label => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            
        </div>
    )
    
}


export default UserForm;