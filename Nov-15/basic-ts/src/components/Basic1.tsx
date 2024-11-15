import React from 'react'

interface UserProp {
    name: string,
    age?: number
}

export const Basic1: React.FC<UserProp> = ({name, age}) => {
  return (
    <div>
      <h1>Hello {name}{!age ? "": `, Your age is ${age}`}</h1>
    </div>
  )
}
