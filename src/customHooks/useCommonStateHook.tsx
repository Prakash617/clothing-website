import React from 'react'
import { useState } from "react";

const useCommonStateHook = () => {
  const [expandProduct, setExpandProduct] = useState(false)
  return {
    expandProduct, setExpandProduct
  }
}

export default useCommonStateHook