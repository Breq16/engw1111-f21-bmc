export function Indent(props: { children: React.ReactNode }) {
  return <div className="ml-12">{props.children}</div>
}

export function Half(props: {
  children: React.ReactNode
  left?: boolean
  right?: boolean
  center?: boolean
}) {
  return (
    <p
      className={
        "w-2/3 " +
        (props.left
          ? "mr-auto"
          : props.right
          ? "ml-auto text-right"
          : "mx-auto text-center")
      }
    >
      {props.children}
    </p>
  )
}

export function Poem(props: { children: React.ReactNode; center?: boolean }) {
  return (
    <section
      className={
        "mx-auto max-w-3xl pl-16 text-lg font-body " +
        (props.center ? " mx-auto" : "")
      }
      style={{
        textIndent: "-64px",
        maxWidth: "min(max-content, 100%)",
      }}
    >
      {props.children}
    </section>
  )
}

export function Caption(props: { children: React.ReactNode }) {
  return <div>{props.children}</div>
}
