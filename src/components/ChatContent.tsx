import { Container, Grid, SimpleGrid, Skeleton, useMantineTheme, rem } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
import { Converstion } from './Conversation';
import { TopMenu } from './TopMenu';
import { BottonMenu } from './BottonMenu';


export const ChatContent = () => {
    const { height } = useViewportSize()
    const secondaryHeight = height / 3

    return (
        <>
            <SimpleGrid cols={2} spacing="md" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
                <Grid>
                    <Converstion />
                </Grid>
                <Grid>
                    <Grid.Col>
                        <TopMenu />
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <BottonMenu />
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <BottonMenu />
                    </Grid.Col>
                </Grid>
            </SimpleGrid>
        </>
    );
}