import { Component } from "react";
import { View, Text } from "react-native";

import { Post } from "../../general/Post";

export class Home extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <View>
                <Text>Home</Text>
                <Post content="Hello World" />
            </View>
        )
    }
}