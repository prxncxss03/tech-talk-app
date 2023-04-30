import { Component } from "react";
import { View, Text,Modal } from "react-native";
import {
    Stack,
    Button,
    TextInput,
  } from "@react-native-material/core";
import { PostApi } from "../../../helper/api/post";


export class AddPost extends Component{
   

    constructor(props){
        super(props);
        this.state={
            content: '',
        }
    }

    handleCloseButton = () => {
        this.props.setModalVisible(false)
    }

    handleAddPost = async () => {
       console.log('I am inside add post')
       const api = new PostApi();
       console.log('content : ', this.state.content)
       const [reponse, error] = await api.createPost({post: this.state.content})
        if (reponse){
            this.props.isNewPost(true)
            this.setState({content: ''})
            this.props.setModalVisible(false)
            
        }
        else{
            console.log(error)
        }
    }


    render(){
        return(
            <View>
            <Modal
            animationType="fade"
            transparent={false}
            visible={this.props.modalVisible}
            onRequestClose={
                this.handleCloseButton
            }
            >
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <View style={{backgroundColor:'white',width:'80%',height:'50%',borderRadius:10}}>
                        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                            <Text style={{fontSize:20,fontWeight:'bold'}}>Add Post</Text>
                        </View>
                        <View style={{flex:3}}>
                            <Stack spacing={2}>
                                <TextInput label="Content" variant="standard" value={this.state.content} 
                                    onChangeText={(text)=> {
                                        this.setState({content: text})
                                      
                                    }}
                                />
                            </Stack>
                        </View>
                        <View style={{flex:1,flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
                            <Button
                                title="Cancel"
                                compact
                                variant="text"
                                onPress={this.handleCloseButton}
                            />
                            <Button
                                title="Ok"
                                compact
                                variant="text"
                                onPress={()=>{
                                    console.log(this.props)
                                    this.handleAddPost()
                                }}
                            />
                        </View>
                    </View>
                </View>
            </Modal>
          </View>
        )
    }

}