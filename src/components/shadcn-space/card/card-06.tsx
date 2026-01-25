"use client"
import { Icon } from '@iconify/react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const StatisticsCard = () => {
    const EcommerceActions = [
        {
            title: 'Orders',
            subtitle: '5868',
            cardIcon: 'solar:bag-4-line-duotone',
            badgeColor: 'bg-teal-400/10',
            statusValue: '+18%',
            statusIcon: 'solar:course-up-line-duotone',
        },
        {
            title: 'Sales',
            subtitle: '$96,850',
            cardIcon: 'solar:box-line-duotone',
            badgeColor: 'bg-orange-400/10',
            statusValue: '-5%',
            statusIcon: 'solar:course-down-line-duotone',
        },
        {
            title: 'Profit',
            subtitle: '$82,906',
            cardIcon: 'solar:chart-square-line-duotone',
            badgeColor: 'bg-teal-400/10',
            statusValue: '+18%',
            statusIcon: 'solar:course-up-line-duotone',
        },
        {
            title: 'Expense',
            subtitle: '$14,653',
            cardIcon: 'solar:star-line-duotone',
            badgeColor: 'bg-teal-400/10',
            statusValue: '+18%',
            statusIcon: 'solar:course-up-line-duotone',
        },
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 w-full">
            <Card className="p-0">
                <CardContent className="flex items-center w-full lg:flex-nowrap flex-wrap px-0">
                    {EcommerceActions.map((item, index) => {
                        return (
                            <div
                                className="lg:w-3/12 md:w-6/12 w-full border-e border-border last:border-e-0"
                                key={index}
                            >
                                <div className="p-6">
                                    <div className="flex flex-col gap-1">
                                        <div className="flex justify-between items-start">
                                            <h5 className="text-base font-medium">{item.title}</h5>
                                            <div className={`p-3 rounded-full outline outline-border text-primary`}>
                                                <Icon icon={item.cardIcon} width={16} height={16} />
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <h5 className="text-2xl font-semibold">{item.subtitle}</h5>
                                            <div className="flex items-center gap-2">
                                                <p className="text-xs text-muted-foreground">Last 7 days</p>
                                                <Badge className={`${item.badgeColor} text-muted-foreground`}>
                                                    <div className="flex items-center gap-1">
                                                        {item.statusValue}
                                                        <Icon icon={item.statusIcon} width={14} height={14} />
                                                    </div>
                                                </Badge>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </CardContent>
            </Card>
        </div>
    );
}
export default StatisticsCard;
