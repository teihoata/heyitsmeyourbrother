import {
    UnstyledButton,
  Container,
  Grid,
  Image,
  SimpleGrid,
  Skeleton,
  useMantineTheme,
} from "@mantine/core";
import Link from "next/link";

const PRIMARY_COL_HEIGHT = 300;

export function WelcomeGrid() {
  const theme = useMantineTheme();
  const SECONDARY_COL_HEIGHT = PRIMARY_COL_HEIGHT / 2 - theme.spacing.md / 2;

  return (
    <Container my="md">
      <SimpleGrid
        cols={2}
        spacing="md"
        breakpoints={[{ maxWidth: "sm", cols: 1 }]}
      >
        <Link href="/xbox"><Image
          radius="md"
          height={PRIMARY_COL_HEIGHT}
          src="/services/xbox.jpg"
          alt="Game Pass"
          onCl
        />
        </Link>
        <Grid gutter="md">
          <Grid.Col>
            <Image
              radius="md"
              height={SECONDARY_COL_HEIGHT}
              src="/services/youtube.png"
              alt="Youtube"
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <Image
              radius="md"
              height={SECONDARY_COL_HEIGHT}
              src="/services/spotify.png"
              alt="Spotify"
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <Image
              radius="md"
              height={SECONDARY_COL_HEIGHT}
              src="/services/netflix.png"
              alt="Netflix"
            />
          </Grid.Col>
        </Grid>
        <Grid gutter="md">
          <Grid.Col>
            <Image
              radius="md"
              height={SECONDARY_COL_HEIGHT}
              src="/services/nintendo.png"
              alt="Nintendo"
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <Image
              radius="md"
              height={SECONDARY_COL_HEIGHT}
              src="/services/pornhub.jpg"
              alt="Pornhub"
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <Image
              radius="md"
              height={SECONDARY_COL_HEIGHT}
              src="/services/office.jpg"
              alt="Office 365"
            />
          </Grid.Col>
        </Grid>
        <Image
          radius="md"
          height={PRIMARY_COL_HEIGHT}
          src="/services/apple.png"
          alt="Apple"
        />

      </SimpleGrid>
    </Container>
  );
}
