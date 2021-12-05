import React from "react"

export default function ExpressionReflection() {
  return (
    <>
      <p>
        This piece didn't turn out exactly how I'd envisioned it. After reading
        the <span className="italic">Childhood Reading</span> piece, I wanted to
        take the idea of "writers plagiarize from their own experiences and the
        world around them" and try to embody it in my composition.
      </p>
      <p>
        My first idea was to take many of the "strong" words (really just
        arbitrary words that I chose) from the text of{" "}
        <span className="italic">Childhood Reading</span> itself, scrape a bunch
        of their definitions from some dictionary, feed the result into a text
        generation neural network, pull a few stanzas' worth of text from the
        output of the network, and then black out parts of that text to write a
        poem. I figured this would be an interesting reflection of taking
        words/ideas from the world, mixing them up somehow, and producing
        something new.
      </p>
      <p>
        Again, it didn't particularly go as planned. The first network I tried,
        textgenrnn, took about thirty minutes of training on my $300 graphics
        card, then produced a model that returned a mixture of literal random
        letters and the exact same definitions that were fed in. I wanted to use
        this network because it wouldn't be trained anywhere else—the only data
        it would receive would be the definitions I feed it, so it was the
        purest analog to my original vision.
      </p>
      <p>
        Seeing as it didn't work, I tried a different model (OpenAI's GPT-2)
        which had been trained on a wide variety of English text beforehand.
        That model saw a list of dictionary definitions and produced definitions
        that would alphabetically follow the ones I provided, instead of
        producing words that were similar in meaning.
      </p>
      <p>
        Eventually, I gave up on the generative AI step entirely. That said, I
        don't think the resulting work is worse off as a result.
      </p>
      <p>
        In terms of the formatting, I went through a few iterations of this.
        Initially, I started by completely blacking out the text, since I wasn't
        too familiar with the blackout poetry genre and that was what I had seen
        done the most. Then, I realized I wanted to leave the source text
        somewhat readable, to show where it originated from, so I made the text
        a dark gray so it was somewhat visible, but that made it harder for the
        reader to focus on the text between the blackout sections.
      </p>
      <p>
        In the end, I'm a lot more happy with the version of this piece here—it
        shows both the generation of the source text, while preventing the
        reader from actually reading it after the blackout sections fade in.
      </p>
    </>
  )
}
