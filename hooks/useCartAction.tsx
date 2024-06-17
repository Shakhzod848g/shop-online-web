import { updateCartItemCount } from '@/context/cart'
import { $currentProduct } from '@/context/goods'
import {
  addCartItemToLS,
  addItemToCart,
  addProductToCartBySizeTable,
} from '@/lib/utils/cart'
import { isItemInList, isUserAuth } from '@/lib/utils/common'
import { useUnit } from 'effector-react'
import { useMemo, useState } from 'react'
import { useCartByAuth } from './useCartByAuth'

export const useCartAction = (isSizeTable = false) => {
  // ? Hooks
  const product = useUnit($currentProduct)
  const [selectedSize, setSelectedSize] = useState('')
  const currentCartByAuth = useCartByAuth()
  const [addToCartSpinner, setAddToCartSpinner] = useState(false)
  const [updateCountSpinner, setUpdateCountSpinner] = useState(false)

  // ^ Functions & Methods
  const currentCartItems = currentCartByAuth.filter(
    (item) => item.productId === product._id
  )
  const cartItemBySize = currentCartItems.find(
    (item) => item.size === selectedSize
  )
  const existingItem = currentCartByAuth.find(
    (item) => item.productId === product._id && item.size === selectedSize
  )

  const [count, setCount] = useState(+(existingItem?.count as string) || 1)

  const handleAddToCart = (countFromCounter?: number) => {
    if (existingItem) {
      if (!isUserAuth()) {
        addCartItemToLS(product, selectedSize, countFromCounter || 1)
        return
      }

      const auth = JSON.parse(localStorage.getItem('auth') as string)
      const updatedCountWithSize = !!countFromCounter
        ? +existingItem.count !== countFromCounter
          ? countFromCounter
          : +existingItem.count + 1
        : +existingItem.count + 1

      updateCartItemCount({
        jwt: auth.accessToken,
        id: existingItem._id as string,
        setSpinner: setUpdateCountSpinner,
        count: selectedSize.length
          ? updatedCountWithSize
          : +existingItem.count + 1,
      })

      addCartItemToLS(product, selectedSize, countFromCounter || 1)
      return
    }

    if (isSizeTable) {
      addItemToCart(
        product,
        setAddToCartSpinner,
        countFromCounter || 1,
        selectedSize
      )
      return
    }

    addProductToCartBySizeTable(
      product,
      setAddToCartSpinner,
      countFromCounter || 1,
      selectedSize
    )
  }

  const allCurrentCartItemCount = useMemo(
    () => currentCartItems.reduce((a, { count }) => a + +count, 0),
    [currentCartItems]
  )

  return {
    product,
    selectedSize,
    setSelectedSize,
    addToCartSpinner,
    currentCartItems,
    cartItemBySize,
    handleAddToCart,
    existingItem,
    currentCartByAuth,
    setAddToCartSpinner,
    updateCountSpinner,
    count,
    setCount,
    allCurrentCartItemCount,
  }
}
