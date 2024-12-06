import React from "react";
import { Avatar, Menu, Text, Group, Container, Title } from "@mantine/core";
import GoogleLoginButton from "../GoogleLoginButton.tsx";

interface HeaderProps {
    isLoggedIn: boolean;
    onLogout: () => void;
    userInfo: any;
    setIsLoggedIn: (value: boolean) => void;
    setUserInfo: (value: any) => void;
}

const Header: React.FC<HeaderProps> = ({ isLoggedIn, userInfo, setIsLoggedIn, setUserInfo }) => {
    const handleLogout = () => {
        // Удаляем данные из localStorage
        localStorage.removeItem("googleToken");

        // Сбрасываем состояние пользователя
        setIsLoggedIn(false);
        setUserInfo(null);
    };

    const handleGoogleLoginSuccess = (userInfo: any) => {
        setIsLoggedIn(true);
        setUserInfo(userInfo); // Сохраняем данные пользователя
    };

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
                            <Menu.Item onClick={handleLogout} color="red">
                                Выйти
                            </Menu.Item>
                        </Menu.Dropdown>
                    </Menu>
                ) : (
                    <GoogleLoginButton onLoginSuccess={handleGoogleLoginSuccess} />
                )}
            </Group>
        </Container>
    );
};

export default Header;