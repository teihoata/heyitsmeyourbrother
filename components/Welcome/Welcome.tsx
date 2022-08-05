import { Title, Text, Anchor } from '@mantine/core';
import useStyles from './Welcome.styles';

export function Welcome() {
  const { classes } = useStyles();

  return (
    <>
      <Title className={classes.title} align="center" mt={100}>
        Hey, it's me{' '}
        <Text inherit variant="gradient" component="span">
          your brother
        </Text>
      </Title>
      <Text color="dimmed" align="center" size="lg" sx={{ maxWidth: 700 }} mx="auto" mt="xl">
        {`Ever wanted a family or friends group discount but you don't have either? 
        Well today's your lucky day, let strangers be your family! 
        `}
        <Anchor href="https://google.co.nz/" size="lg">
        Here's how it works!
        </Anchor>
      </Text>
    </>
  );
}
