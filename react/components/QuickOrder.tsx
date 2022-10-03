import React, { useState, useEffect } from 'react'
import { useMutation, useLazyQuery } from 'react-apollo'
import UPDATE_CART from '../graphql/updateCart.graphql'
import GET_PRODUCT from '../graphql/getProductBySku.graphql'
import styles from "./styles.css"

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

  return <div className={styles["quick__container"]}>
    <h2 className={styles["quick__name"]}>Compra rápida de VTEX U</h2>
    <form onSubmit={searchProduct} className={styles["quick__form"]}>
      <div className={styles["quick__form"]}>
        <label htmlFor="sku" className={styles["quick__label"]}>Ingresa el número de SKU</label>
        <input id="sku" type="text" onChange={handleChange} className={styles["quick__inputext"]}></input>
      </div>
      <input type="submit" value="AÑADIR AL CARRITO" className={styles["quick__input"]} />
    </form>
  </div>
}

export default QuickOrder
