// Header.tsx
import React from 'react';
import {Avatar, Menu, Text, Group, Container, Title} from "@mantine/core";
import { useAuth } from '../../contexts/AuthContext';
import GoogleLoginCallBack from "../google/GoogleLoginCallBack.tsx";

const Header: React.FC = () => {
    const { isLoggedIn, userInfo, setIsLoggedIn } = useAuth();

    return (
        <Container style={{ padding: "20px 0", display: "flex", justifyContent: "space-between" }}>
            <Title order={2}>X10 Archery club</Title>
            <Group>
                {isLoggedIn ? (
                    <Menu shadow="md" width={200}>
                        <Menu.Target>
                            <Group style={{ cursor: "pointer" }}>
                                <Avatar
                                    src={userInfo?.picture}
                                    alt={userInfo?.name}
                                    radius="xl"
                                    size="md"
                                />
                                <div>
                                    <Text size="sm">{userInfo?.name || "Пользователь"}</Text>
                                    <Text size="xs" color="dimmed">{userInfo?.email || ""}</Text>
                                </div>
                            </Group>
                        </Menu.Target>
                        <Menu.Dropdown>
                            <Menu.Item onClick={()=> setIsLoggedIn(false)} color="red">
                                Выйти
                            </Menu.Item>
                        </Menu.Dropdown>
                    </Menu>
                ) : (
                    <GoogleLoginCallBack />
                )}
            </Group>
        </Container>
    );
};

export default Header;