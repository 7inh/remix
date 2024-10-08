export default function MailPage() {
  return (
    <div className="overflow-hidden h-full border rounded-lg lg:border-none">
      <div
        className="flex w-full data-[panel-group-direction=vertical]:flex-col h-full items-stretch"
        data-panel-group
        data-panel-group-direction="horizontal"
        data-panel-group-id=":rju:"
        style={{
          display: "flex",
          flexDirection: "row",
          height: "100%",
          overflow: "hidden",
          width: "100%",
        }}
      >
        <div
          data-panel
          data-panel-collapsible="true"
          data-panel-group-id=":rju:"
          data-panel-id=":rjv:"
          data-panel-size={20.0}
          style={{ flex: "20 1 0px", overflow: "hidden" }}
        >
          <div className="flex h-[52px] items-center justify-center px-2">
            <button
              type="button"
              role="combobox"
              aria-controls="radix-:rk0:"
              aria-expanded="false"
              aria-autocomplete="none"
              dir="ltr"
              data-state="closed"
              className="h-9 w-full justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 flex items-center gap-2 [&>span]:line-clamp-1 [&>span]:flex [&>span]:w-full [&>span]:items-center [&>span]:gap-1 [&>span]:truncate [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0"
              aria-label="Select account"
            >
              <span style={{ pointerEvents: "none" }}>
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Vercel</title>
                  <path
                    d="M24 22.525H0l12-21.05 12 21.05z"
                    fill="currentColor"
                  />
                </svg>
                <span className="ml-2">Alicia Koch</span>
              </span>
              <svg
                width={15}
                height={15}
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 opacity-50"
                aria-hidden="true"
              >
                <path
                  d="M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div
            data-orientation="horizontal"
            role="none"
            className="shrink-0 bg-border h-[1px] w-full"
          />
          <div
            data-collapsed="false"
            className="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2"
          >
            <nav className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
              <a
                className="inline-flex items-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3 dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white justify-start"
                href="/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-inbox mr-2 h-4 w-4"
                >
                  <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
                  <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
                </svg>
                Inbox
                <span className="ml-auto text-background dark:text-white">
                  128
                </span>
              </a>
              <a
                className="inline-flex items-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 justify-start"
                href="/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-file mr-2 h-4 w-4"
                >
                  <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                  <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                </svg>
                Drafts<span className="ml-auto">9</span>
              </a>
              <a
                className="inline-flex items-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 justify-start"
                href="/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-send mr-2 h-4 w-4"
                >
                  <path d="m22 2-7 20-4-9-9-4Z" />
                  <path d="M22 2 11 13" />
                </svg>
                Sent
              </a>
              <a
                className="inline-flex items-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 justify-start"
                href="/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-archive-x mr-2 h-4 w-4"
                >
                  <rect width={20} height={5} x={2} y={3} rx={1} />
                  <path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" />
                  <path d="m9.5 17 5-5" />
                  <path d="m9.5 12 5 5" />
                </svg>
                Junk<span className="ml-auto">23</span>
              </a>
              <a
                className="inline-flex items-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 justify-start"
                href="/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-trash2 mr-2 h-4 w-4"
                >
                  <path d="M3 6h18" />
                  <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                  <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                  <line x1={10} x2={10} y1={11} y2={17} />
                  <line x1={14} x2={14} y1={11} y2={17} />
                </svg>
                Trash
              </a>
              <a
                className="inline-flex items-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 justify-start"
                href="/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-archive mr-2 h-4 w-4"
                >
                  <rect width={20} height={5} x={2} y={3} rx={1} />
                  <path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" />
                  <path d="M10 12h4" />
                </svg>
                Archive
              </a>
            </nav>
          </div>
          <div
            data-orientation="horizontal"
            role="none"
            className="shrink-0 bg-border h-[1px] w-full"
          />
          <div
            data-collapsed="false"
            className="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2"
          >
            <nav className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
              <a
                className="inline-flex items-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 justify-start"
                href="/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-users-round mr-2 h-4 w-4"
                >
                  <path d="M18 21a8 8 0 0 0-16 0" />
                  <circle cx={10} cy={8} r={5} />
                  <path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3" />
                </svg>
                Social<span className="ml-auto">972</span>
              </a>
              <a
                className="inline-flex items-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 justify-start"
                href="/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-circle-alert mr-2 h-4 w-4"
                >
                  <circle cx={12} cy={12} r={10} />
                  <line x1={12} x2={12} y1={8} y2={12} />
                  <line x1={12} x2="12.01" y1={16} y2={16} />
                </svg>
                Updates<span className="ml-auto">342</span>
              </a>
              <a
                className="inline-flex items-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 justify-start"
                href="/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-messages-square mr-2 h-4 w-4"
                >
                  <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2z" />
                  <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
                </svg>
                Forums<span className="ml-auto">128</span>
              </a>
              <a
                className="inline-flex items-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 justify-start"
                href="/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-shopping-cart mr-2 h-4 w-4"
                >
                  <circle cx={8} cy={21} r={1} />
                  <circle cx={19} cy={21} r={1} />
                  <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                </svg>
                Shopping<span className="ml-auto">8</span>
              </a>
              <a
                className="inline-flex items-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 justify-start"
                href="/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-archive mr-2 h-4 w-4"
                >
                  <rect width={20} height={5} x={2} y={3} rx={1} />
                  <path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" />
                  <path d="M10 12h4" />
                </svg>
                Promotions<span className="ml-auto">21</span>
              </a>
            </nav>
          </div>
        </div>
        <div
          className="relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90"
          role="separator"
          data-panel-group-direction="horizontal"
          data-panel-group-id=":rju:"
          data-resize-handle
          data-resize-handle-state="inactive"
          data-panel-resize-handle-enabled="true"
          data-panel-resize-handle-id=":rk1:"
          aria-controls=":rjv:"
          aria-valuemax={20}
          aria-valuemin={15}
          aria-valuenow={20}
          style={{ touchAction: "none", userSelect: "none" }}
        >
          <div className="z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border">
            <svg
              width={15}
              height={15}
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-2.5 w-2.5"
            >
              <path
                d="M5.5 4.625C6.12132 4.625 6.625 4.12132 6.625 3.5C6.625 2.87868 6.12132 2.375 5.5 2.375C4.87868 2.375 4.375 2.87868 4.375 3.5C4.375 4.12132 4.87868 4.625 5.5 4.625ZM9.5 4.625C10.1213 4.625 10.625 4.12132 10.625 3.5C10.625 2.87868 10.1213 2.375 9.5 2.375C8.87868 2.375 8.375 2.87868 8.375 3.5C8.375 4.12132 8.87868 4.625 9.5 4.625ZM10.625 7.5C10.625 8.12132 10.1213 8.625 9.5 8.625C8.87868 8.625 8.375 8.12132 8.375 7.5C8.375 6.87868 8.87868 6.375 9.5 6.375C10.1213 6.375 10.625 6.87868 10.625 7.5ZM5.5 8.625C6.12132 8.625 6.625 8.12132 6.625 7.5C6.625 6.87868 6.12132 6.375 5.5 6.375C4.87868 6.375 4.375 6.87868 4.375 7.5C4.375 8.12132 4.87868 8.625 5.5 8.625ZM10.625 11.5C10.625 12.1213 10.1213 12.625 9.5 12.625C8.87868 12.625 8.375 12.1213 8.375 11.5C8.375 10.8787 8.87868 10.375 9.5 10.375C10.1213 10.375 10.625 10.8787 10.625 11.5ZM5.5 12.625C6.12132 12.625 6.625 12.1213 6.625 11.5C6.625 10.8787 6.12132 10.375 5.5 10.375C4.87868 10.375 4.375 10.8787 4.375 11.5C4.375 12.1213 4.87868 12.625 5.5 12.625Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div
          data-panel
          data-panel-group-id=":rju:"
          data-panel-id=":rk2:"
          data-panel-size={32.0}
          style={{ flex: "32 1 0px", overflow: "hidden" }}
        >
          <div dir="ltr" data-orientation="horizontal">
            <div className="flex items-center px-4 py-2">
              <h1 className="text-xl font-bold">Inbox</h1>
              <div
                role="tablist"
                aria-orientation="horizontal"
                className="inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground ml-auto"
                tabIndex={0}
                data-orientation="horizontal"
                style={{ outline: "none" }}
              >
                <button
                  type="button"
                  role="tab"
                  aria-selected="true"
                  aria-controls="radix-:rk3:-content-all"
                  data-state="active"
                  id="radix-:rk3:-trigger-all"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow text-zinc-600 dark:text-zinc-200"
                  tabIndex={-1}
                  data-orientation="horizontal"
                  data-radix-collection-item
                >
                  All mail
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected="false"
                  aria-controls="radix-:rk3:-content-unread"
                  data-state="inactive"
                  id="radix-:rk3:-trigger-unread"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow text-zinc-600 dark:text-zinc-200"
                  tabIndex={-1}
                  data-orientation="horizontal"
                  data-radix-collection-item
                >
                  Unread
                </button>
              </div>
            </div>
            <div
              data-orientation="horizontal"
              role="none"
              className="shrink-0 bg-border h-[1px] w-full"
            />
            <div className="bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <form>
                <div className="relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-search absolute left-2 top-2.5 h-4 w-4 text-muted-foreground"
                  >
                    <circle cx={11} cy={11} r={8} />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                  <input
                    className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 pl-8"
                    placeholder="Search"
                  />
                </div>
              </form>
            </div>
            <div
              data-state="active"
              data-orientation="horizontal"
              role="tabpanel"
              aria-labelledby="radix-:rk3:-trigger-all"
              id="radix-:rk3:-content-all"
              tabIndex={0}
              className="overflow-auto ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 m-0"
              style={{ animationDuration: "0s" }}
            >
              <div
                dir="ltr"
                className="relative overflow-auto h-[calc(100vh-135px)]"
                style={{ position: "relative" }}
              >
                <div
                  data-radix-scroll-area-viewport
                  className="w-full rounded-[inherit] overflow-auto "
                >
                  <div style={{ minWidth: "100%", display: "table" }}>
                    <div className="flex flex-col gap-2 p-4 pt-0 ">
                      <button className="flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent bg-muted">
                        <div className="flex w-full flex-col gap-1">
                          <div className="flex items-center">
                            <div className="flex items-center gap-2">
                              <div className="font-semibold">William Smith</div>
                            </div>
                            <div className="ml-auto text-xs text-foreground">
                              11 months ago
                            </div>
                          </div>
                          <div className="text-xs font-medium">
                            Meeting Tomorrow
                          </div>
                        </div>
                        <div className="line-clamp-2 text-xs text-muted-foreground">
                          Hi, let&apos;s have a meeting tomorrow to discuss the
                          project. I&apos;ve been reviewing the project details
                          and have some ideas I&apos;d like to share. It&apos;s
                          crucial that we align on our next steps to ensure the
                          project&apos;s success. Please come prepared with any
                          questions or insights you may have. Looking forward to
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                            meeting
                          </div>
                          <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80">
                            work
                          </div>
                          <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                            important
                          </div>
                        </div>
                      </button>
                      <button className="flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent">
                        <div className="flex w-full flex-col gap-1">
                          <div className="flex items-center">
                            <div className="flex items-center gap-2">
                              <div className="font-semibold">Alice Smith</div>
                            </div>
                            <div className="ml-auto text-xs text-muted-foreground">
                              11 months ago
                            </div>
                          </div>
                          <div className="text-xs font-medium">
                            Re: Project Update
                          </div>
                        </div>
                        <div className="line-clamp-2 text-xs text-muted-foreground">
                          Thank you for the project update. It looks great!
                          I&apos;ve gone through the report, and the progress is
                          impressive. The team has done a fantastic job, and I
                          appreciate the hard work everyone has put in. I have a
                          few minor suggestions that I&apos;ll include in the
                          attached document. Let&apos;s discuss these duri
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80">
                            work
                          </div>
                          <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                            important
                          </div>
                        </div>
                      </button>
                      <button className="flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent">
                        <div className="flex w-full flex-col gap-1">
                          <div className="flex items-center">
                            <div className="flex items-center gap-2">
                              <div className="font-semibold">Bob Johnson</div>
                            </div>
                            <div className="ml-auto text-xs text-muted-foreground">
                              over 1 year ago
                            </div>
                          </div>
                          <div className="text-xs font-medium">
                            Weekend Plans
                          </div>
                        </div>
                        <div className="line-clamp-2 text-xs text-muted-foreground">
                          Any plans for the weekend? I was thinking of going
                          hiking in the nearby mountains. It&apos;s been a while
                          since we had some outdoor fun. If you&apos;re
                          interested, let me know, and we can plan the details.
                          It&apos;ll be a great way to unwind and enjoy nature.
                          Looking forward to your response! Best, Bob
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">
                            personal
                          </div>
                        </div>
                      </button>
                      <button className="flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent">
                        <div className="flex w-full flex-col gap-1">
                          <div className="flex items-center">
                            <div className="flex items-center gap-2">
                              <div className="font-semibold">Emily Davis</div>
                              <span className="flex h-2 w-2 rounded-full bg-blue-600" />
                            </div>
                            <div className="ml-auto text-xs text-muted-foreground">
                              over 1 year ago
                            </div>
                          </div>
                          <div className="text-xs font-medium">
                            Re: Question about Budget
                          </div>
                        </div>
                        <div className="line-clamp-2 text-xs text-muted-foreground">
                          I have a question about the budget for the upcoming
                          project. It seems like there&apos;s a discrepancy in
                          the allocation of resources. I&apos;ve reviewed the
                          budget report and identified a few areas where we
                          might be able to optimize our spending without
                          compromising the project&apos;s quality. I&apos;ve
                          attached a de
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80">
                            work
                          </div>
                          <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                            budget
                          </div>
                        </div>
                      </button>
                      <button className="flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent">
                        <div className="flex w-full flex-col gap-1">
                          <div className="flex items-center">
                            <div className="flex items-center gap-2">
                              <div className="font-semibold">
                                Michael Wilson
                              </div>
                              <span className="flex h-2 w-2 rounded-full bg-blue-600" />
                            </div>
                            <div className="ml-auto text-xs text-muted-foreground">
                              over 1 year ago
                            </div>
                          </div>
                          <div className="text-xs font-medium">
                            Important Announcement
                          </div>
                        </div>
                        <div className="line-clamp-2 text-xs text-muted-foreground">
                          I have an important announcement to make during our
                          team meeting. It pertains to a strategic shift in our
                          approach to the upcoming product launch. We&apos;ve
                          received valuable feedback from our beta testers, and
                          I believe it&apos;s time to make some adjustments to
                          better meet our customers&apos; needs. This chang
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                            meeting
                          </div>
                          <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80">
                            work
                          </div>
                          <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                            important
                          </div>
                        </div>
                      </button>
                      <button className="flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent">
                        <div className="flex w-full flex-col gap-1">
                          <div className="flex items-center">
                            <div className="flex items-center gap-2">
                              <div className="font-semibold">Sarah Brown</div>
                            </div>
                            <div className="ml-auto text-xs text-muted-foreground">
                              over 1 year ago
                            </div>
                          </div>
                          <div className="text-xs font-medium">
                            Re: Feedback on Proposal
                          </div>
                        </div>
                        <div className="line-clamp-2 text-xs text-muted-foreground">
                          Thank you for your feedback on the proposal. It looks
                          great! I&apos;m pleased to hear that you found it
                          promising. The team worked diligently to address all
                          the key points you raised, and I believe we now have a
                          strong foundation for the project. I&apos;ve attached
                          the revised proposal for your review. Plea
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80">
                            work
                          </div>
                        </div>
                      </button>
                      <button className="flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent">
                        <div className="flex w-full flex-col gap-1">
                          <div className="flex items-center">
                            <div className="flex items-center gap-2">
                              <div className="font-semibold">David Lee</div>
                              <span className="flex h-2 w-2 rounded-full bg-blue-600" />
                            </div>
                            <div className="ml-auto text-xs text-muted-foreground">
                              over 1 year ago
                            </div>
                          </div>
                          <div className="text-xs font-medium">
                            New Project Idea
                          </div>
                        </div>
                        <div className="line-clamp-2 text-xs text-muted-foreground">
                          I have an exciting new project idea to discuss with
                          you. It involves expanding our services to target a
                          niche market that has shown considerable growth in
                          recent months. I&apos;ve prepared a detailed proposal
                          outlining the potential benefits and the strategy for
                          execution. This project has the potentia
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                            meeting
                          </div>
                          <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80">
                            work
                          </div>
                          <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                            important
                          </div>
                        </div>
                      </button>
                      <button className="flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent">
                        <div className="flex w-full flex-col gap-1">
                          <div className="flex items-center">
                            <div className="flex items-center gap-2">
                              <div className="font-semibold">Olivia Wilson</div>
                            </div>
                            <div className="ml-auto text-xs text-muted-foreground">
                              over 1 year ago
                            </div>
                          </div>
                          <div className="text-xs font-medium">
                            Vacation Plans
                          </div>
                        </div>
                        <div className="line-clamp-2 text-xs text-muted-foreground">
                          Let&apos;s plan our vacation for next month. What do
                          you think? I&apos;ve been thinking of visiting a
                          tropical paradise, and I&apos;ve put together some
                          destination options. I believe it&apos;s time for us
                          to unwind and recharge. Please take a look at the
                          options and let me know your preferences. We can start
                          making{" "}
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">
                            personal
                          </div>
                        </div>
                      </button>
                      <button className="flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent">
                        <div className="flex w-full flex-col gap-1">
                          <div className="flex items-center">
                            <div className="flex items-center gap-2">
                              <div className="font-semibold">James Martin</div>
                            </div>
                            <div className="ml-auto text-xs text-muted-foreground">
                              almost 2 years ago
                            </div>
                          </div>
                          <div className="text-xs font-medium">
                            Re: Conference Registration
                          </div>
                        </div>
                        <div className="line-clamp-2 text-xs text-muted-foreground">
                          I&apos;ve completed the registration for the
                          conference next month. The event promises to be a
                          great networking opportunity, and I&apos;m looking
                          forward to attending the various sessions and
                          connecting with industry experts. I&apos;ve also
                          attached the conference schedule for your reference.
                          If there are any sp
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80">
                            work
                          </div>
                          <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                            conference
                          </div>
                        </div>
                      </button>
                      <button className="flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent">
                        <div className="flex w-full flex-col gap-1">
                          <div className="flex items-center">
                            <div className="flex items-center gap-2">
                              <div className="font-semibold">Sophia White</div>
                              <span className="flex h-2 w-2 rounded-full bg-blue-600" />
                            </div>
                            <div className="ml-auto text-xs text-muted-foreground">
                              almost 2 years ago
                            </div>
                          </div>
                          <div className="text-xs font-medium">Team Dinner</div>
                        </div>
                        <div className="line-clamp-2 text-xs text-muted-foreground">
                          Let&apos;s have a team dinner next week to celebrate
                          our success. We&apos;ve achieved some significant
                          milestones, and it&apos;s time to acknowledge our hard
                          work and dedication. I&apos;ve made reservations at a
                          lovely restaurant, and I&apos;m sure it&apos;ll be an
                          enjoyable evening. Please confirm your availability
                          and any di
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                            meeting
                          </div>
                          <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80">
                            work
                          </div>
                        </div>
                      </button>
                      <button className="flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent">
                        <div className="flex w-full flex-col gap-1">
                          <div className="flex items-center">
                            <div className="flex items-center gap-2">
                              <div className="font-semibold">
                                Daniel Johnson
                              </div>
                              <span className="flex h-2 w-2 rounded-full bg-blue-600" />
                            </div>
                            <div className="ml-auto text-xs text-muted-foreground">
                              almost 2 years ago
                            </div>
                          </div>
                          <div className="text-xs font-medium">
                            Feedback Request
                          </div>
                        </div>
                        <div className="line-clamp-2 text-xs text-muted-foreground">
                          I&apos;d like your feedback on the latest project
                          deliverables. We&apos;ve made significant progress,
                          and I value your input to ensure we&apos;re on the
                          right track. I&apos;ve attached the deliverables for
                          your review, and I&apos;m particularly interested in
                          any areas where you think we can further enhance the
                          quality or e
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80">
                            work
                          </div>
                        </div>
                      </button>
                      <button className="flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent">
                        <div className="flex w-full flex-col gap-1">
                          <div className="flex items-center">
                            <div className="flex items-center gap-2">
                              <div className="font-semibold">Ava Taylor</div>
                            </div>
                            <div className="ml-auto text-xs text-muted-foreground">
                              almost 2 years ago
                            </div>
                          </div>
                          <div className="text-xs font-medium">
                            Re: Meeting Agenda
                          </div>
                        </div>
                        <div className="line-clamp-2 text-xs text-muted-foreground">
                          Here&apos;s the agenda for our meeting next week.
                          I&apos;ve included all the topics we need to cover, as
                          well as time allocations for each. If you have any
                          additional items to discuss or any specific points to
                          address, please let me know, and we can integrate them
                          into the agenda. It&apos;s essential that our me
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                            meeting
                          </div>
                          <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80">
                            work
                          </div>
                        </div>
                      </button>
                      <button className="flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent">
                        <div className="flex w-full flex-col gap-1">
                          <div className="flex items-center">
                            <div className="flex items-center gap-2">
                              <div className="font-semibold">
                                William Anderson
                              </div>
                              <span className="flex h-2 w-2 rounded-full bg-blue-600" />
                            </div>
                            <div className="ml-auto text-xs text-muted-foreground">
                              almost 2 years ago
                            </div>
                          </div>
                          <div className="text-xs font-medium">
                            Product Launch Update
                          </div>
                        </div>
                        <div className="line-clamp-2 text-xs text-muted-foreground">
                          The product launch is on track. I&apos;ll provide an
                          update during our call. We&apos;ve made substantial
                          progress in the development and marketing of our new
                          product. I&apos;m excited to share the latest updates
                          with you during our upcoming call. It&apos;s crucial
                          that we coordinate our efforts to ensure a successful{" "}
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                            meeting
                          </div>
                          <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80">
                            work
                          </div>
                          <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                            important
                          </div>
                        </div>
                      </button>
                      <button className="flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent">
                        <div className="flex w-full flex-col gap-1">
                          <div className="flex items-center">
                            <div className="flex items-center gap-2">
                              <div className="font-semibold">Mia Harris</div>
                            </div>
                            <div className="ml-auto text-xs text-muted-foreground">
                              about 2 years ago
                            </div>
                          </div>
                          <div className="text-xs font-medium">
                            Re: Travel Itinerary
                          </div>
                        </div>
                        <div className="line-clamp-2 text-xs text-muted-foreground">
                          I&apos;ve received the travel itinerary. It looks
                          great! Thank you for your prompt assistance in
                          arranging the details. I&apos;ve reviewed the schedule
                          and the accommodations, and everything seems to be in
                          order. I&apos;m looking forward to the trip, and
                          I&apos;m confident it&apos;ll be a smooth and
                          enjoyable experience. I
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">
                            personal
                          </div>
                          <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                            travel
                          </div>
                        </div>
                      </button>
                      <button className="flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent">
                        <div className="flex w-full flex-col gap-1">
                          <div className="flex items-center">
                            <div className="flex items-center gap-2">
                              <div className="font-semibold">Ethan Clark</div>
                              <span className="flex h-2 w-2 rounded-full bg-blue-600" />
                            </div>
                            <div className="ml-auto text-xs text-muted-foreground">
                              about 2 years ago
                            </div>
                          </div>
                          <div className="text-xs font-medium">
                            Team Building Event
                          </div>
                        </div>
                        <div className="line-clamp-2 text-xs text-muted-foreground">
                          Let&apos;s plan a team-building event for our
                          department. Team cohesion and morale are vital to our
                          success, and I believe a well-organized team-building
                          event can be incredibly beneficial. I&apos;ve done
                          some research and have a few ideas for fun and
                          engaging activities. Please let me know your thoughts
                          and
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                            meeting
                          </div>
                          <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80">
                            work
                          </div>
                        </div>
                      </button>
                      <button className="flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent">
                        <div className="flex w-full flex-col gap-1">
                          <div className="flex items-center">
                            <div className="flex items-center gap-2">
                              <div className="font-semibold">Chloe Hall</div>
                            </div>
                            <div className="ml-auto text-xs text-muted-foreground">
                              about 2 years ago
                            </div>
                          </div>
                          <div className="text-xs font-medium">
                            Re: Budget Approval
                          </div>
                        </div>
                        <div className="line-clamp-2 text-xs text-muted-foreground">
                          The budget has been approved. We can proceed with the
                          project. I&apos;m delighted to inform you that our
                          budget proposal has received the green light from the
                          finance department. This is a significant milestone,
                          and it means we can move forward with the project as
                          planned. I&apos;ve attached the finalized bu
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80">
                            work
                          </div>
                          <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                            budget
                          </div>
                        </div>
                      </button>
                      <button className="flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent">
                        <div className="flex w-full flex-col gap-1">
                          <div className="flex items-center">
                            <div className="flex items-center gap-2">
                              <div className="font-semibold">Samuel Turner</div>
                              <span className="flex h-2 w-2 rounded-full bg-blue-600" />
                            </div>
                            <div className="ml-auto text-xs text-muted-foreground">
                              about 2 years ago
                            </div>
                          </div>
                          <div className="text-xs font-medium">
                            Weekend Hike
                          </div>
                        </div>
                        <div className="line-clamp-2 text-xs text-muted-foreground">
                          Who&apos;s up for a weekend hike in the mountains?
                          I&apos;ve been craving some outdoor adventure, and a
                          hike in the mountains sounds like the perfect escape.
                          If you&apos;re up for the challenge, we can explore
                          some scenic trails and enjoy the beauty of nature.
                          I&apos;ve done some research and have a few routes in
                          mind
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">
                            personal
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-state="inactive"
              data-orientation="horizontal"
              role="tabpanel"
              aria-labelledby="radix-:rk3:-trigger-unread"
              hidden
              id="radix-:rk3:-content-unread"
              tabIndex={0}
              className="ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 m-0"
            />
          </div>
        </div>
        <div
          className="relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90"
          role="separator"
          style={{ touchAction: "none", userSelect: "none" }}
          data-panel-group-direction="horizontal"
          data-panel-group-id=":R19uukv9u6ja:"
          data-resize-handle=""
          data-resize-handle-state="inactive"
          data-panel-resize-handle-enabled="true"
          data-panel-resize-handle-id=":Rj9uukv9u6ja:"
          aria-controls=":Rf9uukv9u6ja:"
          aria-valuemax={55}
          aria-valuemin={30}
          aria-valuenow={32}
        >
          <div className="z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border">
            <svg
              width={15}
              height={15}
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-2.5 w-2.5"
            >
              <path
                d="M5.5 4.625C6.12132 4.625 6.625 4.12132 6.625 3.5C6.625 2.87868 6.12132 2.375 5.5 2.375C4.87868 2.375 4.375 2.87868 4.375 3.5C4.375 4.12132 4.87868 4.625 5.5 4.625ZM9.5 4.625C10.1213 4.625 10.625 4.12132 10.625 3.5C10.625 2.87868 10.1213 2.375 9.5 2.375C8.87868 2.375 8.375 2.87868 8.375 3.5C8.375 4.12132 8.87868 4.625 9.5 4.625ZM10.625 7.5C10.625 8.12132 10.1213 8.625 9.5 8.625C8.87868 8.625 8.375 8.12132 8.375 7.5C8.375 6.87868 8.87868 6.375 9.5 6.375C10.1213 6.375 10.625 6.87868 10.625 7.5ZM5.5 8.625C6.12132 8.625 6.625 8.12132 6.625 7.5C6.625 6.87868 6.12132 6.375 5.5 6.375C4.87868 6.375 4.375 6.87868 4.375 7.5C4.375 8.12132 4.87868 8.625 5.5 8.625ZM10.625 11.5C10.625 12.1213 10.1213 12.625 9.5 12.625C8.87868 12.625 8.375 12.1213 8.375 11.5C8.375 10.8787 8.87868 10.375 9.5 10.375C10.1213 10.375 10.625 10.8787 10.625 11.5ZM5.5 12.625C6.12132 12.625 6.625 12.1213 6.625 11.5C6.625 10.8787 6.12132 10.375 5.5 10.375C4.87868 10.375 4.375 10.8787 4.375 11.5C4.375 12.1213 4.87868 12.625 5.5 12.625Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        <div
          style={{
            flexBasis: 0,
            flexGrow: 48.0,
            flexShrink: 1,
            overflow: "hidden",
          }}
          data-panel
          data-panel-group-id=":R19uukv9u6ja:"
          data-panel-id=":Rn9uukv9u6ja:"
          data-panel-size={48.0}
        >
          <div className="flex h-full flex-col">
            <div className="flex items-center p-2">
              <div className="flex items-center gap-2">
                <button
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9"
                  data-state="closed"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-archive h-4 w-4"
                  >
                    <rect width={20} height={5} x={2} y={3} rx={1} />
                    <path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" />
                    <path d="M10 12h4" />
                  </svg>
                  <span className="sr-only">Archive</span>
                </button>
                <button
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9"
                  data-state="closed"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-archive-x h-4 w-4"
                  >
                    <rect width={20} height={5} x={2} y={3} rx={1} />
                    <path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" />
                    <path d="m9.5 17 5-5" />
                    <path d="m9.5 12 5 5" />
                  </svg>
                  <span className="sr-only">Move to junk</span>
                </button>
                <button
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9"
                  data-state="closed"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-trash2 h-4 w-4"
                  >
                    <path d="M3 6h18" />
                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                    <line x1={10} x2={10} y1={11} y2={17} />
                    <line x1={14} x2={14} y1={11} y2={17} />
                  </svg>
                  <span className="sr-only">Move to trash</span>
                </button>
                <div
                  data-orientation="vertical"
                  role="none"
                  className="shrink-0 bg-border w-[1px] mx-1 h-6"
                />
                <button
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9"
                  data-state="closed"
                  type="button"
                  aria-haspopup="dialog"
                  aria-expanded="false"
                  aria-controls="radix-:R1qbn9uukv9u6ja:"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-clock h-4 w-4"
                  >
                    <circle cx={12} cy={12} r={10} />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <span className="sr-only">Snooze</span>
                </button>
              </div>
              <div className="ml-auto flex items-center gap-2">
                <button
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9"
                  data-state="closed"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-reply h-4 w-4"
                  >
                    <polyline points="9 17 4 12 9 7" />
                    <path d="M20 18v-2a4 4 0 0 0-4-4H4" />
                  </svg>
                  <span className="sr-only">Reply</span>
                </button>
                <button
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9"
                  data-state="closed"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-reply-all h-4 w-4"
                  >
                    <polyline points="7 17 2 12 7 7" />
                    <polyline points="12 17 7 12 12 7" />
                    <path d="M22 18v-2a4 4 0 0 0-4-4H7" />
                  </svg>
                  <span className="sr-only">Reply all</span>
                </button>
                <button
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9"
                  data-state="closed"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-forward h-4 w-4"
                  >
                    <polyline points="15 17 20 12 15 7" />
                    <path d="M4 18v-2a4 4 0 0 1 4-4h12" />
                  </svg>
                  <span className="sr-only">Forward</span>
                </button>
              </div>
              <div
                data-orientation="vertical"
                role="none"
                className="shrink-0 bg-border w-[1px] mx-2 h-6"
              />
              <button
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9"
                type="button"
                id="radix-:R13n9uukv9u6ja:"
                aria-haspopup="menu"
                aria-expanded="false"
                data-state="closed"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-ellipsis-vertical h-4 w-4"
                >
                  <circle cx={12} cy={12} r={1} />
                  <circle cx={12} cy={5} r={1} />
                  <circle cx={12} cy={19} r={1} />
                </svg>
                <span className="sr-only">More</span>
              </button>
            </div>
            <div
              data-orientation="horizontal"
              role="none"
              className="shrink-0 bg-border h-[1px] w-full"
            />
            <div className="flex flex-1 flex-col">
              <div className="flex items-start p-4">
                <div className="flex items-start gap-4 text-sm">
                  <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                    <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">
                      WS
                    </span>
                  </span>
                  <div className="grid gap-1">
                    <div className="font-semibold">William Smith</div>
                    <div className="line-clamp-1 text-xs">Meeting Tomorrow</div>
                    <div className="line-clamp-1 text-xs">
                      <span className="font-medium">Reply-To:</span> {/* */}
                      williamsmith@example.com
                    </div>
                  </div>
                </div>
                <div className="ml-auto text-xs text-muted-foreground">
                  Oct 22, 2023, 9:00:00 AM
                </div>
              </div>
              <div
                data-orientation="horizontal"
                role="none"
                className="shrink-0 bg-border h-[1px] w-full"
              />
              <div className="flex-1 whitespace-pre-wrap p-4 text-sm">
                Hi, let&apos;s have a meeting tomorrow to discuss the project.
                I&apos;ve been reviewing the project details and have some ideas
                I&apos;d like to share. It&apos;s crucial that we align on our
                next steps to ensure the project&apos;s success. Please come
                prepared with any questions or insights you may have. Looking
                forward to our meeting! Best regards, William
              </div>
              <div
                data-orientation="horizontal"
                role="none"
                className="shrink-0 bg-border h-[1px] w-full mt-auto"
              />
              <div className="p-4">
                <form>
                  <div className="grid gap-4">
                    <textarea
                      className="flex min-h-[60px] w-full rounded-md border border-input bg-transparent text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 p-4"
                      placeholder="Reply William Smith..."
                      defaultValue={""}
                    />
                    <div className="flex items-center">
                      <label
                        className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-2 text-xs font-normal"
                        htmlFor="mute"
                      >
                        <button
                          type="button"
                          role="switch"
                          aria-checked="false"
                          data-state="unchecked"
                          value="on"
                          className="peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input"
                          id="mute"
                          aria-label="Mute thread"
                        >
                          <span
                            data-state="unchecked"
                            className="pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
                          />
                        </button>
                        <input
                          type="checkbox"
                          aria-hidden="true"
                          style={{
                            transform: "translateX(-100%)",
                            position: "absolute",
                            pointerEvents: "none",
                            opacity: 0,
                            margin: "0px",
                            width: "36px",
                            height: "20px",
                          }}
                          tabIndex={-1}
                          defaultValue="on"
                        />{" "}
                        Mute this thread
                      </label>
                      <button className="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-8 rounded-md px-3 text-xs ml-auto">
                        Send
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
