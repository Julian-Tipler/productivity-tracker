import React from 'react'
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

type Category = {
    title: String,
}


function SwipeableCard({category}:{category:Category}) {
  return (
    <Card>
        <Card.Title title={category.title}/>
        <Card.Content>
        </Card.Content>
    </Card>
  )
}

export default SwipeableCard