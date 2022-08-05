import {
    Avatar,
    Badge,
    Table,
    Group,
    Text,
    Anchor,
    ScrollArea,
    useMantineTheme,
    Container,
    Button,
  } from '@mantine/core';

  interface UsersTableProps {
    data: { avatar: string; name: string; country: string; subType: string; numberFree: string }[];
  }
  
  const countryColors: Record<string, string> = {
    newzealand: 'blue',
    australia: 'cyan',
    america: 'pink',
  };
  
  export function XboxTable({ data }: UsersTableProps) {
    const theme = useMantineTheme();
    const rows = data.map((item) => (
      <tr key={item.name}>
        <td>
          <Group spacing="sm">
            <Avatar size={30} src={item.avatar} radius={30} />
            <Text size="sm" weight={500}>
              {item.name}
            </Text>
          </Group>
        </td>
  
        <td>
          <Badge
            color={countryColors[item.country.toLowerCase().replace(' ', '')]}
            variant={theme.colorScheme === 'dark' ? 'light' : 'outline'}
          >
            {item.country}
          </Badge>
        </td>
        <td>
          <Anchor<'a'> size="sm" href="#" onClick={(event) => event.preventDefault()}>
            {item.subType}
          </Anchor>
        </td>
        <td>
          <Text size="sm" color="dimmed">
            {item.numberFree}
          </Text>
        </td>
        <td>
          <Button variant='outline'>Join</Button>
        </td>
      </tr>
    ));
  
    return (
      <Container my="md">
      <ScrollArea>
        <Table sx={{ minWidth: 800 }} verticalSpacing="sm">
          <thead>
            <tr>
              <th>Bro In Charge</th>
              <th>Country</th>
              <th>Type of Subscription</th>
              <th>Free Spaces</th>
              <th />
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </ScrollArea>
      </Container>
    );
  }