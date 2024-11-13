import React from 'react';
import { Container, Group, Button, Title } from '@mantine/core';

const Header: React.FC = () => {
    const handleClick = () => {
        alert("Функционал разрабатывается");
    };

    return (
        <Container style={{ padding: '20px 0', display: 'flex', justifyContent: 'space-between' }}>
            <Title order={2}>X10 Archery club</Title>
            <Group>
                <Button variant="outline" onClick={handleClick}>Войти</Button>
                <Button variant="filled" onClick={handleClick}>Зарегистрироваться</Button>
            </Group>
        </Container>
    );
};

export default Header;