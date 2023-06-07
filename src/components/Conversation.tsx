import { Stack, Text } from '@mantine/core';

const chats = [
    {

        from: "Sebas",
        to: "Alejandra",
        message: "Hola Como estas"
    }
    , {

        from: "Sebas",
        to: "Alejandra",
        message: "Hola Como estas"
    }
]

export const Converstion = () => {

    const buildChats = () => {
        return chats.map(chat => {
            return <>
                <Text align='end'>
                    <p>
                        {chat.from}
                    </p>
                    <p>
                        {chat.to}
                    </p>
                    <p>
                        {chat.message}
                    </p>
                </Text>
            </>
        })

    }

    return (
        <>
            <Stack w={"15rem"} h={"30rem"}>
                <Text fw={"bold"}>Chats</Text>
                {buildChats()}
            </Stack>
        </>
    );
}