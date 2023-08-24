import React from 'react'
import { Avatar, Card } from 'react-native-paper'

export const Pagina3 = () => {

    const LeftContent = props => <Avatar.Icon {...props} icon="camera" />
    const segundo = props => <Avatar.Icon {...props} icon="ab-testing" />
    const terceiro = props => <Avatar.Icon {...props} icon="abjad-arabic" />
    return (
        <>
            <Card style={{ marginBotton: 30 }}>
                <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />

            </Card>
            <Card>
                <Card.Title title="Card Title" subtitle="Card Subtitle" left={segundo} />

            </Card>
            <Card>
                <Card.Title title="Card Title" subtitle="Card Subtitle" left={terceiro} />

            </Card>
        </>
    )
}
