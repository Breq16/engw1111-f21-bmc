import React from "react"

export default function Reflection({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-blue-100 py-48 px-2">
      <div className="mx-auto max-w-xl font-body flex flex-col gap-4">
        {children}
      </div>
    </div>
  )
}
