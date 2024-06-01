type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  home: (props: IconProps) => (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M25.8133 9.15999L16.5733 1.77333C15.1467 0.626659 12.84 0.626659 11.4267 1.75999L2.18667 9.15999C1.14667 9.98666 0.480008 11.7333 0.706674 13.04L2.48001 23.6533C2.80001 25.5467 4.61334 27.08 6.53334 27.08H21.4667C23.3733 27.08 25.2 25.5333 25.52 23.6533L27.2933 13.04C27.5067 11.7333 26.84 9.98666 25.8133 9.15999ZM14 18.6667C12.16 18.6667 10.6667 17.1733 10.6667 15.3333C10.6667 13.4933 12.16 12 14 12C15.84 12 17.3333 13.4933 17.3333 15.3333C17.3333 17.1733 15.84 18.6667 14 18.6667Z"
        fill="white"
      />
    </svg>
  ),

  searchIcon: (props: IconProps) => (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16 17C11.7733 17 8.33331 13.56 8.33331 9.33334C8.33331 5.10667 11.7733 1.66667 16 1.66667C20.2266 1.66667 23.6666 5.10667 23.6666 9.33334C23.6666 13.56 20.2266 17 16 17ZM16 3.66667C12.88 3.66667 10.3333 6.21334 10.3333 9.33334C10.3333 12.4533 12.88 15 16 15C19.12 15 21.6666 12.4533 21.6666 9.33334C21.6666 6.21334 19.12 3.66667 16 3.66667Z"
        fill="white"
      />
      <path
        d="M4.54688 30.3333C4.00021 30.3333 3.54688 29.88 3.54688 29.3333C3.54688 23.64 9.13358 19 16.0002 19C16.5469 19 17.0002 19.4533 17.0002 20C17.0002 20.5467 16.5469 21 16.0002 21C10.2402 21 5.54688 24.7333 5.54688 29.3333C5.54688 29.88 5.09354 30.3333 4.54688 30.3333Z"
        fill="white"
      />
      <path
        d="M24.2667 28.7834C21.7742 28.7834 19.75 26.7591 19.75 24.2667C19.75 21.7742 21.7742 19.75 24.2667 19.75C26.7591 19.75 28.7834 21.7742 28.7834 24.2667C28.7834 26.7591 26.7591 28.7834 24.2667 28.7834ZM24.2667 20.25C22.0525 20.25 20.25 22.0525 20.25 24.2667C20.25 26.4809 22.0525 28.2834 24.2667 28.2834C26.4809 28.2834 28.2834 26.4809 28.2834 24.2667C28.2834 22.0525 26.4809 20.25 24.2667 20.25Z"
        fill="white"
        stroke="white"
        strokeWidth="1.5"
      />
      <path
        d="M29.3333 30.3333C29.0799 30.3333 28.8266 30.24 28.6266 30.04L27.2932 28.7067C26.9066 28.32 26.9066 27.6799 27.2932 27.2933C27.6799 26.9066 28.32 26.9066 28.7066 27.2933L30.04 28.6266C30.4266 29.0132 30.4266 29.6533 30.04 30.04C29.84 30.24 29.5866 30.3333 29.3333 30.3333Z"
        fill="white"
      />
    </svg>
  ),
  heart: (props: IconProps) => (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16 28.8667C15.5867 28.8667 15.1867 28.8133 14.8534 28.6933C9.76002 26.9467 1.66669 20.7467 1.66669 11.5867C1.66669 6.92 5.44002 3.13333 10.08 3.13333C12.3334 3.13333 14.44 4.01333 16 5.58666C17.56 4.01333 19.6667 3.13333 21.92 3.13333C26.56 3.13333 30.3334 6.93333 30.3334 11.5867C30.3334 20.76 22.24 26.9467 17.1467 28.6933C16.8134 28.8133 16.4134 28.8667 16 28.8667ZM10.08 5.13333C6.54669 5.13333 3.66669 8.02666 3.66669 11.5867C3.66669 20.6933 12.4267 25.76 15.5067 26.8133C15.7467 26.8933 16.2667 26.8933 16.5067 26.8133C19.5734 25.76 28.3467 20.7067 28.3467 11.5867C28.3467 8.02666 25.4667 5.13333 21.9334 5.13333C19.9067 5.13333 18.0267 6.08 16.8134 7.72C16.44 8.22666 15.5867 8.22666 15.2134 7.72C13.9734 6.06666 12.1067 5.13333 10.08 5.13333Z"
        fill="white"
      />
    </svg>
  ),
  profileIcon: (props: IconProps) => (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16.16 18.04C16.1333 18.04 16.0933 18.04 16.0667 18.04C16.0267 18.04 15.9733 18.04 15.9333 18.04C12.9067 17.9467 10.64 15.5867 10.64 12.68C10.64 9.72 13.0533 7.30666 16.0133 7.30666C18.9733 7.30666 21.3867 9.72 21.3867 12.68C21.3734 15.6 19.0933 17.9467 16.2 18.04C16.1733 18.04 16.1733 18.04 16.16 18.04ZM16 9.29333C14.1333 9.29333 12.6267 10.8133 12.6267 12.6667C12.6267 14.4933 14.0533 15.9733 15.8667 16.04C15.9067 16.0267 16.04 16.0267 16.1733 16.04C17.96 15.9467 19.36 14.48 19.3733 12.6667C19.3733 10.8133 17.8667 9.29333 16 9.29333Z"
        fill="white"
      />
      <path
        d="M16 30.3333C12.4133 30.3333 8.98667 29 6.33334 26.5733C6.09334 26.36 5.98667 26.04 6.01334 25.7333C6.18667 24.1467 7.17334 22.6667 8.81334 21.5733C12.7867 18.9333 19.2267 18.9333 23.1867 21.5733C24.8267 22.68 25.8133 24.1467 25.9867 25.7333C26.0267 26.0533 25.9067 26.36 25.6667 26.5733C23.0133 29 19.5867 30.3333 16 30.3333ZM8.10667 25.4667C10.32 27.32 13.1067 28.3333 16 28.3333C18.8933 28.3333 21.68 27.32 23.8933 25.4667C23.6533 24.6533 23.0133 23.8667 22.0667 23.2267C18.7867 21.04 13.2267 21.04 9.92 23.2267C8.97334 23.8667 8.34667 24.6533 8.10667 25.4667Z"
        fill="white"
      />
      <path
        d="M16 30.3333C8.09335 30.3333 1.66669 23.9067 1.66669 16C1.66669 8.09333 8.09335 1.66666 16 1.66666C23.9067 1.66666 30.3334 8.09333 30.3334 16C30.3334 23.9067 23.9067 30.3333 16 30.3333ZM16 3.66666C9.20002 3.66666 3.66669 9.2 3.66669 16C3.66669 22.8 9.20002 28.3333 16 28.3333C22.8 28.3333 28.3334 22.8 28.3334 16C28.3334 9.2 22.8 3.66666 16 3.66666Z"
        fill="white"
      />
    </svg>
  ),
  imageIcon: (props: IconProps) => (
    <svg
      width="29"
      height="29"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9 10C10.1046 10 11 9.10457 11 8C11 6.89543 10.1046 6 9 6C7.89543 6 7 6.89543 7 8C7 9.10457 7.89543 10 9 10Z"
        stroke="#04A51E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V10"
        stroke="#04A51E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.75 5H21.25"
        stroke="#04A51E"
        strokeWidth="1.5"
        strokeLinecap="round"
      />{" "}
      <path
        d="M18.5 7.75V2.25"
        stroke="#04A51E"
        strokeWidth="1.5"
        strokeLinecap="round"
      />{" "}
      <path
        d="M2.67 18.95L7.6 15.64C8.39 15.11 9.53 15.17 10.24 15.78L10.57 16.07C11.35 16.74 12.61 16.74 13.39 16.07L17.55 12.5C18.33 11.83 19.59 11.83 20.37 12.5L22 13.9"
        stroke="#04A51E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  heartIcon: (props: IconProps) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16.44 3.10001C14.63 3.10001 13.01 3.98001 12 5.33001C10.99 3.98001 9.37 3.10001 7.56 3.10001C4.49 3.10001 2 5.60001 2 8.69001C2 9.88001 2.19 10.98 2.52 12C4.1 17 8.97 19.99 11.38 20.81C11.72 20.93 12.28 20.93 12.62 20.81C15.03 19.99 19.9 17 21.48 12C21.81 10.98 22 9.88001 22 8.69001C22 5.60001 19.51 3.10001 16.44 3.10001Z"
        fill="#D71913"
      />
    </svg>
  ),
  messageIcon: (props: IconProps) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.5 19H8C4 19 2 18 2 13V8C2 4 4 2 8 2H16C20 2 22 4 22 8V13C22 17 20 19 16 19H15.5C15.19 19 14.89 19.15 14.7 19.4L13.2 21.4C12.54 22.28 11.46 22.28 10.8 21.4L9.3 19.4C9.14 19.18 8.77 19 8.5 19Z"
        stroke="#909090"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 8H17"
        stroke="#909090"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 13H13"
        stroke="#909090"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),

  logoutIcon: (props: IconProps) => (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.8666 10.08C12.28 5.28001 14.7466 3.32001 20.1466 3.32001H20.32C26.28 3.32001 28.6666 5.70667 28.6666 11.6667V20.36C28.6666 26.32 26.28 28.7067 20.32 28.7067H20.1466C14.7866 28.7067 12.32 26.7733 11.88 22.0533"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 16H4.82666"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.79998 11.5333L3.33331 16L7.79998 20.4667"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  iconImageProfile: (props: IconProps) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9 10C10.1046 10 11 9.10457 11 8C11 6.89543 10.1046 6 9 6C7.89543 6 7 6.89543 7 8C7 9.10457 7.89543 10 9 10Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V10"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.75 5H21.25"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M18.5 7.75V2.25"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M2.66992 18.95L7.59992 15.64C8.38992 15.11 9.52992 15.17 10.2399 15.78L10.5699 16.07C11.3499 16.74 12.6099 16.74 13.3899 16.07L17.5499 12.5C18.3299 11.83 19.5899 11.83 20.3699 12.5L21.9999 13.9"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  iconUserSearch: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="10" cy="7" r="4" />
      <path d="M10.3 15H7a4 4 0 0 0-4 4v2" />
      <circle cx="17" cy="17" r="3" />
      <path d="m21 21-1.9-1.9" />
    </svg>
  ),
  closeIcon: (props: IconProps) => (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20.0002 3.33331C10.8168 3.33331 3.3335 10.8166 3.3335 20C3.3335 29.1833 10.8168 36.6666 20.0002 36.6666C29.1835 36.6666 36.6668 29.1833 36.6668 20C36.6668 10.8166 29.1835 3.33331 20.0002 3.33331ZM25.6002 23.8333C26.0835 24.3166 26.0835 25.1166 25.6002 25.6C25.3502 25.85 25.0335 25.9666 24.7168 25.9666C24.4002 25.9666 24.0835 25.85 23.8335 25.6L20.0002 21.7666L16.1668 25.6C15.9168 25.85 15.6002 25.9666 15.2835 25.9666C14.9668 25.9666 14.6502 25.85 14.4002 25.6C13.9168 25.1166 13.9168 24.3166 14.4002 23.8333L18.2335 20L14.4002 16.1666C13.9168 15.6833 13.9168 14.8833 14.4002 14.4C14.8835 13.9166 15.6835 13.9166 16.1668 14.4L20.0002 18.2333L23.8335 14.4C24.3168 13.9166 25.1168 13.9166 25.6002 14.4C26.0835 14.8833 26.0835 15.6833 25.6002 16.1666L21.7668 20L25.6002 23.8333Z"
        fill="black"
      />
    </svg>
  ),
};
