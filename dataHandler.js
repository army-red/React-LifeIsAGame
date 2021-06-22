import React, { useState } from "react";
import localStorage from "localStorage";
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Image,
    Button,
    TouchableOpacity,
    Alert,
} from 'react-native';

export default function dataHandler() {
    let initialFile = localStorage.getItem("initialFile");
    let isLoaded = false;

    // let currentExp = 0;
    // 
    // maxexp = level ^ 2 + 5 level - 4
    // playerHp = (level + 2) ^ 3 - 2 * (level + 2) ^ 2 + 6 * (level + 2)
    // enemyHp = 
    // let maxExp = parseInt(Math.pow(level, 2) + 5 * level - 4) ;



    //====================================================
    // 预设
    //====================================================

    
    const [level, changeLevel] = useState(1);
    const [hp, changeHp] = useState(parseInt(Math.pow(level + 2, 3) - 2 * Math.pow(level + 2, 2) + 6 * (level + 2)));
    console.log(parseInt(Math.pow(level + 2, 3) - 2 * Math.pow(level + 2, 2) + 6 * (level + 2)));
    //parseInt(Math.pow((level + 2), 3) - 2 * Math.pow((level + 2, 2) + 6 * (level + 2)))
    const [currentExp, changeCurrExp] = useState(0);
    const [maxExp, changeMaxExp] = useState(parseInt(Math.pow(level, 2) + 5 * level - 4));
    const [atk, changeATK] = useState(hp + 2 * level);
    

    //====================================================
    // 角色属性
    //====================================================


    localStorage.setItem("hp",hp);
    localStorage.setItem("atk",atk);
    localStorage.setItem("level", level);
    localStorage.setItem("currentExp", currentExp);
    localStorage.setItem("maxExp", maxExp);

    //====================================================
    // 金币系统
    //====================================================
    localStorage.setItem("moneyIn", 0);
    localStorage.setItem("moneyOut", 0);
    localStorage.setItem("moneySurplus", 0);


    //====================================================
    // 任务系统
    //====================================================
    localStorage.setItem("commonAmount", 0);
    localStorage.setItem("importantAmount", 0);
    localStorage.setItem("solvedAmount", 0);




    //====================================================
    // 商店系统
    //====================================================
    var sixBoxUrl = [
        40,40,40, 40,40,40,
    ];
    localStorage.setItem("sixBoxUrl",sixBoxUrl);
















    localStorage.setItem("initialFile",true);
    isLoaded = true;
    return isLoaded;
}