
import {createDrawerNavigator , DrawerNavigatorItems} from 'react-navigation-drawer';
import {createBottomTabNavigator} from "react-navigation-tabs";
import HomeScreen from "../components/dashboard/home/HomeScreen";
import SearchScreen from "../components/dashboard/search/SearchScreen";
import ProfileScreen from "../components/dashboard/profile/ProfileScreen";

export  const drawerNavigator=createDrawerNavigator({

    HomeScreen:HomeScreen,
    SearchScreen:SearchScreen,
    ProfileScreen:ProfileScreen

})


