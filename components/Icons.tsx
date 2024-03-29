import { Icon } from "../interfaces";

const Icons = ({ name, className }: Icon) => {
  switch (name) {
    case "twitchlogo":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          viewBox="-39.687495 -22.00025 343.95829 132.0015"
        >
          <g strokeLinecap="square" strokeLinejoin="bevel">
            <path
              d="M259.9255 62.534h-18.5753V39.373h-4.6439v23.161h-18.5754V4.6438h18.5754v16.2024h13.9316l9.2876 9.2645v32.4234m-46.4152-23.1612h-18.5754v4.6438h18.5754v18.529H185.661l-9.2877-9.2645V30.1107l9.2877-9.2645h27.8492V39.373m-41.7738 0H155.483v4.6438h16.2534v18.529h-25.5272l-9.2877-9.2645V4.6438h18.5754v16.2024h16.2535l-.014 18.5267M132.2847 16.214h-18.5754V4.6438h18.5754V16.214m0 46.32h-18.5754V20.8463h18.5754v41.6879m-23.2192 0H53.3787l-9.2877-9.2645V20.8462h18.5754v23.159h4.6439v-23.159h18.5754v23.159h4.6438v-23.159h18.5754l-.0394 41.6879M39.454 39.3729H23.2192v4.6438h16.2535v18.529H13.9315l-9.2877-9.2645V4.6438h18.5754v16.2024h16.2535l-.0186 18.5267M252.9644 16.214h-11.6096V0H215.881l-11.7188 16.214h-20.8207l-6.9658 6.9472V16.214h-16.2534V0H109.077v16.214H37.2483L25.5412 0H0v55.5869l32.4907 32.414h32.4907v-9.2644l9.2877 9.2644h62.6571v-9.2644l9.2877 9.2644h30.1642v-9.2644l9.2877 9.2644h58.0202l20.8973-20.8462V27.7934L252.9644 16.214"
              fill="currentColor"
            />
            <path
              d="M218.1518 62.534h18.5661V39.373h4.6415v23.161h18.5661V30.1107l-9.283-9.2645h-13.9246V4.6346h-18.5661V62.534m-81.2256-9.2645l9.2808 9.2645h25.5295V44.005h-16.2442v-4.632h16.2442V20.8462h-16.2442V4.6346h-18.566v48.635m39.4518 0l9.283 9.2645h27.8492V44.005h-18.5661v-4.632h18.566V20.8462h-27.849l-9.2831 9.2645v23.1589m-62.6595-48.635h18.5661V16.214h-18.5661V4.6346M39.454 20.8462H23.2076V4.6346H4.6416v48.635l9.283 9.2645H39.454V44.005H23.2076v-4.632h16.2465V20.8462m4.6416 32.4234l9.2807 9.2645h55.7007V20.8462H90.511v23.159h-4.644v-23.159H67.3033v23.159h-4.6415v-23.159H44.0957v32.4234m69.6229-32.4234h18.5661v41.6879h-18.5661V20.8462"
              fill="#fff0"
            />
          </g>
        </svg>
      );
    case "comment":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className={className}
        >
          <path
            fill="currentColor"
            d="M256 31.1c-141.4 0-255.1 93.12-255.1 208c0 49.62 21.35 94.98 56.97 130.7c-12.5 50.37-54.27 95.27-54.77 95.77c-2.25 2.25-2.875 5.734-1.5 8.734c1.249 3 4.021 4.766 7.271 4.766c66.25 0 115.1-31.76 140.6-51.39c32.63 12.25 69.02 19.39 107.4 19.39c141.4 0 255.1-93.13 255.1-207.1S397.4 31.1 256 31.1zM127.1 271.1c-17.75 0-32-14.25-32-31.1s14.25-32 32-32s32 14.25 32 32S145.7 271.1 127.1 271.1zM256 271.1c-17.75 0-31.1-14.25-31.1-31.1s14.25-32 31.1-32s31.1 14.25 31.1 32S273.8 271.1 256 271.1zM383.1 271.1c-17.75 0-32-14.25-32-31.1s14.25-32 32-32s32 14.25 32 32S401.7 271.1 383.1 271.1z"
          />
        </svg>
      );
    case "twitch":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
          className={className}
          id="Layer_1"
          x="0px"
          y="0px"
          viewBox="0 0 2400 2800"
          xmlSpace="preserve"
        >
          <g>
            <polygon
              fill="#fff"
              points="2200,1300 1800,1700 1400,1700 1050,2050 1050,1700 600,1700 600,200 2200,200  "
            />
            <g>
              <g id="Layer_1-2">
                <path d="M500,0L0,500v1800h600v500l500-500h400l900-900V0H500z M2200,1300l-400,400h-400l-350,350v-350H600V200h1600V1300z" />
                <rect
                  xmlns="http://www.w3.org/2000/svg"
                  x="1700"
                  y="550"
                  width="200"
                  height="600"
                />
                <rect x="1150" y="550" width="200" height="600" />
              </g>
            </g>
          </g>
        </svg>
      );
    case "arrow-top":
      return (
        <svg
          className={className}
          fill="currentColor"
          version="1.1"
          id="lni_lni-chevron-up"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 64 64"
          xmlSpace="preserve"
        >
          <g>
            <path
              d="M61,46.8c-0.4,0-0.9-0.2-1.2-0.5L33,21.1c-0.5-0.5-1.4-0.5-2,0L4.2,46.3c-0.7,0.7-1.8,0.6-2.5-0.1
		c-0.7-0.7-0.6-1.8,0.1-2.5l26.8-25.2c1.9-1.7,4.9-1.7,6.7,0l26.8,25.2c0.7,0.7,0.7,1.8,0.1,2.5C61.9,46.6,61.5,46.8,61,46.8z"
            />
          </g>
        </svg>
      );
    case "twitter":
      return (
        <svg
          className={className}
          fill="currentColor"
          version="1.1"
          id="lni_lni-twitter-filled"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 64 64"
          xmlSpace="preserve"
        >
          <path
            d="M56.1,15.3l3.8-4.8c1.1-1.3,1.4-2.3,1.5-2.8c-3,1.8-5.8,2.4-7.6,2.4h-0.7l-0.4-0.4c-2.4-2.1-5.4-3.2-8.6-3.2
	c-7,0-12.5,5.8-12.5,12.5c0,0.4,0,1,0.1,1.4l0.3,2l-2.1-0.1C17.1,21.9,6.6,10.9,4.9,9C2.1,14,3.7,18.8,5.4,21.8l3.4,5.6l-5.4-3
	c0.1,4.2,1.7,7.5,4.8,9.9l2.7,2l-2.7,1.1c1.7,5.1,5.5,7.2,8.3,8l3.7,1l-3.5,2.4C11.1,52.8,4.1,52.5,1,52.2c6.3,4.4,13.8,5.4,19,5.4
	c3.9,0,6.8-0.4,7.5-0.7c28-6.6,29.3-31.6,29.3-36.6v-0.7l0.6-0.4c3.4-3.2,4.8-4.9,5.6-5.9c-0.3,0.1-0.7,0.3-1.1,0.4L56.1,15.3z"
          />
        </svg>
      );
    case "discord":
      return (
        <svg
          className={className}
          fill="currentColor"
          version="1.1"
          id="lni_lni-discord"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 64 64"
          xmlSpace="preserve"
        >
          <g>
            <path d="M26.4,27.1c-1.8,0-3.1,1.6-3.1,3.4s1.4,3.4,3.1,3.4c1.8,0,3.1-1.5,3.1-3.4C29.6,28.6,28.2,27.1,26.4,27.1z" />
            <ellipse cx="37.6" cy="30.4" rx="3.1" ry="3.4" />
            <path
              d="M52.7,1H11.3C7.8,1,4.9,3.8,4.9,7.3v41.9c0,3.5,2.8,6.3,6.3,6.3h35.1l-1.7-5.6l3.9,3.7l3.8,3.5l6.6,5.9V7.3
		C59.2,3.8,56.2,1,52.7,1z M40.7,41.4c0,0-1.1-1.3-2.1-2.5c4.1-1.1,5.6-3.7,5.6-3.7c-1.3,0.8-2.5,1.4-3.5,1.8
		c-1.5,0.7-3.1,1.1-4.5,1.3c-3,0.6-5.6,0.4-8,0c-1.8-0.3-3.2-0.8-4.5-1.3c-0.7-0.3-1.6-0.6-2.3-1c-0.1,0-0.1-0.1-0.3-0.1
		c0,0-0.1,0-0.1-0.1c-0.6-0.3-0.8-0.6-0.8-0.6s1.6,2.5,5.5,3.7c-1,1.1-2.1,2.5-2.1,2.5c-6.9-0.3-9.4-4.6-9.4-4.6c0-10,4.5-18,4.5-18
		c4.5-3.4,8.7-3.2,8.7-3.2l0.3,0.4C22,17.5,19.5,20,19.5,20s0.7-0.4,1.8-0.8c3.4-1.4,5.9-1.8,7-2c0.1,0,0.3,0,0.6,0
		c1.8-0.3,4.1-0.3,6.2,0c3,0.3,6.1,1.3,9.3,3c0,0-2.4-2.3-7.8-3.9l0.4-0.6c0,0,4.2-0.1,8.7,3.2c0,0,4.5,8,4.5,18
		C50.3,36.8,47.6,41.3,40.7,41.4z"
            />
          </g>
        </svg>
      );
    case "instagram":
      return (
        <svg
          className={className}
          fill="currentColor"
          version="1.1"
          id="lni_lni-instagram-filled"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 64 64"
          xmlSpace="preserve"
        >
          <g>
            <ellipse cx="32.1" cy="32" rx="11.6" ry="11.6" />
            <path
              fill="currentColor"
              d="M44.7,1H19.3C9.2,1,1,9.2,1,19.3v25.2C1,54.8,9.2,63,19.3,63h25.2C54.8,63,63,54.8,63,44.7V19.3C63,9.2,54.8,1,44.7,1z
		 M32.1,47.2c-8.5,0-15.2-6.9-15.2-15.2s6.8-15.2,15.2-15.2c8.3,0,15.1,6.9,15.1,15.2S40.5,47.2,32.1,47.2z M53.1,18.2
		c-1,1.1-2.5,1.7-4.2,1.7c-1.5,0-3-0.6-4.2-1.7C43.6,17.1,43,15.7,43,14s0.6-3,1.7-4.2C45.8,8.6,47.2,8,48.9,8
		c1.5,0,3.1,0.6,4.2,1.7c1,1.3,1.7,2.8,1.7,4.4C54.7,15.7,54.1,17.1,53.1,18.2z"
            />
            <path
              fill="currentColor"
              d="M49,11.6c-1.3,0-2.4,1.1-2.4,2.4s1.1,2.4,2.4,2.4c1.3,0,2.4-1.1,2.4-2.4S50.4,11.6,49,11.6z"
            />
          </g>
        </svg>
      );
    case "games":
      return (
        <svg
          fill="CurrentColor"
          className={className}
          version="1.1"
          id="lni_lni-game"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 64 64"
          xmlSpace="preserve"
        >
          <g>
            <path d="M42.5,34.6c-1.5,0-2.6,1.2-2.6,2.6c0,1.5,1.2,2.6,2.6,2.6c1.5,0,2.6-1.2,2.6-2.6C45.2,35.8,44,34.6,42.5,34.6z" />
            <path
              d="M60,25.3c-1.9-1.9-4.5-3-7.1-3H33.7V5.6c0-1-0.8-1.8-1.8-1.8s-1.8,0.8-1.8,1.8v16.7h-19c-5.5,0-10,4.4-10,9.9v18
		c0,5.4,4.5,9.9,10,9.9c5.1,0,9.4-3.8,9.9-8.7h21.7c0.5,4.9,4.8,8.8,9.9,8.8c5.5,0,9.9-4.4,9.9-9.9V32.2
		C62.8,29.6,61.8,27.2,60,25.3z M59.2,50.3c0,3.5-2.9,6.4-6.4,6.4c-3.6,0-6.5-2.9-6.5-6.4c0-1.4-1.1-2.4-2.5-2.4H20.2
		c-1.4,0-2.5,1.1-2.5,2.4c0,3.5-2.9,6.3-6.5,6.3s-6.5-2.9-6.5-6.4v-18c0-3.5,2.9-6.4,6.5-6.4h41.6c1.7,0,3.4,0.7,4.6,2
		c1.2,1.2,1.8,2.8,1.8,4.4V50.3z"
            />
            <path
              d="M20.7,35.5h-2.8v-2.8c0-1-0.8-1.8-1.8-1.8s-1.8,0.8-1.8,1.8v2.8h-2.8c-1,0-1.8,0.8-1.8,1.8s0.8,1.8,1.8,1.8h2.8v2.8
		c0,1,0.8,1.8,1.8,1.8s1.8-0.8,1.8-1.8V39h2.8c1,0,1.8-0.8,1.8-1.8S21.7,35.5,20.7,35.5z"
            />
            <path d="M53.1,34.6c-1.5,0-2.6,1.2-2.6,2.6c0,1.5,1.2,2.6,2.6,2.6c1.5,0,2.6-1.2,2.6-2.6C55.7,35.8,54.6,34.6,53.1,34.6z" />
            <path d="M47.8,34.6c1.5,0,2.6-1.2,2.6-2.6c0-1.5-1.2-2.6-2.6-2.6c-1.5,0-2.6,1.2-2.6,2.6C45.2,33.5,46.4,34.6,47.8,34.6z" />
            <path d="M47.8,39.9c-1.5,0-2.6,1.2-2.6,2.6s1.2,2.6,2.6,2.6c1.5,0,2.6-1.2,2.6-2.6S49.3,39.9,47.8,39.9z" />
          </g>
        </svg>
      );
    default:
      return null;
  }
};
export default Icons;
