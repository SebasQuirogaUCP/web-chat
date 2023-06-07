import { ChatNav } from "@/components/ChatNav";
import { Button, Container, Group } from "@mantine/core";
import { People } from "../../data/people";
import { NavBar } from "@/components/NavBar";
import { ChatContent } from "@/components/ChatContent";

export default function page() {

    return <Group grow>
        <NavBar></NavBar>
        <ChatContent></ChatContent>
    </Group>
}