import React, { useState } from 'react'


export default function Category({category}) {

    const [id, setId] = useState(category.id);
    const [name, setName] = useState(category.name);

  return (
    <div>
      {id}{"+"}{name}
    </div>
  )
}
