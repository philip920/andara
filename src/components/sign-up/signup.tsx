import React, { useState } from "react";
import { Grid, Typography } from '@mui/material';
import { CenteredGrid, TextButton } from "../common/styled-components";

const SignUpFlow: React.FunctionComponent = () => {

  const [currentStep, setCurrentStep] = useState(1);

  return (
    <CenteredGrid>
      <Typography>
        New to Andara?
      </Typography>
      <Grid sx={{ flexDirection: 'column' }}>
        <TextButton>
          <Typography>
            Yes, sign me up
          </Typography>
        </TextButton>
        <TextButton>
          <Typography>
            No, use different wallet
          </Typography>
        </TextButton>
      </Grid>
    </CenteredGrid>
  )
}

export default SignUpFlow
