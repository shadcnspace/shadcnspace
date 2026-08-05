import { BringToFront, CalendarHeart, ChartColumnBig, CircleArrowDown, Flag, Form, GalleryVerticalEnd, Grid2x2Plus, LayersPlus, PanelRightClose, Pentagon, Presentation, RectangleCircle, Shapes, Zap, Phone, MessageSquare, Notebook, Calendar, Mail, Ticket, SquareKanban, Sparkles, User, ReceiptText, Newspaper, Square, Type, List, CheckSquare, CircleDot, LayoutPanelLeft, ChartColumn, ChartBar, Table, TableProperties, BookOpen, Settings, CircleDollarSign, Accessibility, Home, Key, Blocks, Smartphone, MousePointer2, Layout, CheckCircle2 } from "lucide-react";

const NavData: any[] = [
    {
        type: "dropdown",
        label: "Dashboards",
        icon: LayersPlus,
        items: [
            { label: "Ecommerce", icon: Grid2x2Plus, href: "#" },
            { label: "Analytics", icon: ChartColumnBig, href: "#" },
            { label: "Projects", icon: BringToFront, href: "#" },
            { label: "Frontend Pages", icon: Form, href: "#" },
            { label: "Landing Pages", icon: Presentation, href: "#" },
        ],
    },
    {
        type: "dropdown",
        label: "Apps",
        icon: LayoutPanelLeft,
        items: [
            { label: "Contacts", icon: Phone, href: "#" },
            { label: "Chats", icon: MessageSquare, href: "#" },
            { label: "Notes", icon: Notebook, href: "#" },
            { label: "Calendar", icon: Calendar, href: "#" },
            { label: "Email", icon: Mail, href: "#" },
            { label: "Tickets", icon: Ticket, href: "#" },
            { label: "Kanban", icon: SquareKanban, href: "#" },
            { label: "AI", icon: Sparkles, href: "#" },
            { label: "User Profile", icon: User, href: "#" },
            { label: "Ecommerce", icon: Grid2x2Plus, href: "#" },
            { label: "Invoice", icon: ReceiptText, href: "#" },
            { label: "Blog", icon: Newspaper, href: "#" }
        ]
    },
    {
        type: "dropdown",
        label: "Shadcn UI",
        icon: Shapes,
        items: [
            { label: "Accordian", icon: CircleArrowDown, href: "#" },
            { label: "Alert", icon: Flag, href: "#" },
            { label: "Bedge", icon: Pentagon, href: "#" },
            { label: "Button", icon: RectangleCircle, href: "#" },
            { label: "Dropdown", icon: GalleryVerticalEnd, href: "#" },
            { label: "Dialog", icon: Zap, href: "#" },
            { label: "Drawer", icon: PanelRightClose, href: "#" },
            { label: "Datepicker", icon: CalendarHeart, href: "#" },
            { label: "Tooltip", icon: Square, href: "#" },
            { label: "Input", icon: Type, href: "#" },
            { label: "Select", icon: List, href: "#" },
            { label: "Checkbox", icon: CheckSquare, href: "#" },
            { label: "Radio", icon: CircleDot, href: "#" },
        ]
    },
    {
        type: "dropdown",
        label: "Charts",
        icon: ChartColumn,
        items: [
            { label: "Apex Chart", icon: ChartBar, href: "#" },
            { label: "Shadcn Charts", icon: ChartColumnBig, href: "#" },
        ]
    },
    {
        type: "dropdown",
        label: "Tables",
        icon: Table,
        items: [
            { label: "React Tables", icon: TableProperties, href: "#" },
            { label: "Shadcn Tables", icon: Table, href: "#" },
        ]
    },
    {
        type: "dropdown",
        label: "Pages",
        icon: BookOpen,
        items: [
            { label: "Account Settings", icon: Settings, href: "#" },
            { label: "FAQ", icon: Square, href: "#" },
            { label: "Pricing", icon: CircleDollarSign, href: "#" },
            { label: "Roll Base Access", icon: Accessibility, href: "#" },
            { label: "Integrations", icon: Home, href: "#" },
            { label: "API Keys", icon: Key, href: "#" },
        ]
    },
    {
        type: "dropdown",
        label: "Headless UI",
        icon: Blocks,
        items: [
            { label: "Dropdown", icon: CircleArrowDown, href: "#" },
            { label: "Disclosure", icon: LayersPlus, href: "#" },
            { label: "Dialog", icon: Smartphone, href: "#" },
            { label: "Popover", icon: MousePointer2, href: "#" },
            { label: "Tabs", icon: Layout, href: "#" },
            { label: "Buttons", icon: RectangleCircle, href: "#" },
            { label: "Checkbox", icon: CheckCircle2, href: "#" },
        ]
    }
]

export default NavData;