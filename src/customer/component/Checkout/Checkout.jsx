import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useLocation, useNavigate } from 'react-router-dom';
import DeliverAddressForm from './DeliverAddressForm';
import OrderSummary from './OrderSummary';
import PaymentPage from './PaymentPage';

const steps = ['Login', 'Delivery Address', 'Order Summary', 'Payment'];

export default function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
  const querySearch = new URLSearchParams(location.search);
  const step = querySearch.get('step') ? parseInt(querySearch.get('step'), 10) : 0;

  const handleNext = () => {
    const nextStep = step + 1;
    navigate(`?step=${nextStep}`);
  };

  const handleBack = () => {
    const prevStep = step - 1;
    navigate(`?step=${prevStep}`);
  };

  return (
    <div className='px-10 lg:px-20'>
      <br />
      <Box sx={{ width: '100%' }}>
        <Stepper activeStep={step}>
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {step === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              <h3 className=''>Your order is placed🙌🎉</h3>
            </Typography>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                color="inherit"
                disabled={step === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleNext}>
                {step === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </Box>

            <div className='mt-10'>
            {step === 1 && <DeliverAddressForm />}
            {step === 2 && <OrderSummary />}
            {step === 3 && <PaymentPage/>}
            </div>
          </React.Fragment>
        )}
      </Box>
    </div>
  );
}
