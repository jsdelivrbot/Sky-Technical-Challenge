import React from 'react';

export const renderBasket = (basket, uniqueListID) =>{
    return( basket.map((channel) => <li key={ uniqueListID + channel.id }> { channel.name } </li> ));
};