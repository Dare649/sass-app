
import { LinearProgress, Box, Typography } from '@mui/material';

const ProgressBar = ({ step }) => {
  const progress = (step / 3) * 100;

  return (
    <Box sx={{ width: '100%', my: 3 }}>
      <Typography variant="h6">Step {step} of 3</Typography>
      <LinearProgress variant="determinate" value={progress} />
    </Box>
  );
};

export default ProgressBar;
