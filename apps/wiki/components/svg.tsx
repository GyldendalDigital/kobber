type SVGProps = {
	width?: number
	height?: number
	className?: string
	onClick?: () => void
	fill?: string
}

export const LogoSVG = (props: SVGProps) => {
	return (
		<svg width="111" height="32" viewBox="0 0 111 32" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g clipPath="url(#clip0_107_551)">
				<path
					d="M36.1365 25.6276C35.0078 25.6276 34.0001 25.3594 33.1133 24.8259C32.2291 24.2924 31.5385 23.5341 31.044 22.5565C30.5495 21.5761 30.3023 20.4414 30.3023 19.1496C30.3023 17.8577 30.5522 16.8151 31.0521 15.8401C31.5519 14.8652 32.2694 14.1069 33.1992 13.5598C34.1317 13.0128 35.2201 12.742 36.467 12.742C38.0741 12.742 39.3962 13.1888 40.4308 14.0798C41.4681 14.9708 42.1185 16.203 42.3872 17.7765H40.0976C39.9122 16.8503 39.4956 16.1164 38.848 15.5775C38.2004 15.0385 37.4076 14.7677 36.4643 14.7677C35.685 14.7677 34.9998 14.9464 34.4112 15.3039C33.8227 15.6614 33.3712 16.1733 33.0568 16.8368C32.7424 17.5003 32.5838 18.2721 32.5838 19.1523C32.5838 20.0324 32.7397 20.8422 33.0568 21.5111C33.3712 22.18 33.8173 22.6973 34.3924 23.0602C34.9702 23.4231 35.6366 23.6072 36.3918 23.6072C36.9964 23.6072 37.5285 23.4827 37.9827 23.2362C38.4368 22.9898 38.7889 22.6512 39.0388 22.2234C39.2887 21.7955 39.415 21.3053 39.415 20.7528H35.8355V18.8679H39.974C40.7883 18.8679 41.4117 19.0683 41.8444 19.4664C42.2743 19.8645 42.4893 20.4576 42.4893 21.2457V25.3459H40.5518V21.6682H40.5007C40.4201 22.4779 40.1917 23.1793 39.8181 23.7724C39.4446 24.3655 38.9447 24.8232 38.3159 25.1455C37.6871 25.4678 36.9588 25.6303 36.1338 25.6303L36.1365 25.6276Z"
					fill="#532D37"
				/>
				<path
					d="M43.7846 28.8665V27.0006H45.4965C45.87 27.0006 46.1602 26.9356 46.3698 26.8056C46.5795 26.6756 46.7353 26.4887 46.8401 26.2423L47.1707 25.3432H46.7702L43.1021 16.0135H45.4615L48.0467 22.9302L50.597 16.0135H52.8678L48.8691 26.876C48.6944 27.3229 48.4633 27.6912 48.1784 27.9837C47.8936 28.2762 47.5281 28.4982 47.0874 28.6445C46.6439 28.7907 46.1145 28.8638 45.4965 28.8638H43.7846V28.8665Z"
					fill="#532D37"
				/>
				<path d="M53.7761 25.3459V12.1435H55.977V25.3459H53.7761Z" fill="#532D37" />
				<path
					d="M61.5317 25.6276C60.704 25.6276 59.9623 25.4136 59.3039 24.9857C58.6455 24.5578 58.1323 23.9674 57.7668 23.2173C57.4013 22.4671 57.2159 21.6032 57.2159 20.6309C57.2159 19.6587 57.3986 18.8327 57.7668 18.088C58.1349 17.3432 58.6375 16.7609 59.2771 16.3439C59.9166 15.9268 60.6449 15.7183 61.4592 15.7183C62.088 15.7183 62.6604 15.8429 63.1791 16.0893C63.6977 16.3358 64.1196 16.6824 64.4448 17.1265V12.1462H66.6269V25.3486H64.8613L64.6866 23.7454C64.4072 24.3195 63.9933 24.7772 63.4478 25.1184C62.8996 25.4597 62.26 25.6276 61.5264 25.6276H61.5317ZM61.9348 23.7779C62.4239 23.7779 62.8566 23.6425 63.2355 23.3716C63.6144 23.1008 63.91 22.7298 64.125 22.2532C64.34 21.7765 64.4475 21.2295 64.4475 20.6066C64.4475 20.0189 64.3427 19.4962 64.1331 19.0304C63.9234 18.5673 63.6332 18.2071 63.2597 17.9471C62.8861 17.6898 62.4615 17.5599 61.9832 17.5599C61.4834 17.5599 61.0426 17.6926 60.6637 17.9553C60.2848 18.2179 59.9892 18.5836 59.7742 19.0467C59.5592 19.5098 59.4517 20.0406 59.4517 20.6391C59.4517 21.2376 59.5592 21.7928 59.7742 22.2667C59.9892 22.7406 60.2794 23.1116 60.6476 23.3771C61.0158 23.6397 61.443 23.7724 61.9321 23.7724L61.9348 23.7779Z"
					fill="#532D37"
				/>
				<path
					d="M72.6949 25.6086C71.7624 25.6086 70.9293 25.4001 70.1983 24.983C69.4647 24.5659 68.8977 23.9864 68.4946 23.2389C68.0915 22.4942 67.8926 21.6519 67.8926 20.7122C67.8926 19.7156 68.0942 18.8381 68.4946 18.0798C68.895 17.3215 69.4486 16.7393 70.1526 16.3276C70.8567 15.916 71.6468 15.7101 72.5202 15.7101C73.3936 15.7101 74.1621 15.9106 74.8259 16.3087C75.4897 16.7068 76.011 17.2782 76.3899 18.0175C76.7688 18.7569 76.9623 19.6262 76.9758 20.6228V21.1509H70.0586C70.1392 21.9363 70.4187 22.57 70.897 23.0521C71.3754 23.5341 71.98 23.7751 72.7137 23.7751C73.2377 23.7751 73.6838 23.6506 74.0493 23.4041C74.4174 23.1577 74.6754 22.8164 74.8259 22.3831H76.9408C76.707 23.3933 76.2153 24.1814 75.4655 24.7501C74.713 25.3188 73.7913 25.6032 72.6975 25.6032L72.6949 25.6086ZM74.7372 19.6424C74.6082 18.9979 74.3503 18.4942 73.9606 18.1367C73.5709 17.7792 73.0899 17.6005 72.5202 17.6005C71.9505 17.6005 71.456 17.7792 71.0368 18.1367C70.6176 18.4942 70.3273 18.9952 70.1634 19.6424H74.7399H74.7372Z"
					fill="#532D37"
				/>
				<path
					d="M78.1958 25.3459V16.0162H79.9587L80.1683 17.3892C80.4371 16.8855 80.8509 16.4793 81.4099 16.1733C81.9688 15.8672 82.5869 15.7156 83.2614 15.7156C84.2504 15.7156 85.0431 16.0297 85.637 16.658C86.2309 17.2863 86.5292 18.1286 86.5292 19.1848V25.3459H84.3283V19.2904C84.3283 18.7867 84.1751 18.3859 83.8661 18.0934C83.557 17.8009 83.1298 17.6546 82.5815 17.6546C82.1623 17.6546 81.7888 17.744 81.4636 17.92C81.1385 18.0961 80.8778 18.3425 80.687 18.6594C80.4962 18.9762 80.3994 19.3229 80.3994 19.6966V25.3486H78.1985L78.1958 25.3459Z"
					fill="#532D37"
				/>
				<path
					d="M91.9442 25.6276C91.1165 25.6276 90.3748 25.4136 89.7164 24.9857C89.058 24.5578 88.5447 23.9674 88.1792 23.2173C87.8138 22.4671 87.6283 21.6032 87.6283 20.6309C87.6283 19.6587 87.8111 18.8327 88.1792 18.088C88.5474 17.3432 89.0499 16.7609 89.6895 16.3439C90.3291 15.9268 91.0574 15.7183 91.8716 15.7183C92.5005 15.7183 93.0728 15.8429 93.5915 16.0893C94.1102 16.3358 94.5321 16.6824 94.8572 17.1265V12.1462H97.0393V25.3486H95.2738L95.0991 23.7454C94.8196 24.3195 94.4058 24.7772 93.8602 25.1184C93.312 25.4597 92.6724 25.6276 91.9388 25.6276H91.9442ZM92.3446 23.7779C92.8337 23.7779 93.2663 23.6425 93.6453 23.3716C94.0242 23.1008 94.3198 22.7298 94.5348 22.2532C94.7497 21.7765 94.8572 21.2295 94.8572 20.6066C94.8572 20.0189 94.7524 19.4962 94.5428 19.0304C94.3332 18.5673 94.043 18.2071 93.6694 17.9471C93.2959 17.6898 92.8713 17.5599 92.393 17.5599C91.8931 17.5599 91.4524 17.6926 91.0735 17.9553C90.6946 18.2179 90.399 18.5836 90.184 19.0467C89.969 19.5098 89.8615 20.0406 89.8615 20.6391C89.8615 21.2376 89.969 21.7928 90.184 22.2667C90.399 22.7406 90.6892 23.1116 91.0574 23.3771C91.4255 23.6397 91.8528 23.7724 92.3419 23.7724L92.3446 23.7779Z"
					fill="#532D37"
				/>
				<path
					d="M101.866 25.5382C100.794 25.5382 99.9363 25.2944 99.2886 24.807C98.6437 24.3195 98.3239 23.6424 98.3373 22.7731C98.3481 22.0934 98.5442 21.5517 98.9232 21.1536C99.3021 20.7555 99.775 20.4657 100.347 20.2897C100.917 20.1137 101.576 19.9837 102.323 19.9024C102.403 19.8781 102.492 19.8645 102.583 19.8591C102.677 19.8537 102.763 19.8456 102.844 19.832C103.298 19.786 103.647 19.7318 103.892 19.6749C104.137 19.6181 104.335 19.5287 104.486 19.4095C104.636 19.2931 104.712 19.1333 104.712 18.9356C104.712 18.654 104.642 18.4048 104.502 18.1881C104.362 17.9715 104.153 17.8063 103.873 17.6953C103.594 17.5842 103.274 17.5273 102.914 17.5273C102.32 17.5273 101.828 17.6736 101.438 17.9661C101.049 18.2586 100.818 18.6404 100.748 19.1116H98.5469C98.6061 18.4671 98.8318 17.8848 99.2268 17.3676C99.6219 16.8503 100.141 16.4468 100.783 16.1516C101.422 15.8591 102.14 15.7129 102.933 15.7129C103.771 15.7129 104.481 15.8564 105.064 16.1435C105.647 16.4305 106.09 16.8286 106.399 17.3324C106.708 17.8361 106.862 18.4238 106.862 19.0927V23.247C106.862 23.377 106.896 23.4718 106.966 23.5368C107.036 23.6018 107.146 23.6343 107.297 23.6343H107.802V25.3405H106.789C106.324 25.3405 105.945 25.2511 105.655 25.0778C105.365 24.9018 105.166 24.6445 105.061 24.3032C105.05 24.2572 105.034 24.203 105.018 24.1462C105.002 24.0866 104.986 24.0351 104.975 23.9891C104.706 24.4928 104.314 24.8774 103.795 25.1428C103.277 25.4055 102.634 25.5382 101.866 25.5382ZM102.32 23.8483C103.019 23.8483 103.591 23.6722 104.04 23.3202C104.489 22.9681 104.712 22.4996 104.712 21.9119V20.5741C104.572 20.8097 104.338 20.9803 104.013 21.0832C103.688 21.1888 103.239 21.2836 102.669 21.3649H102.564C102.1 21.4244 101.729 21.4921 101.455 21.568C101.181 21.6438 100.96 21.7657 100.791 21.9282C100.622 22.0934 100.538 22.3208 100.538 22.616C100.538 23.0141 100.689 23.3202 100.992 23.5314C101.296 23.7426 101.737 23.8483 102.32 23.8483Z"
					fill="#532D37"
				/>
				<path d="M108.799 25.3459V12.1435H111V25.3459H108.799Z" fill="#532D37" />
				<path
					d="M3.19792 25.7711C2.55833 25.6628 2.02624 25.5571 1.49415 25.3405C1.06687 25.1265 0.642269 24.9099 0.214984 24.6959C0.00268555 24.5876 0.00268555 24.482 0.00268555 24.482C0.00268555 24.3737 0.00268555 24.268 0.110179 24.268H0.107491C1.91875 23.8374 3.51771 23.1929 5.11667 22.3344C6.60813 21.4759 7.99479 20.5091 9.27127 19.22C7.35252 19.3283 5.43646 18.6837 3.94231 17.6086L3.83481 17.5003C3.83481 17.3919 3.83481 17.2863 3.94231 17.2863C5.54126 16.8557 7.03273 16.2112 8.3119 15.1387C9.48357 14.1719 10.4429 12.9911 11.19 11.702C10.4429 11.702 9.69856 11.5937 9.05897 11.3798C8.63169 11.1658 8.20709 10.9492 7.77981 10.7352C7.77981 10.7352 7.67231 10.7352 7.67231 10.6269C7.56482 10.5185 7.67231 10.4129 7.77981 10.3046C9.16378 9.55172 10.3381 8.69323 11.19 7.62078C12.4692 5.79546 13.0013 2.46709 13.2136 0.319498C13.2136 0.21117 13.3211 -0.0027771 13.4259 -0.0027771C13.5307 -0.0027771 13.7457 0.105551 13.7457 0.21117V0.319498C13.958 2.46709 14.3853 5.79546 15.7692 7.62078C16.6211 8.69594 17.7928 9.66005 19.0719 10.199C19.1794 10.199 19.2842 10.4129 19.1794 10.5213C19.1794 10.5213 19.1794 10.6296 19.0719 10.6296C18.6447 10.9519 18.3249 11.1658 17.9003 11.2741C17.2607 11.4881 16.5163 11.7047 15.7692 11.5964C16.4088 12.6716 17.2607 13.5301 18.3276 14.2802C19.3944 15.0331 20.6709 15.5693 21.9501 15.7833C22.0576 15.7833 22.1624 15.8916 22.1624 15.9972C22.1624 15.9972 22.1624 16.1055 22.0549 16.1055L21.9474 16.2139C21.3078 16.6445 20.6682 17.0724 19.9238 17.289C18.9645 17.6113 17.9003 17.8253 16.9409 17.7196C18.0078 18.6865 19.2842 19.4366 20.6709 20.0812C22.0549 20.7257 23.4415 21.1563 24.933 21.3703C25.0405 21.3703 25.1453 21.4786 25.0405 21.5842C25.0405 21.5842 25.0405 21.6925 24.933 21.6925L24.8255 21.8009C23.9736 22.4454 23.0143 22.9816 22.0549 23.3039C20.8832 23.7345 19.4965 23.9485 18.2201 23.8401L23.0143 25.8794C23.1218 25.8794 23.2266 26.0934 23.1218 26.2017C23.1218 26.31 23.0143 26.31 23.0143 26.31C22.802 26.4183 22.4822 26.524 22.2672 26.6323C21.9474 26.7406 21.7351 26.8462 21.4153 26.9546L22.0549 27.5991C23.0143 28.5659 23.9736 29.5328 25.0378 30.3913C25.1453 30.4996 25.1453 30.6052 25.0378 30.7135L24.9303 30.8219C23.5463 30.9302 22.2672 30.8219 20.8805 30.4996C19.7088 30.2856 18.5372 29.855 17.4703 29.3188C17.5778 29.7494 17.7901 30.0717 17.8976 30.4996C18.1099 30.8219 18.3249 31.2525 18.5372 31.5747C18.6447 31.6831 18.5372 31.7887 18.4297 31.897C18.4297 31.897 18.3222 32.0053 18.2174 32.0053C16.7259 31.5747 15.2344 30.9302 13.8478 29.9661C12.4638 29.1076 11.2895 28.0324 10.2253 26.7433C10.2253 27.1739 10.3328 27.4962 10.4376 27.9241C10.5451 28.3547 10.6499 28.7826 10.8649 29.2132C9.69318 29.8578 8.30652 30.394 7.03004 30.6079C5.43108 31.0385 4.15192 31.1441 2.76794 31.0385C2.69628 31.0385 2.66045 31.0024 2.66045 30.9302C2.55296 30.8219 2.55296 30.7162 2.66045 30.6079C3.72732 29.7494 4.68401 28.7826 5.64338 27.8158C6.49527 26.8489 7.24234 25.9905 7.88193 25.132V25.0236C7.24234 25.4542 6.49795 25.8821 5.75088 26.0988C4.7915 26.5294 3.83212 26.8517 2.87275 26.9573H2.66045C2.55296 26.8489 2.55296 26.7433 2.55296 26.635L3.19254 25.7765L3.19792 25.7711Z"
					fill="#E50243"
				/>
			</g>
			<defs>
				<clipPath id="clip0_107_551">
					<rect width="111" height="32" fill="white" />
				</clipPath>
			</defs>
		</svg>
	)
}
