import React from 'react'

interface UserProp {
    name: string,
    age?: number
}

export default function Basic1({name, age}: UserProp) {
  return (
    <div>
      <h1>Hello {name}{!age ? "": `, Your age is ${age}`}</h1>
    </div>
  )
}
