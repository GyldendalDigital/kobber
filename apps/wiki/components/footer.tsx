import Image from "next/image"

export default function Footer() {
  return (
    <div className="mt-auto min-h-[206px] w-full">
      <div className="mx-auto flex w-full flex-col items-center gap-[16px] pb-[60px] pt-[72px] md:flex-row md:justify-between md:pt-[108px]">
        <Image alt="Gyldendal Logo" width={131} height={38} src={"/logo.svg"} />
        <span className="text-center text-[12px] text-[#A35E70]">
          © {new Date().getFullYear()} Gyldendal
        </span>
      </div>
    </div>
  )
}
