import React from "react"

const BlackoutContext = React.createContext<{
  blackout: boolean
  clickBlackout: boolean
  mouseBlackout: boolean
  setClickBlackout: (state: boolean) => void
  setMouseBlackout: (state: boolean) => void
}>({
  blackout: false,
  clickBlackout: false,
  mouseBlackout: false,
  setClickBlackout: () => {},
  setMouseBlackout: () => {},
})

function Indent(props: { children: React.ReactNode }) {
  return <div className="ml-12">{props.children}</div>
}

function Poem(props: { children: React.ReactNode; center?: boolean }) {
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

function DM({ children, date }: { children: React.ReactNode; date: string }) {
  return (
    <aside className="max-w-xl border-2 border-black font-mono mx-auto my-8 p-4">
      <p className="text-lg flex flex-col gap-4">[breq]: {children}</p>
      <p className="mt-4 text-center italic">{date}</p>
    </aside>
  )
}

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-3xl font-display text-center mt-16 mb-8">{children}</h3>
  )
}

function Bl({ children }: { children: React.ReactNode }) {
  const { blackout, clickBlackout, setClickBlackout, setMouseBlackout } =
    React.useContext(BlackoutContext)

  return (
    <span
      className={
        "p-1 -my-1 transition-colors duration-1000 " +
        (blackout ? "text-white bg-black" : "text-red-500 bg-black")
      }
      onMouseEnter={() => setMouseBlackout(true)}
      onMouseLeave={() => setMouseBlackout(false)}
      onClick={() => setClickBlackout(!clickBlackout)}
    >
      {children}
    </span>
  )
}

