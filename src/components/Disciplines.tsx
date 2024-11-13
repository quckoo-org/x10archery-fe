import React from 'react';
import { Container, SimpleGrid, Card, Title, Text, Image } from '@mantine/core';

const disciplines = [
    { title: 'Традиционный лук', description: 'Лук, сохранивший историческую форму и стиль стрельбы.', image: '/images/traditional-bow.png' },
    { title: 'Классический лук', description: 'Современный лук с прицелом, популярный в спортивной стрельбе.', image: '/images/olympic-recurve-bow.jpg' },
    { title: 'Классический бесприцельный лук', description: 'Лук для интуитивной стрельбы без прицела, подходит для тренировки навыков.', image: '/images/barebow.jpg' },
    { title: 'Блочный лук', description: 'Лук с блоками, обеспечивающий точность и высокую скорость выстрела.', image: '/images/compound-bow.png' },
    { title: 'Метание ножей', description: 'Искусство метания ножей в цель для развития точности и концентрации.', image: '/images/throwing-knives.png' },
    { title: 'Арбалет', description: 'Оружие с горизонтальным луком, обеспечивающее мощные и точные выстрелы.', image: '/images/crossbow.png' },
];

const Disciplines: React.FC = () => {
    return (
        <Container style={{ padding: '50px 0' }}>
            <Title order={2} style={{ textAlign: 'center', marginBottom: '40px' }}>Мы обучим Вас дисциплинам</Title>
            <SimpleGrid cols={3} spacing="lg">
                {disciplines.map((feature, index) => (
                    <Card key={index} shadow="sm" padding="lg">
                        <Image src={feature.image} alt={feature.title} height={160} style={{ marginBottom: '20px' }} />
                        <Title order={4}>{feature.title}</Title>
                        <Text size="sm" color="dimmed">{feature.description}</Text>
                    </Card>
                ))}
            </SimpleGrid>
        </Container>
    );
};

export default Disciplines;