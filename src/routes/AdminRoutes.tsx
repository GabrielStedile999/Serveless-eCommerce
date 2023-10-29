import React from 'react'
import { Routes, Route } from 'react-router-dom'

import ManageProducts from '../pages/ManageProducts'
import ManageOrders from '../pages/ManageOrders'
import ManageOrderDetail from '../pages/ManageOrderDetail'
import ManageUsers from '../pages/ManageUsers'
import PageNotFound from '../pages/PageNotFound'


interface Props {

}

const AdminRoutes: React.FC<Props> = () => {
    return (
        <Routes>
            <Route path='/admin/manage-products' element={ <ManageProducts />}/>
            <Route path='/admin/manage-orders/:id' element={ <ManageOrderDetail />}/>
            <Route path='/admin/manage-orders' element={ <ManageOrders />}/>
            <Route path='/admin/manage-users' element={ <ManageUsers />}/>
            <Route path='*' element={ <PageNotFound />}/>
        </Routes>
    )
}

export default AdminRoutes