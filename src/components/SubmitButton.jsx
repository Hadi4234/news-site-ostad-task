import React from 'react'
import { Button } from './ui/button'
import { Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

const SubmitButton = (props) => {
    if (props.submit === false) {
        return (
            <Button
                onClick={props.onClick}
                type="submit"
                className={props.className}
            >
                {props.text}
            </Button>
        )
    } else {
        return (
            <Button disabled>
                <Loader2
                    className={cn('mr-2 h-4 w-4 animate-spin', props.className)}
                />
                Please wait
            </Button>
        )
    }
}
export default SubmitButton
