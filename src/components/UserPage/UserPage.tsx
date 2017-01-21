import * as React from 'react';
import Card from '../primitives/Card';
import Container from '../primitives/Container';
import User from '../../data-types/User';
import Chat from '../Chat/Chat';

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