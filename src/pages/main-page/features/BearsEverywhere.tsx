import { HStack, VStack } from '@common/mui-stacks.tsx';
import { Button, Typography } from '@mui/material';
import useAppStore from '@store/AppStore.ts';

export default function BearsEverywhere() {
  const { bearCount, incrementBears, decrementBears, clearBears } = useAppStore();
  const bearEmoji = '🐻';
  const bearString = bearEmoji.repeat(bearCount);

  return (
    <VStack>
      <HStack>
        <Button onClick={decrementBears}>Less</Button>
        <Button onClick={incrementBears}>More</Button>
        <Button onClick={clearBears}>Clear</Button>
      </HStack>

      <VStack sx={{ width: '20em' }}>
        <Typography>{bearCount} BEARS!</Typography>
        <Typography
          onClick={decrementBears}
          sx={{
            fontSize: '2em',
            minHeight: '9em',
            userSelect: 'none',
            cursor: 'pointer',
          }}
        >
          {bearString}
        </Typography>
      </VStack>
    </VStack>
  );
}
