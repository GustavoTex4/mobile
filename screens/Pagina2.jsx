import React from 'react'
import { Button } from 'react-native'
import { Avatar, Card, Text } from 'react-native-paper'



const Pagina2 = ({navigation}) => {
    const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
    return (
        <>
             <Button title='Pagina 1' onPress={() => navigation.navigate('pagina1')} />
                <Button title='Pagina 3' onPress={() => navigation.navigate('pagina3')} />
            <Card style={{ marginBotton: 20 }}>
                <Card.Content>
                    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                </Card.Content>
                <Text variant="titleLarge">Card title</Text>
                <Text variant="bodyMedium">Card content</Text>
                <Card.Actions>
                    <Button>Cancel</Button>
                    <Button>Ok</Button>
                </Card.Actions>
            </Card>
            
            <Card>
                <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
                <Card.Content>
                    <Text variant="titleLarge">Card title</Text>
                    <Text variant="bodyMedium">Card content</Text>
                </Card.Content>
                <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                <Card.Actions>
                    <Button>Cancel</Button>
                    <Button>Ok</Button>
                </Card.Actions>
            </Card>

        </>
    )
}

export default Pagina2