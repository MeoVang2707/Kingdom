export default function ContainerBoder({
  children,
  className,
  ...props
}: React.HTMLProps<HTMLDivElement>) {
  return (
    <div
      className={`border border-primary-100 rounded-lg ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
