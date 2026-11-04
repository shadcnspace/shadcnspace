import { BringToFront, CalendarHeart, ChartColumnBig, CircleArrowDown, Flag, Form, GalleryVerticalEnd, Grid2x2Plus, LayersPlus, PanelRightClose, Pentagon, Presentation, RectangleCircle, Shapes, Shredder, Zap, Phone, MessageSquare, Notebook, Calendar, Mail, Ticket, SquareKanban, Sparkles, User, ReceiptText, Newspaper, Type, List, CheckSquare, CircleDot, Square, LayoutPanelLeft } from "lucide-react";

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
        type: "link",
        label: "Docs",
        icon: Shredder,
        href: '#'
    }
]

export default NavData;