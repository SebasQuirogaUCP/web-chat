import { usePeopleStore } from '@/store/PeopleStore';
import { createStyles, Avatar, Text, Group, Button } from '@mantine/core';
import { IconPhoneCall, IconAt } from '@tabler/icons-react';
import { People } from '../../data/people';
import { PeopleType } from '../../types/PeopleType';

const useStyles = createStyles((theme) => ({
    icon: {
        color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
    },

    name: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    },
}));


export function ChatNav() {
    const { classes } = useStyles();
    const { people, addPerson, generateRandomPeople } = usePeopleStore((state) => ({ people: state.people, addPerson: state.addPerson, generateRandomPeople: state.generateRandomPeople }))


    console.info("Persons", people)

    const addPersonLocal = () => {
        const newPerson: PeopleType = {
            avatar: '',
            title: 'Architect',
            name: 'Alejandra Lopez',
            email: 'alejandra.lopez@synerio.com',
            phone: '1232345'
        }
        addPerson(newPerson)
    }

    const addRandomPeopleLocal = () => {
        generateRandomPeople()
    }

    return <>
        {people.map((person, i) => {
            return <div>
                <Group noWrap key={i}>
                    <Avatar src={person.avatar} size={94} radius="md" />
                    <div>
                        <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
                            {person.title}
                        </Text>

                        <Text fz="lg" fw={500} className={classes.name}>
                            {person.name}
                        </Text>

                        <Group noWrap spacing={10} mt={3}>
                            <IconAt stroke={1.5} size="1rem" className={classes.icon} />
                            <Text fz="xs" c="dimmed">
                                {person.email}
                            </Text>
                        </Group>

                        <Group noWrap spacing={10} mt={5}>
                            <IconPhoneCall stroke={1.5} size="1rem" className={classes.icon} />
                            <Text fz="xs" c="dimmed">
                                {person.phone}
                            </Text>
                        </Group>
                    </div>
                </Group>
            </div>
        })}
        <Button onClick={() => addPersonLocal()}> Add Person</Button>
        <Button onClick={() => addRandomPeopleLocal()}> Add new people</Button>
    </>
}