import React , { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Stepper, Step, StepLabel, Button } from '@material-ui/core';
import SignUpStep from './SignUpStep';
import ChoosePlan from './ChoosePlan';
import Checkout from './Checkout';

const useStyles = makeStyles({
    root: {
        width: '80%',
        margin: '6rem auto',
        border: '1px solid #ccc',
        "& .MuiStepIcon-root.MuiStepIcon-active": {
            color: "red"
        },
        "& .MuiStepIcon-root.MuiStepIcon-completed": {
            color: "green"
        }
    }

});

const UserForm = () => {
    //React Hooks
    const [activeStep, setActiveStep] = useState(0);

    function getSteps(){
        return ["SIGN UP" , "CHOOSE PLAN", "CHECKOUT"];
    }

    const HandleNextStep = () => {
        setActiveStep(prevActiveStep => prevActiveStep + 1)
    }

    function getStepsContent(stepIndex) {
        switch(stepIndex) {
            case 0: 
                return <SignUpStep />;
            
            case 1: 
                return <ChoosePlan />;
            
            case 2: 
                return <Checkout />;
            
            default:
                return "Unknown Step!";

        }
    }

    const steps = getSteps();
    const styles = useStyles();
    return (
        <div className={styles.root}>
            <Stepper alternativeLabel activeStep={activeStep}>
                {steps.map(label => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
                <>
                {activeStep === steps.length ? "Thank you, Your registeration is Completed!" : (
                    <>
                        {getStepsContent(activeStep)}
                        <Button onClick={HandleNextStep}>
                            {activeStep === steps.length ? " Finish" : "Next"}
                        </Button>
                    </>
                )}
                </>
                
            </Stepper>
               
            
        </div>
    )
    
}


export default UserForm;