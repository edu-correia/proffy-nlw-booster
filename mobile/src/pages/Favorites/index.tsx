import React from 'react';
import { View } from 'react-native';

import PageHeader from '../../Components/PageHeader';

import styles from './styles';

function Favorites(){
    return (
        <View style={styles.container}>
            <PageHeader 
                title="Meus proffys favoritos"
            />

        </View> 
    )
}

export default Favorites;