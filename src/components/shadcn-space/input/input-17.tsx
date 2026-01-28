import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const InputWithLabelDemo = () => {
    return (
        <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">Label</Label>
            <Input type="email" id="email" placeholder="example@shadcnspace.com" />
        </div>
    )
}

export default InputWithLabelDemo
