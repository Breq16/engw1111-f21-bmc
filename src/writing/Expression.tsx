import React from "react"

const SOURCE = `
language: <(uncountable) Manner of> expression.
spring<: (of mechanisms) To cause to work or> open by <sudden application of pressure. He sprang the trap.
book: A long work fit for publication, typically> prose, <such as a novel or textbook, and typically published as such a bound collection of sheets, but now sometimes electronically as an e-book. I have three copies of his first book.
surrender: (>transitive<)> To <give up into the power, control, or possession of another.
mountaintop: The summit of a mountain.>
spill<: (obsolete, intransitive) To be destroyed, ruined, or wasted; to come to ruin; to perish; to waste.
spring: (of liquids)> To gush, to flow <suddenly and violently. The boat sprang a leak and began to sink.
mindless: (of a thing done) Overly repetitive and unchallenging.
sink: (transitive) To cause> a vessel <to sink, generally by making it no longer watertight. An iceberg sank the Titanic.
sentences: plural> of sentence

<spring: (obsolete, of knowledge, usually with wide) To become known,> to spread<.
mind: The ability> to remember <things. My mind just went blank.
voice: An expressed> opinion, choice, will, desire, or wish; <the right or ability> to make such expression <or to have it considered
library: (programming)> A collection of <software routines that provide functionality to be incorporated into or used by a computer program. Coordinate term: framework
spill: (transitive, slang, obsolete) To cause to be thrown from a mount, a carriage, etc.>
moment<: (mathematic>s<) An> infinitesimal <change in a varying quantity; an increment or decrement>.
<garden: (in the plural) Such an> ornamental <place to which the public have access. You can spend the afternoon walking around the town> gardens<.
flag: (mathematics, linear algebra) A sequence> of <subspaces of a vector space, beginning with the null space and ending with the vector space itself, such that> each <member of the sequence (until the last) is a proper subspace of the next.
paper: (>uncountable<) Wrapping paper.
honor: (golf) the right to play> one<'s ball before one's opponent>.

<spring: (obsolete)> To rise <in social position or military rank>, <to be promoted.>
pencil<: (geometry) A family of geometric> objects <with a common property, such as the set of lines that pass through a given point in a projective plane. [from 19th c.]
spill: (na>u<tical) To relieve a sail from the pressure of the wind, so that it ca>n< be more easily reefed or >furled, <or to lessen the strain.
wave: (transitive) To cause to move back and forth repeatedly.> The start<er waved the flag to begin the race.
assignment>: <(law)> A transfer <of a right or benefit from one person to another. The assignment> of <the lease has not been finalised yet.>
writ<e: (transitive) To be the author of (a book, article, poem, etc.). My uncle writes newspaper articles for The Herald.
microphone: A device (transducer) used to convert sound waves into a vary>ing <electric current; normally fed into an amplifier and either recorded or broadcast.
eraser: (Canada, US) A thing used to erase or remove something written or drawn by a pen or a pencil. I have worn out the eraser on this pencil.
robust: (systems engineering)> Designed or evolved <in such a way as to be resistant to total failure despite partial damage.>
language<: (uncountable) Profanity.>

<search:> An attempt to <find something. With only five minutes until we were meant to leave, the search for the keys started in earnest.
book: A long work fit for publication, typically prose, such as a novel or textbook, and typically published as such a bound> collect<ion of sheets, but now sometimes electronically as an e-book. I have three copies of his first book.
sink: (transitive, snooker, pool, billiards, golf) To pot; hit a ball into a pocket or hole.>
everything<: (colloquial) The most> important <thing>. <I can't believe I made it in time - timing is everything!
spring: (intr>a<nsitive, usually with "to" or "up") To rise suddenly, (of tears) to well up. The> documentary <made tears spring to their eyes.
cure: A process> of preservation<, as by smoking>.
<poetry: A poet's> literary production.
slow<: Not happening in a short time;> spread over <a comparatively long> time.
<ability: (uncountable) A> unique power of the mind; <a faculty. [First> attested in <the late 16 th century.][1]
pencil: A> writing <utensil with a graphite (commonly referred to as lead) shaft, usually> blended <with clay, clad in wood, and sharpened to a taper. [from 16th c.]

story: A lie,> fiction<. Synonyms: see Thesaurus:lie You’ve been telling> stories a<gai>n<, haven’t you?
book: (sports) A >d<ocument, held by the referee, of the> incidents happened in <the game.
poetry: (figuratively) An> artistic quality <that appeals to or> evoke<s> the emotions<, in any medium; something having such a quality>. <That 'Swan Lake' choreography is poetry in> motion, fitting <the musical poetry of Tchaikovski's divine score well beyond the literary inspiration.>
voice<: (Internet, IRC) A flag associated with a user on a channel, determining whether or not they can send messages to the channel>.
<spring: (of plants)> To sprout<, to grow, During the rainy season, grass springs amid the sand> and <flowers> blossom <across the desert>.
medicine<: (slang) Recreational drugs, especially alcoholic drinks.
honor: (countable) a token> of <praise or respect; something that represents praiseworthiness or respect, such as a prize or award given by the state to a citizen Honors are normally awarded twice a year: on The Queen's Birthday in June and at the New Year. He wore an honor on his breast. military honors; civil honors Audie Murphy received many honors, such as the> Distinguished <Service Cross.
wave: (transitive, metonymically) To signal (someone or something) with a waving> movement<.
wave: (intransitive) To have an> undulating or <wavy form.
lush: (dialectal)> Mellow<; soft; (of ground or soil) easily turned; fertile>.

<book: (poker slang) four of a kind[2]
spring: (transitive, rare)> To equip <with springs, especially (of vehicles) to equip with a suspension.>
sentences<: plural of sentence
write: (computing, intransitive,> with <to) To record data mechanically or electronically. The computer writes to the disk faster than it reads from it.
sink: (transitive) To cause> a vessel <to sink, generally by making it no longer watertight. An iceberg sank the Titanic.
inundate: To cover with large amounts of water; to flood. The Dutch would sometimes inundate the land to hinder the Spanish army.
camouflage: The act> of <disguising.
surrender: (transitive, insurance) For a policyholder, to voluntarily terminate an insurance contract before the end of its term, usually with the expectation of receiving a surrender> value<.
lush: (of vegetation) Dense,> teeming with life; <luxuriant.
paper: (rock paper scissors) An open hand (a handshape resembling a sheet> of paper<), that beats rock and loses to scissors. It loses to lizard and beats Spock in rock-paper-scissors-lizard-Spock.>
`

