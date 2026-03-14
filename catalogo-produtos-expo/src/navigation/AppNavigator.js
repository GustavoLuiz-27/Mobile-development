
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../screens/LoginScreen";
import ProductListScreen from "../screens/ProductListScreen";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator(){

return(

<NavigationContainer>
<Stack.Navigator>

<Stack.Screen name="Login" component={LoginScreen} />
<Stack.Screen name="Produtos" component={ProductListScreen} />
<Stack.Screen name="Detalhes" component={ProductDetailsScreen} />

</Stack.Navigator>
</NavigationContainer>

);

}
