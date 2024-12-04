import React, {useState} from 'react';
import {Container, Group, Button, Title, Modal} from '@mantine/core';
import GoogleLoginButton from "./GoogleLoginButton.tsx";

const Header: React.FC = () => {
    const handleClick = () => {
        alert("Функционал разрабатывается");
    };

    const [opened, setOpened] = useState(false);

    return (
        <Container style={{ padding: '20px 0', display: 'flex', justifyContent: 'space-between' }}>
            <Title order={2}>X10 Archery club</Title>
            <Group>

                {/* Кнопка открытия модального окна */}
                <Button onClick={() => setOpened(true)}>Войти или зарегистрироваться</Button>

                {/* Модальное окно */}
                <Modal
                    opened={opened}
                    onClose={() => setOpened(false)}
                    title="Войти или зарегистрироваться"
                >
                    {/* Контент модального окна */}
                    <Button variant="outline" onClick={handleClick}>Войти</Button>

                    <Button variant="outline" onClick={handleClick}>Зарегистрироваться</Button>

                    <GoogleLoginButton />

                </Modal>

            </Group>
        </Container>
    );
};

export default Header;