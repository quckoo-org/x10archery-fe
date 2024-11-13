import React from 'react';
import { Container, Title, Text, Button } from '@mantine/core';

const Hero: React.FC = () => {
    const handleClick = () => {
        alert("Функционал разрабатывается");
    };

    return (
        <Container style={{ textAlign: 'center', padding: '80px 0' }}>
            <Title order={1} style={{ fontSize: '48px', marginBottom: '20px' }}>
                Стрелковый клуб 10
            </Title>
            <Text size="lg" color="dimmed" style={{ marginBottom: '30px' }}>
                Покорите мир стрельбы вместе с нами — от традиционных луков до современных арбалетов
            </Text>
            <Button size="lg" onClick={handleClick}>Подробнее</Button>
        </Container>
    );
};

export default Hero;