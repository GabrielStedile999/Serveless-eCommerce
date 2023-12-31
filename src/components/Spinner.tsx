import React from 'react'
import {Oval} from 'react-loader-spinner'

interface Props {
    color?: string
    height?: number
    width?: number
}

const Spinner: React.FC<Props> = ({color = 'white', height = 20, width = 20}) => {
        return <Oval color={color} height={height} width={width} />
}

export default Spinner