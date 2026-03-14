
import React, { useEffect, useState } from "react";
import { View, Text, Image, ActivityIndicator } from "react-native";
import api from "../services/api";

export default function ProductDetailsScreen({ route }){

const { id } = route.params;

const [produto,setProduto] = useState(null);

useEffect(()=>{

api.get(`/products/${id}`)
.then(response=>{
setProduto(response.data);
});

},[]);

if(!produto){
return <ActivityIndicator size="large" style={{marginTop:50}}/>
}

return(

<View style={{padding:20}}>

<Image
source={{uri:produto.thumbnail}}
style={{width:200,height:200,marginBottom:20}}
/>

<Text style={{fontSize:22}}>{produto.title}</Text>

<Text style={{marginVertical:10}}>{produto.description}</Text>

<Text>Preço: R$ {produto.price}</Text>

<Text>Desconto: {produto.discountPercentage}%</Text>

</View>

);

}
