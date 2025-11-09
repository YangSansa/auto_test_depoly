/* eslint-disable no-unreachable */
import * as React from 'react' //通过索引获取 buttonTypes 数组元素的联合类型

import { useBoolean } from '../hooks/useBoolean'

const buttonTypes = ['primary', 'secondary', 'danger'] as const //创建了一个只读的字面量类型数组

type ButtonType = (typeof buttonTypes)[number]

interface IButtonProps {
    type?: ButtonType // ? 表示该属性是可选的
    children: React.ReactNode
}

/* export const Button: React.FC<IButtonProps> = ({ type = 'primary', children }) => {
    const [isDisabled, toggle] = useBoolean(false)
    return 
        (
            <button disabled={isDisabled} onClick={toggle}>
                {children}
                {type}
            </button>
        )
} */
export const Button: React.FC<IButtonProps> = ({ type = 'primary', children }) => {
    const [isDisabled, toggle] = useBoolean(false)
    return (
        <button disabled={isDisabled} onClick={toggle}>
            {children}
            {type}
        </button>
    )
}
