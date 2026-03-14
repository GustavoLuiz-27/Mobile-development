
import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function LoginScreen({ navigation }){

const [email,setEmail] = useState("");
const [senha,setSenha] = useState("");
const [erro,setErro] = useState("");

function login(){

if(!email || !senha){
setErro("Preencha todos os campos");
return;
}

navigation.navigate("Produtos");

}

return(

<View style={styles.container}>

<Text style={styles.title}>Login</Text>

<TextInput
placeholder="Email"
style={styles.input}
onChangeText={setEmail}
/>

<TextInput
placeholder="Senha"
secureTextEntry
style={styles.input}
onChangeText={setSenha}
/>

{erro ? <Text style={styles.error}>{erro}</Text> : null}

<Button title="Entrar" onPress={login}/>

</View>

);

}

const styles = StyleSheet.create({
container:{flex:1,justifyContent:"center",padding:20},
title:{fontSize:28,textAlign:"center",marginBottom:20},
input:{borderWidth:1,padding:10,marginBottom:10},
error:{color:"red"}
});
