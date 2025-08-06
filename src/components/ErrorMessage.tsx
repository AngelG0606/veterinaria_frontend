

export default function ErrorMessage({children} : {children : React.ReactNode} ) {
  return (
    <div className="bg-red-100 text-red-600 py-2 w-full px-5 mt-1 uppercase text-center text-sm font-semibold  border-l-4 border-l-red-600">{children}</div>
  )
}
