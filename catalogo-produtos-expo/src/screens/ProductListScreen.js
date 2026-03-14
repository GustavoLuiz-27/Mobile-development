
import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator } from "react-native";
import api from "../services/api";

export default function ProductListScreen({ navigation }){

const [produtos,setProdutos] = useState([]);
const [loading,setLoading] = useState(true);

useEffect(()=>{

api.get("/products/category/mens-shirts")
.then(response=>{
setProdutos(response.data.products);
})
.catch(()=>{
console.log("erro ao buscar produtos");
})
.finally(()=>{
setLoading(false);
});

},[]);

if(loading){
return <ActivityIndicator size="large" style={{marginTop:50}}/>
}

return(

<View style={{padding:20}}>

<FlatList
data={produtos}
keyExtractor={(item)=>item.id.toString()}
renderItem={({item})=>(

<TouchableOpacity
style={{marginBottom:15}}
onPress={()=>navigation.navigate("Detalhes",{id:item.id})}
>

<Text style={{fontSize:18}}>{item.title}</Text>
<Text>R$ {item.price}</Text>

</TouchableOpacity>

)}
/>

<TouchableOpacity onPress={()=>navigation.navigate("Login")}>
<Text style={{marginTop:20,color:"blue"}}>Logout</Text>
</TouchableOpacity>

</View>

);

}
