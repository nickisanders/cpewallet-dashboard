export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="
      min-h-screen
      bg-gradient-to-r from-[#0479BE] to-[#00B8F1]
      flex items-center justify-center px-4
    ">
      {children}
    </div>
  )
}