function Blackout({ children }: { children: React.ReactNode }) {
  const [blackout, setBlackout] = React.useState(false)

  React.useEffect(() => {
    setTimeout(() => setBlackout(true), 1000)
  }, [])

  return (
    <span
      className={
        "transition-colors duration-[2s] " +
        (blackout ? "bg-black" : "bg-transparent")
      }
    >
      {children}
    </span>
  )
}

function parseBlackout(source: string) {
  const tokens = source.split(/[<>]/g)

  const result = tokens.map((token, idx) =>
    idx % 2 === 0 ? (
      <span key={idx}>{token}</span>
    ) : (
      <Blackout key={idx}>{token}</Blackout>
    )
  )

  return <>{result}</>
}

export default function Expression() {
  const [active, setActive] = React.useState(false)
  const [typed, setTyped] = React.useState(0)

  React.useEffect(() => {
    if (active) {
      const timer = setInterval(() => {
        if (typed == SOURCE.length) {
          setActive(false)
        } else {
          setTyped(typed + 1)
        }
      }, 1)
      return () => clearInterval(timer)
    }
  }, [typed, active])

  return (
    <article className="pt-64 pb-96 px-2 min-h-[150vh] bg-gray-200">
      <h2 className="text-center font-display text-5xl mb-8">
        language: expression
      </h2>
      <div className="flex justify-center">
        <button
          className="font-mono border-2 border-black p-2"
          onClick={() => {
            if (active) {
              setActive(false)
            } else {
              setTyped(0)
              setActive(true)
            }
          }}
        >
          {active ? "stop generation" : "start generation"}
        </button>
      </div>
      <div className="font-mono max-w-3xl mx-auto whitespace-pre-wrap">
        {parseBlackout(SOURCE.slice(0, typed))}
      </div>
    </article>
  )
}
