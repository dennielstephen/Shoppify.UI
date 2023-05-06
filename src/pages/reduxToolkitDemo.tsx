import * as React from 'react'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { decrement, increment } from '../redux/counterSlice'

export default function ReduxToolkitDemo() {
    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <Stack spacing={2} direction='row' sx={{ mt: 2 }}>
            <Button variant='contained' onClick={() => dispatch(increment())}>
                Click me!
            </Button>
            <span>{count}</span>
            <Button variant='contained' onClick={() => dispatch(decrement())}>
                Decrement
            </Button>
        </Stack>
    )
}
