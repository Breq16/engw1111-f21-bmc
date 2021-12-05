import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

function Q_sqrt() {
  return (
    <span className="font-mono bg-black text-green-300 -m-1 p-1 rounded-lg">
      Q_sqrt
    </span>
  )
}

function Pg({ children }: { children: React.ReactNode }) {
  return <p className="max-w-xl mx-auto my-8 text-lg">{children}</p>
}

function Line() {
  return <hr className="max-w-xs mx-auto my-8" />
}

function Callout({ children }: { children: React.ReactNode }) {
  return <p className="max-w-xl mx-auto my-8 text-lg font-bold">{children}</p>
}

function Expand({ onExpand }: { onExpand: () => void }) {
  const [fading, setFading] = React.useState(false)

  const handleClick = () => {
    if (fading) {
      return
    }

    setFading(true)

    setTimeout(() => {
      onExpand()
    }, 2000)
  }

  return (
    <div className="flex justify-center h-0 -mb-8">
      <button
        className={
          "text-2xl transition-opacity duration-1000 " +
          (fading ? "opacity-0" : "opacity-100")
        }
        onClick={handleClick}
      >
        <FontAwesomeIcon icon={faChevronDown} />
      </button>
    </div>
  )
}

function Expression({ expanded }: { expanded: boolean }) {
  return (
    <div
      className={
        "transition-opacity duration-1000 " +
        (expanded ? "opacity-100" : "opacity-0 pointer-events-none")
      }
    >
      <Callout>Because creativity demands expression.</Callout>
      <Pg>
        At the time, I didn’t see the creativity in my writeup. It was just
        technical writing; a purely pragmatic description of the steps which the
        computer takes to find the solution, like a brick wall of theorems and
        equations, one brick laid on top of the other.
      </Pg>
      <Pg>
        Looking back, I can see my creativity in that wall. It is the mortar,
        filling in the gaps between the bricks. It is the order I chose to
        present things, the tone I chose to take on, the questions I chose to
        ask and answer, and the tangents I chose to go down to build a deeper
        intuition through the trickiest parts of the proof. And without it, the
        wall would collapse the moment someone leaned on it.
      </Pg>
    </div>
  )
}

function Writer({ expanded }: { expanded: boolean }) {
  const [subExpanded, setSubExpanded] = React.useState(false)

  return (
    <div
      className={
        "transition-opacity duration-1000 " +
        (expanded ? "opacity-100" : "opacity-0 pointer-events-none")
      }
    >
      <Callout>Because I’m a writer.</Callout>
      <Pg>
        For the longest time, I viewed writing as a means to an end. I viewed it
        as a way to get a grade, or to tell someone something, or to archive my
        thoughts for later retrieval. But what was the “end” here? I already
        understood that algorithm--there was no need for me to write an entirely
        new explanation of it. Nobody else was going to read it--who the heck
        would care about this bizarre and largely irrelevant snippet of history?
        Why was I so compelled to typeset each equation perfectly?
      </Pg>
      {subExpanded || <Expand onExpand={() => setSubExpanded(true)} />}
      <Expression expanded={subExpanded} />
    </div>
  )
}

export default function Artist() {
  const [expanded, setExpanded] = React.useState(false)

  return (
    <article className="bg-gray-700 text-green-200 py-60 font-body">
      <h2 className="text-center text-6xl font-display">artist</h2>
      <p className="max-w-xl mx-auto my-8 italic text-gray-200">
        The following is a response to professional video editor Taran Van
        Hemert’s video essay titled “I can't show you the most important video
        I've ever made,” which can be found{" "}
        <a
          className="underline"
          href="https://www.youtube.com/watch?v=m1xd2ImauKM"
        >
          here
        </a>
        .
      </p>
      <Pg>
        Earlier this year, while bored sitting at home, I decided to try writing
        a short explanation of the <Q_sqrt /> algorithm. For those unfamiliar
        with the intricacies of 90s-era computer graphics, <Q_sqrt />, also
        known as the <span className="italic">“Fast Inverse Square Root”</span>{" "}
        algorithm, is a method of quickly generating an approximation of the
        reciprocal of the square root of a number.
      </Pg>
      <Pg>
        <Q_sqrt /> is somehow both beautiful and ugly. It’s only 11 lines long,
        yet those lines are the most perplexing I’ve ever laid eyes on. It
        applies techniques from the field of logarithms and from calculus, yet
        it does so in a way that exploits the undefined behavior of the
        processor it runs on. A comment in the original source put it best. It
        simply states, <span className="italic">“what the fuck?”</span>
      </Pg>
      <Pg>
        Eventually, my explanation reached the end of the function. I looked up
        at the clock. It was 3 in the morning. I had been writing this one post
        for twelve hours straight. I had just written a 2,249 word post about 11
        lines of code in a video game nobody’s cared about in decades.
      </Pg>
      <Line />
      <Pg>
        I stared at the ceiling in my room. Why in the world did I feel so
        compelled to write this? Why did I willingly spend an entire day bashing
        my head against the wall trying to understand this, just to write up an
        explanation for this long-forgotten piece of code, fully knowing that
        nobody would read it but myself?
      </Pg>
      {expanded || <Expand onExpand={() => setExpanded(true)} />}
      <Writer expanded={expanded} />
    </article>
  )
}
