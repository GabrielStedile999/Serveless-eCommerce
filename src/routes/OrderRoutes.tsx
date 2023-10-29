import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Orders from '../pages/Orders'
import OrderDetail from '../pages/OrderDetail'
import PageNotFound from '../pages/PageNotFound'


interface Props {

}

const OrderRoutes: React.FC<Props> = () => {
    return (
        <Routes>
            <Route path='/orders/:id' element={ <OrderDetail />}/>
            <Route path='/orders/my-orders' element={ <Orders />}/>
            <Route path='*' element={ <PageNotFound />}/>
        </Routes>
    )
}

export default OrderRoutes