import Header from "./Header";
interface MainLayoutProps {
  children?: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  );
}
