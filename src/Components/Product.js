import './Product.css'; 
import React from 'react'
import ProductLogo from '../graphics/product.svg'
import { useTranslation }  from 'react-i18next'

import "../i18n/index";

export default function Product(){
    
    const {t, i18n} = useTranslation();

    return (
        <div className="product">
            <img src={ProductLogo} className='product-logo' />
            <h1>{t("title")}</h1>
            <h2>{t("description")}</h2>
        </div>
    )
}