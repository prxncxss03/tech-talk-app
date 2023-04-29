import { Component } from "react";
import { View, Text ,ScrollView} from "react-native";

import { Post } from "./../../general/Post";
import {styles} from './../../Style'
import { FloatingBtn } from "./../../general/FloatingBtn";
import { AddPost } from "./AddPost";

import { PostApi } from "../../../helper/api/post";
import { UserApi } from "../../../helper/api/user";
import { Button } from "@react-native-material/core";

export class Home extends Component{
    constructor(){
        super();

        this.state= {
            modalVisible: false,
            posts: []
        }
    }

    async componentDidMount(){
        this.handleGetAllPosts()
        
    }

    


    handleGetAllPosts = async () =>{
        const postApi = new PostApi;
        const [response, error]= await postApi.posts()
        console.log(response)
        if (error){
            console.log(error)
        }
        this.setState({posts: response})


    }
    
    handleLogout = async () =>{
        const {navigation} = this.props
        const userApi = new UserApi;
        const [response, error] = await userApi.logout()
        if (response){
            console.log(response)
            navigation.navigate('Login')   
        }
        if (error){
            console.log(error)
        }
        
             
    }

    render(){
        return(
            <View style={styles.container}>
                
                <ScrollView>

           
                {
                    this.state.posts.map((post)=>{
                        //format created_at
                        const date = new Date(post.created_at)
                        post.created_at = date.toDateString()

                        return(
                            <Post key= {post.id} content={post.post}
                            author={post.user.firstname}
                            date={post.created_at} />
                        )
                    })
                }
                </ScrollView>
                
                <FloatingBtn onPress={()=>this.setState({modalVisible : true})}/>
                <AddPost modalVisible={this.state.modalVisible} 
                setModalVisible={()=>this.setState({modalVisible : false})}
                updatePost={()=> {
                    console.log('update post')
                }} />
                <Button color="error" title="Logout" onPress={this.handleLogout} />
      
            </View>
        )
    }
}