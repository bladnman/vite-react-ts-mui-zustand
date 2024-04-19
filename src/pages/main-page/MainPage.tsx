import { VStack } from '@common/mui-stacks.tsx';
import { Typography } from '@mui/material';
import BearsEverywhere from '@pages/main-page/features/BearsEverywhere.tsx';

export default function MainPage() {
  return (
    <VStack fill spacing={3}>
      <VStack sx={{ width: '40em' }}>
        <Typography variant={'h3'}>Welcome to your new app!</Typography>
        <Typography>
          As an example we have created a simple bear component for you. Edit the
          MainPage.tsx file to see the changes.
        </Typography>
      </VStack>

      <BearsEverywhere />
    </VStack>
  );
}
