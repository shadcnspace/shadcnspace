const NavData: any[] = [
    {
        type: "dropdown",
        label: "Dashboards",
        icon: "solar:layers-line-duotone",
        items: [
            { label: "Ecommerce", icon: "solar:widget-add-line-duotone", href: "#" },
            { label: "Analytics", icon: "solar:chart-line-duotone", href: "#" },
            { label: "Projects", icon: "solar:layers-line-duotone", href: "#" },
            { label: "Frontend Pages", icon: "solar:home-angle-linear", href: "#" },
            { label: "Landing Pages", icon: "solar:bill-list-line-duotone", href: "#" },
        ],
    },
    {
        type: "dropdown",
        label: "Shadcn UI",
        icon: "solar:command-broken",
        items: [
            { label: "Accordian", icon: "solar:round-alt-arrow-down-outline", href: "#" },
            { label: "Alert", icon: "solar:flag-line-duotone", href: "#" },
            { label: "Bedge", icon: "solar:tag-horizontal-line-duotone", href: "#" },
            { label: "Button", icon: "solar:airbuds-case-minimalistic-line-duotone", href: "#" },
            { label: "Dropdown", icon: "solar:airbuds-case-line-duotone", href: "#" },
            { label: "Dialog", icon: "solar:bolt-line-duotone", href: "#" },
            { label: "Drawer", icon: "solar:laptop-minimalistic-line-duotone", href: "#" },
            { label: "Datepicker", icon: "solar:calendar-search-linear", href: "#" }
        ]
    },
    {
        type: "link",
        label: "Docs",
        icon: 'solar:document-add-linear',
        href: '#'
    }
]

export default NavData;