import React from 'react'
import { Routes, Route } from 'react-router-dom'

import MyCart from '../pages/MyCart'
import SelectAddress from '../pages/SelectAddress'
import Checkout from '../pages/Checkout'
import PageNotFound from '../pages/PageNotFound'


interface Props {

}

const BuyRoutes: React.FC<Props> = () => {
    return (
        <Routes>
            <Route path='/buy/my-cart' element={ <MyCart />}/>
            <Route path='/buy/select-address' element={ <SelectAddress />}/>
            <Route path='/buy/checkout' element={ <Checkout />}/>
            <Route path='*' element={ <PageNotFound />}/>
        </Routes>
    )
}

export default BuyRoutes