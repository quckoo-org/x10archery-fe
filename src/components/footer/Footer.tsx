import React from 'react';
import { Container, Text } from '@mantine/core';

const Footer: React.FC = () => {
    return (
        <Container style={{ textAlign: 'center', padding: '20px 0' }}>
            <Text color="dimmed">© 2024 | Стрелковый клуб x10</Text>
        </Container>
    );
};

export default Footer;