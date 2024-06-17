import { StaticImageData } from 'next/image'

import axum from './photos/axum.jpeg'
import fasil from './photos/fasil.jpeg'
import lali from './photos/lali.jpeg'

export interface AllImageType {
    id: number
    name: string
    src: StaticImageData
    location: string
}

export  const AllImages: AllImageType[] = [
    {
        id: 1,
        name: 'Axum',
        src: axum,
        location: 'Nepal'
    },
    {
        id: 2,
        name: 'Fasil',
        src: fasil,
        location: 'Nepal'
    },
    {
        id: 4,
        name: 'Lali',
        src: lali,
        location: 'Nepal'
    },
]