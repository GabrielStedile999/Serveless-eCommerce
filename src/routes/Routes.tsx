import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Index from '../pages/Index'
import Products from '../pages/Products'
import ProductDetail from '../pages/ProductDetail'
import PageNotFound from '../pages/PageNotFound'

import BuyRoutes from './BuyRoutes'
import OrderRoutes from './OrderRoutes'
import AdminRoutes from './AdminRoutes'

interface Props {

}

const Application: React.FC<Props> = () => {
    return (
        <Routes>
            <Route path='/buy' element={ <BuyRoutes />}/>
            <Route path='/orders' element={ <OrderRoutes />}/>
            <Route path='/admin' element={ <AdminRoutes />}/>
            <Route path='/products/:productId' element={ <ProductDetail />}/>
            <Route path='/products' element={ <Products />}/>
            <Route path='/' element={ <Index />}/>
            <Route path='*' element={ <PageNotFound />}/>
        </Routes>
    )
}

export default Application;