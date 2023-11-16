import React from 'react'


export default function Category({category}) {
  return (
    <div>
      {category.id}{"+"}{category.name}
    </div>
  )
}
