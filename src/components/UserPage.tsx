import * as React from 'react';
import { ReactElement } from '@types/react';
import { Card, Container } from '../components/Primitives';
import User from '../data-types/User';
import Chat from './Chat';

interface UserPageProps {
	user: User;
}

export default function UserPage( { user }: UserPageProps ) {
	return (
		<Container>
            <Card>
                {user.getName()}
            </Card>
            <Card>
                <Chat user={user} />
            </Card>
		</Container>
	);
}