export default function Chemicals() {
  const [clickBlackout, setClickBlackout] = React.useState(false)
  const [mouseBlackout, setMouseBlackout] = React.useState(false)
  const blackout = clickBlackout || mouseBlackout

  return (
    <BlackoutContext.Provider
      value={{
        blackout,
        clickBlackout,
        mouseBlackout,
        setClickBlackout,
        setMouseBlackout,
      }}
    >
      <article
        className={
          "pt-64 pb-96 px-4 transition-colors duration-1000 " +
          (blackout ? "bg-black" : "bg-red-500")
        }
      >
        <h2 className="font-display text-5xl text-center">
          the problem that needs fixing is with the chemicals in my brain
        </h2>
        <Heading>i. selective serotonin reuptake inhibitor</Heading>
        <Poem center>
          <p>
            “It's a <Bl>chemical</Bl> imbalance.”
          </p>
          <p>
            “I'm going to increase your <Bl>dose</Bl> to 100mg.”
          </p>
          <p>
            “I want to run some blood work first, just to narrow down the{" "}
            <Bl>issue</Bl>.”
          </p>
          <p>“This may have some side effects.”</p>
          <p>
            “It's a chemical <Bl>imbalance</Bl>.”
          </p>
          <p>
            “We can consider switching to a different <Bl>medication</Bl> if
            this causes issues.”
          </p>
          <p>
            “Meet with me in two weeks to discuss any adverse <Bl>effects</Bl>.”
          </p>
          <p>
            “This type of medication will block the <Bl>reuptake</Bl> of
            serotonin in the brain.”
          </p>
          <p>
            “Your depression is caused by a lack of <Bl>serotonin</Bl>.”
          </p>
          <p>
            “It's a chemical <Bl>imbalance</Bl>.”
          </p>
          <p>
            “If you take these pills, your serotonin <Bl>levels</Bl> will rise.”
          </p>
          <p>
            “They will become <Bl>normal</Bl>.”
          </p>
          <p>“It's a chemical imbalance.”</p>
          <p>
            “It's a <Bl>chemical</Bl> <Bl>imbalance</Bl>.”
          </p>
        </Poem>
        <Heading>ii. bird’s eye view</Heading>
        <p className="max-w-5xl mx-auto font-body">
          A fear of driving across tall bridges.
          <Indent>
            A fear of driving alone.
            <Indent>
              A fear of driving alone, late at night, when there's nobody but me
              and the stars, and yet I'm speeding along in a metal box, just
              hurdling along, faster and faster, and the void of the ditch ahead
              calling, faster, faster, faster, just me, and nobody else, nobody
              to interfere, nothing to stop me, alone with myself and all the
              shouting voices in my head...
            </Indent>
          </Indent>
          A fear of public spaces.
          <Indent>
            A fear of parties and events.
            <Indent>
              A fear of places, even ones where I know I'll have friends,
              because I know I just won't be able to shake that feeling, the
              feeling of being separated from the world, like a hologram,
              visible and audible only in the most literal sense of the words,
              and as soon as anyone looked closer, they'd find out I'm not
              really there...
            </Indent>
          </Indent>
          A fear of loneliness.
          <Indent>
            A fear of being alone at night and unable to fall asleep.
            <Indent>
              A fear of being alone, alone with just me and my thoughts,
              thinking about the questions that keep reappearing in my brain, do
              I want to keep living? do I deserve to live? do I think that life
              is worthwhile?, and struggling to find the answers, laying awake,
              my thoughts racing, my body exhausted but unable to rest...
            </Indent>
          </Indent>
          A fear of sharp objects.
          <Indent>
            A fear of knives and blades.
            <Indent>
              A fear of being by myself, with anything sharp enough to pierce my
              skin, because, what if I can't control myself, what if the urges
              overwhelm me again, what if I can't keep my head up...
            </Indent>
          </Indent>
        </p>
        <DM date="Wednesday, January 22, 2020, 2:17 AM">
          yeah sometime soon - but NOT when i'm tempted to use them - i'm going
          to go through my room and get rid of sharp tools and shit, cuz it's
          clear i can't trust myself alone at this point
        </DM>
        <Heading>iii. part of me</Heading>
        <blockquote className="max-w-sm text-sm border-2 border-black p-4 mx-auto font-body italic">
          Sertraline tablets are a <Bl>prescription</Bl> <Bl>medication</Bl>{" "}
          used to treat Major Depressive <Bl>Disorder</Bl>, OCD, Panic Disorder,
          PTSD, and Social Anxiety Disorder. It is important to talk with your{" "}
          <Bl>healthcare</Bl> provider about the risks of treating depression
          and also the risks of not <Bl>treating</Bl> it. You should{" "}
          <Bl>discuss</Bl> all treatment <Bl>choices</Bl> with your healthcare
          provider.
        </blockquote>
        <br />
        <Poem>
          <p>If I take these pills, does it shut off part of me?</p>
          <p>The part of me that wanted to kill myself?</p>
          <p>Does it keep it buried?</p>
          <p>Will it ever come back?</p>
          <p>It tried to kill me,</p>
          <p>But it's still a part of me.</p>
          <br />
          <p>If I take these pills, do I lose the chance,</p>
          <p>to reach out to that part of me,</p>
          <p>and to help it to heal?</p>
          <br />
          <p>Is that even what I want?</p>
          <br />
          <p>I don't like to give up on people,</p>
          <p>and it's still a part of me.</p>
        </Poem>
        <DM date="Sunday, October 18, 2020, 2:37 AM">
          How come when people cut themselves while jerking off it's "masochism"
          and "kinky" but when I cut myself at 3 am while crying into my pillow
          I "need help" and am a "suicide risk"
        </DM>
        <Heading>iv. run like hell</Heading>
        <p className="font-body max-w-5xl mx-auto text-lg">
          Claim: If I work, work, work, and never stop, I can fix myself.
          <Indent>
            Reasoning: If I go to bed every night exhausted at 3 AM, I'll be too
            tired to distract myself with the hard questions. Reasoning: If I
            can cover my walls with medals and certificates from things I've
            done, I'll have a sense of who I am. Reasoning: If I spend my life
            rushing from place to place, from responsibility to responsibility,
            I won't find myself lingering outside of my comfort zone.
          </Indent>
          <br />
        </p>
        <blockquote className="max-w-sm text-sm border-2 border-black p-4 mx-auto font-body italic">
          The individual must be experiencing five or more symptoms during the
          same 2-week period and at least one of the symptoms should be either
          (1) depressed mood or (2) <Bl>loss of interest or pleasure</Bl>. To
          receive a diagnosis of depression, these symptoms must cause the
          individual
          <Bl>clinically significant distress</Bl> or <Bl>impairment</Bl> in
          social, occupational, or other important areas of <Bl>functioning</Bl>
          . The symptoms must also not be a result of substance abuse or another{" "}
          <Bl>medical condition</Bl>.
        </blockquote>
        <br />
        <p className="font-body max-w-5xl mx-auto text-lg">
          Claim: Running away from my problems worked.
          <Indent>
            Reasoning: In my first year of doing robotics, my team qualified for
            the world championship event.
            <Indent>
              <Bl>
                I skipped meals to work on the robot. I averaged one meal per
                day. One of my teammates was so concerned about me that she told
                my parents. They brushed it off.
              </Bl>
            </Indent>
            Reasoning: When I came back home from boarding school, I started a
            new robotics team at my school.
            <Indent>
              <Bl>
                I blamed my self harm scars on carelessly handling sharp metal.
                I often was so stressed that I would snap and get angry at my
                teammates.
              </Bl>
            </Indent>
            Reasoning: I got a perfect score on the SAT.
            <Indent>
              <Bl>
                I cut myself the night before the test. I cut myself the night
                after the test. I cut myself the night before my score came out.
                I cut myself the night after my score came out. Somehow,
                perfection wasn't enough.
              </Bl>
            </Indent>
            Reasoning: I built software projects that I’m still proud of to this
            day, and I taught myself about software design patterns, network
            engineering, and computer vision.
            <Indent>
              <Bl>
                For weeks at a time, I woke up at about 3 PM, turned on my
                computer, wrote code, went downstairs to eat dinner with my
                family, came back upstairs, and sat at my desk and wrote more
                code until about 4 AM.
              </Bl>
            </Indent>
            Reasoning: I took three AP classes and 2 dual-enrollment courses at
            a local college each semester.
            <Indent>
              <Bl>
                I slept an average of four hours per night. On the good nights,
                I would be too exhausted to cut, too exhausted to think, too
                exhausted to exist.
              </Bl>
            </Indent>
          </Indent>
        </p>
        <Heading>v. madeline</Heading>
        <div className="max-w-3xl mx-auto font-body text-lg flex flex-col gap-8">
          <p>
            So there's this video game I play sometimes. It's called Celeste.
            The main character, Madeline, is trying to climb a mountain. It’s
            what you might call a ‘platformer’ game--you have to get Madeline
            from platform to platform, jumping and dashing through the air. And
            it’s famously hard, requiring precise timing of just the right
            button inputs.
          </p>
          <p>
            Just as Madeline isn’t a mountain climber, I’m not much of a gamer.
            My hand-eye coordination is abysmal, and my ability to make
            split-second decisions isn’t great either. It took me months,
            attempt after attempt, sometimes grinding for hours just to get past
            a single screen of a level, but eventually, I made it to the summit.
          </p>
          <p>
            The mountain represents Madeline’s depression and her anxiety. Along
            the way, Madeline meets <Bl>Part of Her</Bl>. <Bl>Part of Her</Bl>{" "}
            tries to push her back down the mountain. <Bl>Part of Her</Bl> tries
            to tell her that she's not a mountain climber. <Bl>Part of Her</Bl>{" "}
            stalls the gondola she’s travelling on, causing Madeline to have a
            panic attack. And when Madeline tries to leave <Bl>Part of Her</Bl>{" "}
            behind, <Bl>Part of Her</Bl> knocks her down to the base of the
            mountain, making her climb all the way back up again.
          </p>
          <p>
            Then, Madeline talks to <Bl>Part of Her</Bl>. She asks{" "}
            <Bl>Part of Her</Bl> for help. She works with <Bl>Part of Her</Bl>{" "}
            to finish climbing the mountain. She works with <Bl>Part of Her</Bl>
            . She doesn't take medicine to turn <Bl>Part of Her</Bl> off.
          </p>
          <br />
          <p>I took Madeline's name. I am Brooke Madeline Chalmers.</p>
          <p>
            What about <Bl>Part of Me</Bl>?
          </p>
        </div>
        <Heading>vi. to take comfort in insanity</Heading>
        <DM date="Saturday, October 10, 2020, 4:06 AM">
          i feel like i've got 4 options here
          <p>
            1. i come out as trans, quite possibly get laughed out of the room,
            start the long and humiliating role of trying to transition while my
            parents are super judge-y about it and probably aren't very
            supportive
          </p>
          <p>
            2. i tell her about my depression, and one of the four scenarios i
            talked about happens, like, it could go either way
          </p>
          <p>
            3. i continue to do nothing, and nothing really changes except I
            risk possibly ending up in the psych ward (and i probably risk my
            mom deciding that i have depression anyway, leading my down one of
            the same paths as #2)
          </p>
          <p>
            4. i kill myself before any of the above has a chance to happen -
            this one seems pretty appealing ngl, and it would probably be a
            no-brainer if it wasn't for the fact that my recent cutting has
            started boosting my mood and i'm not as impulsively suicidal anymore
          </p>
          <p>
            eh, who am i kidding, as long as i can manage to drive myself to the
            bridge, i'd jump without hesitation
          </p>
          <p>
            but like, if i try to tell my mom about having depression, i doubt
            anything productive would come from it, because
          </p>
          <p>
            5. it would require my mom admitting that her parenting wasn't
            spectacular, which i doubt she would be willing to admit, since she
            considers herself such a great ally to lgbt etc, and she's taken
            criticism as a personal attack before
          </p>
          <p>
            6. it would require me to come out as trans, which, uh, haha NOPE
          </p>
          <p>
            i guess i gotta find a different spot to cut... which i'm not doing
            very well at, considering i did more yeets in the same exposed place
            less than an hour ago
          </p>
          <p>i guess, if i end up in the ward,, you know why lmao</p>
        </DM>
        <div className="max-w-3xl mx-auto font-body text-lg flex flex-col gap-8">
          <p>
            When someone shows symptoms of depression, we say that they{" "}
            <Bl>suffer from</Bl> depression. We say that they{" "}
            <Bl>struggle with</Bl> depression. We say that as if depression is
            some ghostly, <Bl>external force</Bl> that they're fighting against.
          </p>
          <p>
            It’s comforting. It puts some distance between mental illness and
            everyday life. If people who try to kill themselves have some{" "}
            <Bl>condition</Bl>, if they’re <Bl>diagnosed</Bl> with some{" "}
            <Bl>label</Bl>, if they’re <Bl>insane</Bl>... it means suicidality
            is something that impacts “those people.” Not us. It means that
            someone’s decision to end their own life can’t be a rational
            decision.
          </p>
          <p>
            As soon as we let go of that notion... the tough questions start.{" "}
            <span className="italic">
              Do I want to go on living? Or what about my friend who killed
              herself two years ago--is there something I could’ve done to
              influence her decision? Would she still be here if only I did the
              right thing?
            </span>
          </p>
          <p>
            When I read these messages that I sent, I'm not reading the writing
            of a <Bl>disease</Bl> that <Bl>hijacked</Bl> my brain. I'm not
            reading the work of a <Bl>chemical imbalance</Bl>. I'm reading my
            own words. Those words were written by me. At some point, I
            considered my current situation, examined my options, deliberated,
            and decided that I wanted to kill myself.
          </p>
          <p>
            And yet, something happened at the last minute that pulled me away.
          </p>
          <p>And yet, I'm still here.</p>
          <p>And yet, I don't want to die right now.</p>
          <p>And yet, I did back then.</p>
          <p>
            As much as I can try to tell myself that <Bl>I wasn't myself</Bl>,
            or that it was some <Bl>chemical imbalance</Bl>, or that the person
            who wrote those messages a year ago isn't the same person typing
            this on my laptop right now... deep down, I know it was. I wrote
            those words.
          </p>
        </div>
        <Heading>
          vii. the problem that needs fixing is with the chemicals in my brain
        </Heading>
        <DM date="Friday, March 6, 2020, 9:33 PM">
          i feel like i have too many masculine traits (not just physical but
          also like mannerisms and stuff) and i'd either never be able to pass
          as female or i'd kill myself from the stress of trying, and most
          likely the latter
        </DM>
        <div className="max-w-5xl mx-auto text-lg font-body flex flex-col gap-4">
          <p>
            The <Bl>problem</Bl> that needs fixing is with the chemicals in my
            brain.
          </p>
          <p>It's not that I wasted years running away from life.</p>
          <p>
            It's not that I feel uncomfortable with every aspect about how I fit
            into the world around me.
          </p>
          <p>
            The problem that <Bl>needs fixing</Bl> is with the chemicals in my
            brain. It's not that my dad refused to acknowledge me when my family
            visited me on campus.
          </p>
          <p>
            It's not that I spent so long being told by my family and society to
            be someone I'm not.
          </p>
          <p>
            The problem that needs fixing is with the <Bl>chemicals</Bl> in my
            brain.
          </p>
          <p>
            It's not that I'm left with shattered remnants of my sense of
            identity.
          </p>
          <p>
            It's not that I'm somehow supposed to be a good student, be social,
            keep up with responsibilities, and try to clean up the mess I've
            made for myself inside my skull.
          </p>
          <p>
            The problem that needs fixing is with the chemicals in my{" "}
            <Bl>brain</Bl>.
          </p>
          <p>
            It's not that I'm left trying to figure out how to live, too
            dysphoric and uncomfortable to be a boy, but too tall and masculine
            and deep-voiced and awkward to be a girl.
          </p>
          <p>
            It's not that I need to learn everything about myself all over
            again, from what colors I like to what kind of clothes I like to
            wear, and I need to do it with that looming sense of self-doubt.
          </p>
          <p>
            The problem that <Bl>needs fixing</Bl> is with the chemicals in my
            brain.
          </p>
          <p>
            It's not that I hate my voice so much that I'm afraid to talk in
            class or even introduce myself to people.
          </p>
          <p>
            It's not that every social interaction has become a minefield, every
            time I get dressed in the morning is a choice between the discomfort
            I'm familiar with and the discomfort I'm not, every class and club
            meeting requires solving a matrix equation of am I out to these
            people? do I know if they'll be supportive? do I know if I'll have
            the confidence to be okay if they aren't?, and every time I so much
            as walk through the IV lobby is a test of my sense of self.
          </p>
          <p>
            The <Bl>problem</Bl> that needs fixing is with the chemicals in my
            brain.
          </p>
        </div>
        <Heading>viii. as i do, not as i say</Heading>
        <DM date="Tuesday, July 14, 2020, 1:44 PM">
          I'm rambling like, but honestly, I feel a lot less suicidal if I think
          about what 20-year-old Brooke would be like, then consider that I'd be
          killing her, not just present-me
          <p>
            I might not enjoy my life very much, and I might be fine with ending
            it, but I think she enjoys hers
          </p>
        </DM>
        <div className="max-w-3xl mx-auto font-body text-xl flex flex-col gap-8">
          <p>
            I started taking antidepressants on January 9, 2021. And they
            helped.
          </p>
          <p>
            I got the confidence to open up to a therapist. I gradually stopped
            cutting myself. I finally came out to my parents.
          </p>
          <p>
            Gradually, the voice in my head, the one telling me to kill
            myself... It started to quiet down.
          </p>
          <p>
            <Bl>Did I kill it before it could kill me?</Bl>
          </p>
        </div>
      </article>
    </BlackoutContext.Provider>
  )
}
