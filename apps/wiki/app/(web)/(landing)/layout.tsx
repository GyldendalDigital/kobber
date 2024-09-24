import Footer from "@/components/footer";

type HomeLayoutProps = {
  children: React.ReactNode;
};

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <div className="space-y-20">
      {children}
      <Footer />
    </div>
  );
}
