import { Grid, Button } from '@mui/material';
import { styled } from '@mui/system';

export const CenteredGrid = styled(Grid)({
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  '- webkit - transform': 'translate(-50%, -50%)',
  ' - moz - transform': 'translate(-50%, -50%)',
  '-o - transform': 'translate(-50%, -50%)',
  '-ms - transform': 'translate(-50%, -50%)',
  justifyContent: 'space-around'
});

export const TextButton = styled(Button)({
  color: '#fff',
  transition: 'transform 0.2s ease-out',
  textTransform: 'none',
  '&:hover': {
    background: 'none',
    transform: 'scale(1.05)'
  },
  '&:active': {
    transform: 'scale(0.95)'
  },
  '&:focus': {
    backgrounds: 'none'
  }
});