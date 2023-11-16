import { Box } from '@mui/joy'
import React from 'react'


export default function Category({category}) {
  return (
    <Box>
      {category.id}{"+"}{category.name}
    </Box>
  )
}
