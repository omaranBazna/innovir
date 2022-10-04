/* eslint-disable jsx-a11y/alt-text */
import './Product.css';
import React from 'react'
import ProductLogo from '../graphics/product.svg'

import "../i18n/index";

export default function ProductOne(){
    return (
        <div className="product">
            <img src={ProductLogo} className='product-logo' />
            <a href = "https://www.amazon.com.br/Logitech-LIGHTSYNC-Efeito-Botões-Programáveis/dp/B087CT8PWY/ref=asc_df_B087CT8PWY/?tag=googleshopp00-20&linkCode=df0&hvadid=379708004298&hvpos=&hvnetw=g&hvrand=2036746117872062960&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1031749&hvtargid=pla-986255958677&psc=1 "><h1>Mouse Gamer Logitech</h1></a>
           
        </div>
    )
}

export function ProductTwo(){
    return (
        <div className="product">
            <img src={ProductLogo} className='product-logo' />
            <a href = " https://www.amazon.com.br/Mouse-Iluminado-Grande-Mousepad-superficie/dp/B0977Q5F2X/ref=asc_df_B0977Q5F2X/?tag=googleshopp00-20&linkCode=df0&hvadid=379725868941&hvpos=&hvnetw=g&hvrand=17414474336818578523&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1031749&hvtargid=pla-1340537256656&psc=1"><h1>Mouse Pad Gamer Iluminado</h1></a>
           
        </div>
    )
}

export function ProductThree(){
    return (
        <div className="product">
            <img src={ProductLogo} className='product-logo' />
            <a href = "https://www.amazon.com.br/Teclado-Gamer-Membrana-Redragon-K509RGB/dp/B098R6D9B8/ref=pd_bxgy_sccl_2/147-2506371-1318549?pd_rd_w=vHgi0&content-id=amzn1.sym.57f5b0c5-8f2e-45a4-8595-2eb0fcbe85cd&pf_rd_p=57f5b0c5-8f2e-45a4-8595-2eb0fcbe85cd&pf_rd_r=16K2P0ZKCZZKWW3GZBGH&pd_rd_wg=FjPPd&pd_rd_r=27855d16-dc2f-4b2f-b5f1-27a677fd599c&pd_rd_i=B098R6D9B8&psc=1"><h1>Teclado Gamer</h1></a>
          
        </div>
    )
}

export function ProductFour(){
    return (
        <div className="product">
            <img src={ProductLogo} className='product-logo' />
            <a href = "https://www.amazon.com.br/dp/B08KKW2ZS2?pd_rd_w=go4VX&pf_rd_p=a2e83329-3f03-4743-80d5-6571895c9928&pd_rd_wg=P33jy&pf_rd_r=BV8MV2S38BGDW097DEPG&pd_rd_r=1a0564df-e83b-4c7b-a6d0-5ba26e6c61b2&store_ref=storeRecs_dp_2&ref_=ast_dpems "><h1>Headset Gamer</h1></a>
           
        </div>
    )
}