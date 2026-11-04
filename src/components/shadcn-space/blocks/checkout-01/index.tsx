"use client";

import { ArrowLeft, ArrowRight, Lock, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Checkout01 = () => {
    return (
        <section className="bg-muted dark:bg-muted/30 py-12 md:py-20 lg:py-24">
            <div className="max-w-7xl xl:px-16 lg:px-8 px-4 mx-auto">
                <div className="w-full max-w-117 mx-auto">
                    <Card className="rounded-2xl overflow-hidden shadow-none border-none ring-0 px-4 py-6 sm:px-8 sm:py-10">
                        <CardContent className="p-0 flex flex-col gap-8">
                            {/* Header */}
                            <div className="flex items-center gap-4">
                                <Button variant={"ghost"} className="size-8 flex items-center justify-center hover:bg-muted rounded-full transition-colors cursor-pointer border-none bg-transparent">
                                    <ArrowLeft className="size-4 shrink-0 text-foreground" />
                                </Button>
                                <div>
                                    <img alt="shadcn logo" src="https://images.shadcnspace.com/assets/logo/shadcn-logo.png" width={32} height={32} className="dark:hidden block" />
                                    <img alt="shadcn dark logo" src="https://images.shadcnspace.com/assets/logo/shadcn-white-logo.png" width={32} height={32} className="dark:block hidden" />
                                </div>
                            </div>

                            {/* Product Info */}
                            <div className="flex items-start justify-between gap-4">
                                <p className="text-sm text-muted-foreground font-normal">
                                    Pro Subscription
                                </p>
                                <div className="text-right space-y-2">
                                    <p className="text-3xl font-medium text-foreground tracking-tight">
                                        $199.00
                                    </p>
                                    <p className="text-sm text-muted-foreground font-normal">
                                        Incl. VAT, billed lifetime
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col gap-6">
                                {/* Payment Tabs */}
                                <Tabs defaultValue="card" className="w-full flex flex-col gap-8">
                                    <TabsList className="grid w-full grid-cols-2 h-11! bg-muted rounded-xl p-1">
                                        <TabsTrigger
                                            value="card"
                                            className="rounded-lg data-active:bg-background! data-active:shadow-sm text-sm font-medium transition-all cursor-pointer"
                                        >
                                            Pay by Card
                                        </TabsTrigger>
                                        <TabsTrigger
                                            value="paypal"
                                            className="rounded-lg data-active:bg-background! data-active:shadow-sm text-sm font-medium transition-all cursor-pointer"
                                        >
                                            Pay with PayPal
                                        </TabsTrigger>
                                    </TabsList>
                                    <TabsContent value="card" className="flex flex-col gap-6">
                                        {/* Form Fields */}
                                        <div className="space-y-4">
                                            <div className="space-y-1.5">
                                                <Label htmlFor="email" className="text-sm font-normal text-muted-foreground">Email address</Label>
                                                <Input id="email" placeholder="example@shadcnspace.com" className="h-9 rounded-lg border-border bg-background dark:bg-background shadow-xs" />
                                            </div>

                                            <div className="space-y-1.5">
                                                <Label htmlFor="card-number" className="text-sm font-normal text-muted-foreground">Card number</Label>
                                                <Input id="card-number" placeholder="1234 1234 1234 1234" className="h-9 rounded-lg border-border bg-background dark:bg-background shadow-xs" />
                                            </div>

                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="space-y-1.5">
                                                    <Label htmlFor="expiry" className="text-sm font-normal text-muted-foreground">Expiry date</Label>
                                                    <Input id="expiry" placeholder="MM/YY" className="h-9 rounded-lg border-border bg-background dark:bg-background shadow-xs" />
                                                </div>
                                                <div className="space-y-1.5">
                                                    <Label htmlFor="cvc" className="text-sm font-normal text-muted-foreground">CVC</Label>
                                                    <Input id="cvc" placeholder="123" className="h-9 rounded-lg border-border bg-background dark:bg-background shadow-xs" />
                                                </div>
                                            </div>

                                            <div className="space-y-1.5">
                                                <Label htmlFor="card-name" className="text-sm font-normal text-muted-foreground">Name on card</Label>
                                                <Input id="card-name" placeholder="Jane Cooper" className="h-9 rounded-lg border-border bg-background dark:bg-background shadow-xs" />
                                            </div>

                                            <div className="space-y-1.5">
                                                <Label htmlFor="country" className="text-sm font-normal text-muted-foreground">Billing country</Label>
                                                <Select defaultValue="United States">
                                                    <SelectTrigger id="country" className="w-full h-9! rounded-lg border-border bg-background dark:bg-background shadow-xs cursor-pointer">
                                                        <SelectValue />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="United States">United States</SelectItem>
                                                        <SelectItem value="United Kingdom">United Kingdom</SelectItem>
                                                        <SelectItem value="Canada">Canada</SelectItem>
                                                        <SelectItem value="Australia">Australia</SelectItem>
                                                        <SelectItem value="Germany">Germany</SelectItem>
                                                        <SelectItem value="France">France</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                        </div>
                                    </TabsContent>
                                    <TabsContent value="paypal">
                                        <div className="py-12 flex flex-col items-center justify-center border-2 border-dashed rounded-xl border-muted-foreground/20 text-muted-foreground space-y-2">
                                            <p className="font-medium">PayPal Integration</p>
                                            <p className="text-xs">You will be redirected to PayPal to complete your purchase.</p>
                                        </div>
                                    </TabsContent>
                                </Tabs>

                                {/* Footer Section */}
                                <div className="flex flex-col gap-6">
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        By completing this purchase you agree to our terms of service. Your payment information is encrypted and secure.
                                    </p>

                                    <button className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer group border-none bg-transparent p-0">
                                        <Tag className="size-4 group-hover:rotate-12 transition-transform" />
                                        <span>I have a coupon code</span>
                                    </button>

                                    <Button className="group w-full px-5 h-10 bg-primary text-primary-foreground hover:bg-primary/80 rounded-lg text-sm font-medium gap-2 transition-all cursor-pointer">
                                        Pay $199.00
                                        <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform duration-300" />
                                    </Button>
                                </div>
                            </div>

                            {/* Bottom Links */}
                            <div className="flex items-center justify-center gap-3">
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <Lock className="size-3.5" />
                                    <span>Secure checkout</span>
                                </div>
                                <span className="size-1 rounded-full bg-muted-foreground/30" />
                                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms</a>
                                <span className="size-1 rounded-full bg-muted-foreground/30" />
                                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy</a>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default Checkout01;
