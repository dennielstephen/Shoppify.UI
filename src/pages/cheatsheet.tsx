import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'

export default function CheatSheet() {
    return (
        <Stack spacing={2} direction='row' sx={{ mt: 2 }}>
            <Button variant='text' className='text-xl font-bold text-red-700'>
                Text
            </Button>
            <Button variant='contained' className='bg-black opacity-50'>
                Contained
            </Button>
            <Button variant='outlined' className=' bg-blue-900 text-white'>
                Outlined
            </Button>
        </Stack>
    )
}
