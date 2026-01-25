import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

const ProductCard = () => {
    return (
        <Card className="overflow-hidden h-full bg-blue-500 max-w-sm w-full">
            <CardHeader>
                <CardTitle className="text-lg font-medium text-white">Best Selling Products</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex justify-center mt-3">
                    <img src={'https://images.shadcnspace.com/assets/backgrounds/best-selling-bg.png'} width={251} height={162} alt="best-selling-bg" className="w-full" />
                </div>
                <div className="bg-card p-5 flex flex-col gap-5 rounded-xl">
                    <div>
                        <div className="flex justify-between items-baseline mb-3">
                            <div>
                                <h6 className="text-base font-medium">MaterialPro Dashboard</h6>
                                <p className="text-sm text-muted-foreground">$23,568</p>
                            </div>
                            <Badge className="text-sm bg-blue-500/10 text-blue-500 h-auto">
                                55%
                            </Badge>
                        </div>
                        <Progress value={55} className={cn("w-full", "**:data-[slot=progress-indicator]:bg-blue-500", "**:data-[slot=progress-track]:bg-blue-500/10")} />
                    </div>
                    <div>
                        <div className="flex justify-between items-baseline mb-3">
                            <div>
                                <h6 className="text-base font-medium">Flexy Admin Template</h6>
                                <p className="text-sm text-muted-foreground">$24,468</p>
                            </div>
                            <div>
                                <Badge className="text-sm bg-sky-400/10 text-sky-400 h-auto">
                                    65%
                                </Badge>
                            </div>
                        </div>
                        <Progress value={65} className={cn("w-full", "**:data-[slot=progress-indicator]:bg-sky-400", "**:data-[slot=progress-track]:bg-sky-400/10")} />
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default ProductCard