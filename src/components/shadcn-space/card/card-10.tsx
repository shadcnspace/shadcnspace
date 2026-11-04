import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

const AppointmentCard = () => {
    return (
        <div className="max-w-sm mx-auto px-4 w-full">
            <Card>
                <CardHeader>
                    <CardTitle>Book Appointment</CardTitle>
                    <CardDescription>Dr. Michael Tan · Dermatology</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                    <div className="space-y-3">
                        <Label className="text-muted-foreground">Available on March 18, 2026</Label>
                        <ToggleGroup defaultValue={["9:00"]} spacing={2} className="flex-wrap">
                            <ToggleGroupItem value="9:00" className="cursor-pointer">9:00 AM</ToggleGroupItem>
                            <ToggleGroupItem value="10:30" className="cursor-pointer">10:30 AM</ToggleGroupItem>
                            <ToggleGroupItem value="11:00" className="cursor-pointer">11:00 AM</ToggleGroupItem>
                            <ToggleGroupItem value="1:30" className="cursor-pointer">1:30 PM</ToggleGroupItem>
                        </ToggleGroup>
                    </div>

                    <Alert>
                        <AlertTitle>New patient?</AlertTitle>
                        <AlertDescription>
                            Please arrive 15 minutes early.
                        </AlertDescription>
                    </Alert>
                </CardContent>
                <CardFooter>
                    <Button className="w-full cursor-pointer hover:bg-primary/80">Book Appointment</Button>
                </CardFooter>
            </Card>
        </div>
    )
}

export default AppointmentCard