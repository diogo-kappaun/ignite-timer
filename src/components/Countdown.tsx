export function CountdownNumber({ children }: any) {
  return <span className="rounded-lg bg-gray-700 px-4 py-8">{children}</span>
}

export function CountdownSeparator() {
  return (
    <div className="flex w-16 justify-center overflow-hidden rounded-lg bg-gray-700 py-8 text-green-500">
      :
    </div>
  )
}
