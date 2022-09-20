import React, { useState, useEffect } from 'react'
import { useMutation, useLazyQuery } from 'react-apollo'
import UPDATE_CART from '../graphql/updateCart.graphql'
import GET_PRODUCT from '../graphql/getProductBySku.graphql'

const QuickOrder = () => {
  const [inputText, setInputText] = useState('');
  const [search, setSearch] = useState('')

  const [getProductData, { data: product }] = useLazyQuery(GET_PRODUCT)
  const [addToCart] = useMutation(UPDATE_CART)

  const handleChange = (evt: any) => {
    setInputText(evt.target.value)
    console.log("estamos buscando", inputText)
  }

  const addProductToCart = () => {
    getProductData({
      variables: {
        sku: inputText
      }
    })
  }

  const searchProduct = (evt: any) => {
    evt.preventDefault();
    if (!inputText) {
      alert("Oiga, ingrese algo")
    } else {
      setSearch(inputText)
      addProductToCart()
    }
  }

  useEffect(() => {
    console.log(`El resultado de mi producto es${product}`, search)

    if (!product) {
      console.log('ingrese algo')
    } else {
      const skuId = parseInt(inputText)
      console.log("Mis datos necesarios", skuId, product)

      addToCart({
        variables: {
          salesChannel: "1",
          items: [
            {
              id: skuId,
              quantity: 1,
              seller: "1"
            }
          ]
        }
      })
        .then(() => {
          window.location.href = "/checkout"
        })
    }
  }, [product, search])

  return <div>
    <h2>Compra rápida de VTEX U</h2>
    <form onSubmit={searchProduct}>
      <div>
        <label htmlFor="sku">Ingresa el número de SKU</label>
        <input id="sku" type="text" onChange={handleChange}></input>
      </div>
      <input type="submit" value="AÑADIR AL CARRITO" />
    </form>
  </div>
}

export default QuickOrder
