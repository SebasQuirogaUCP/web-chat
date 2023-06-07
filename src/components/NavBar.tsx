import { Navbar } from '@mantine/core';
import { ChatNav } from './ChatNav';

export function NavBar() {

    return (
        <Navbar  width={{ sm: 300 }}>
            <Navbar.Section grow>
                <ChatNav></ChatNav>
            </Navbar.Section>
        </Navbar>
    );
}