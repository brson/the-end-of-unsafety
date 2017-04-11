# The End of Unsafety - Script

Summary: this is a talk about how Rust will help the world move beyond
the Age of Unsafety, in which C formed the foundation of the software
world. It focuses on: the problem with the Age of Unsafety; the
creation and design of Rust; an overview of Rust today; and
projections to the future of Rust, looking beyond the Age of Unsafety.

## INTRO

Hello and thank you for joining us for this talk. We are honored to be
here in Beijing for the first time.

This is The End of Unsafety.

## BARB

It's a story about how the world changes and how our software changes
with it.

We live today in an Age of Unsafety.

Because C is beset on all sides. The barbarians are
at the gate. The internet is no longer safe, and C and C++ are no
longer sufficient tools for securing it.

## HAVENS

But the C language, as successful and enduring as it is, will one day
fall out of use. Make no mistake, it will not be for a great many
years. But one day even venerable C will depart the shores of this
earth, and the age of C will come to and end.

That's where Rust comes in.

## WHO

My name is Brian Anderson, and this is my friend Alex Crichton, and we
are both members of the Rust programming languages core team, as well
as being employed to work on Rust by Mozilla Research.

Alex will you introduce yourself?

Alex: I've been working on Rust since 2013, where I have been
responsible for large portions of the standard library and the broader
library ecosystem. I'm also etc.

Brian: I've been working on Rust since 2010, involved in every aspect
of its development. Much of my work has been in the standard library,
tooling, platform support, community building. I have a special
passion for software validation and ensuring that Rust is rock solid
from release to release.

## LINK

Here's the link to the materials for this talk. It includes the
slides, speaker notes, and plenty of links.

I'll give you just a few seconds to make note if you like.

(take a drink)

We're going to talk a lot about Rust later, but the first part of this
talk is mostly about the motivation for Rust. Before we get into
that though, a little bit about what Rust is.

## WHATRUST

Rust is first and foremost a high-performance, memory safe, systems
programming language. And when I say "high-performance", I don't just
mean it's fast, I mean it's competitive with the very fastest
programming languages. Think C, C++, and Fortran.

And when I say "memory safe" I mean that Rust software does not crash,
at least not in the way that languages like C and C++ do, where a
crash can lead to unpredictable, and - most importantly - exploitable
behavior.

Rust provides the very best performance without sacrificing safety.

It accomplishes this by being designed completely around safe,
zero-cost abstractions. The code you write corresponds quite directly
to the code the machine runs. Accordingly, Rust has no runtime, and -
crucially - no garbage collector. And this makes Rust extremely
portable - Rust will run on just about anything with a CPU, everything
from microcontrollers to supercomputers.

Rust is a thriving, collaboratively developed open source project
sponsored by Mozilla, the makers of Firefox, who employ Alex and
myself.

## OV

Here's an overview of what this talk is about.

## OV1

First we're going to visit The Age of Unsafety, in which C was
conceived, and the entire computing world we know was built on top of
it.

## OV2

Then we're going to visit Rust's history, why Mozilla
needed it, and how Rust evolved to provide solutions for
the use cases commonly reserved for C and C++ alone.

## OV3

With that context, then we will try to convince you that Rust is
really exciting right now.

## OV4

Then we'll speculate about the coming years for Rust, and the end of
unsafety.

## Disclaimers

A quick disclaimer. Rust is a direct competitor to C and C++ in the
marketplace. In the Rust project we take great pride in being civil,
in not putting down the competition. Still, this talk will say much
about the weaknesses of C and C++ in comparison to Rust. As former C
and C++ programmers ourselves we have the greatest respect for their
users and creators. We'll try to stick to objective facts, and we beg
your forgiveness if we misspeak. Toward the end of this talk
we'll discuss some of Rust's weaknesses, to balance the score.


<!-- The Age of Unsafety -->




<!-- The Creation of Rust -->

## CREAT

## FX

## BLOC

This gives you an idea of the size of these code bases. They aren't
the biggest code bases in the world, but they are big. And this is
just the parts written in C/C++.

## BCVE

- https://nvd.nist.gov/vuln/search/results?adv_search=true&form_type=advanced&results_type=overview&cpe_vendor=cpe%3a%2f%3amozilla&cpe_product=cpe%3a%2f%3a%3afirefox&pub_date_start_month=0&pub_date_start_year=2016&pub_date_end_month=0&pub_date_end_year=2017
- https://nvd.nist.gov/vuln/search/results?adv_search=true&form_type=advanced&results_type=overview&cpe_vendor=cpe%3a%2f%3agoogle&cpe_product=cpe%3a%2f%3a%3achrome&pub_date_start_month=0&pub_date_start_year=2016&pub_date_end_month=0&pub_date_end_year=2017

<!-- The Future of Rust -->

## SFUT

So hopefully by now we've painted a fairly glowing picturer of Rust.
But that's not to say that Rust is perfect. We've got a long way
to go yet.

In this portion we'll talk first about some the challenges Rust faces,
and some if its deficiencies. Then describe some of the near-term
directions the project is taking, and finally speculate some about the
more distant future of unsafety.

## CHAL

So we think Rust is in a very strong position right now. It has
qualities that no other language stack has, and that are not easy to
achieve. But Rust's long-term success is not yet guaranteed, and it's
adoption, while growing quickly, is still modest.

A big challenge is Rust's learning curve. While Rust has a reasonably
familiar syntax to C++ programmers, it's semantics are just as much
derived from ML and Haskell. We believe Rust's semantics are quite
attractive for systems programmers, but convincing happy C++
developers of this isn't simple.

But worse than that, Rust's fundamental model - ownership and
borrowing - is effectively a new programming paradigm - it requires
users to adapt to a new way of thinking about how they manage the
resources in their code. Programmers who make that connection tend to
find the Rust model significantly clarifiies their own thinking about
code, but it does take investment on the programmers part, and an
openness to new ideas.

It's also possible that plain competition could win over Rust. In much
the same way C, the "worse is better" solution, dominated the market
for decades by working in all the right places, some other language
may do what Rust does good enough. Or a new language might do Rust
better than Rust. And even with Rust's technical strengths, it may not
succeed if it doesn't catch on fast. If we go another five years
without a killer app written in Rust taking off in a major way, that
could be very bad Rust's prospects.

## CHCPP

We think Rust is an excellent C++ replacement today. Both languages
have similar costs and performance, but Rust has the advantage of
memory safety and a clean slate.

The biggest challenge to Rust's adoption in the systems space is
interoperating with the vast amounts of C++ code running the world
today. Note that I say "C++" and not "C and C++". Interop with C is
quite simple and Rust can masquerade as C all day. Interop with C++ on
the other hand is very, very hard, and few languages do it
successfully.

Along those same lines, we've already encountered a number of
challenges integrating Rust into existing build systems. Rust has it's
own opinionated package manager called Cargo, and while it works very
well, teaching it to integrate with all the various build systems
used for C and C++ is an ongoing process. This is something we're
hearing a lot from users right now, and working to address.

## CHC

Rust replacing C is in some ways a simpler story than replacing C++,
and some ways more complex. C is a much easier language to interop
with than C++, and because of that it tends to be used for the lowest
layers of the stack, in system libraries and operating system kernels.

The big thing that Rust needs to make inroads at that level is ABI
stability - that is, the capacity to do seamless upgrades of dynamic
libraries between point releases. Today Rust provides very strong
_source stability_, but not _ABI stability_.

C also provides some unique features that might not be used often, but
occasionally are used to achieve performance, things like
setjmp/longjmp, and computed goto. It's not clear whether Rust would
adopt such features to gain parity, or would pursue alternatives with
equivalent performance.

## SUCC

So there definitely are some challenges, and it's going to be a long
road for Rust, but they are surmountable. And we have a lot of reason
to be hopeful.

Perhaps the greatest reason is that Rust's technical foundations are
very, very strong. The runtimeless ownership model is a strong base to
build the entire computing stack on top of. We are thankful every week
that, through some miracle, all the years of design work we did
somehow left us in a real sweet spot in the design space.

And having this strong technical foundation gives us freedom to focus
on getting Rust into production in more places. From the very
beginning, Rust has been designed for production, to fulfill the needs
of Firefox, a product used by 100 million people. And now we are in a
position where if we just keep knocking down obstacles to production
deployment, Rust will see wider and wider use. Our published roadmap
for 2017 is almost entirely about clearing the way for production
users.

Another major systemic advantage we have built into Rust is the design
of its library ecosystem, and the separation between the language and
the libraries. Rust is quite modular, with much of its capabilities
being provided by libraries. For example, Rust knows nothing about
concurrency, but its libraries leverage ownership and borrowing to
provide very robust concurrency abstractions.

The standard library itself can be completely replaced, and we expect
it to, for use cases we haven't thought of yet. As an example, the
Rust standard library assumes allocations will succeed. This is a
simplifying assumption that is reasonable for most classes of
software. But some application domains, particularly in the embedded
and kernel worlds, want more control over their allocation, and we
expect to make that possible.

The Rust standard library itself is quite small, providing core data
structures and operating system abstractions. Everything else is
provided via Cargo and the crate ecosystem. This was a very
intentional decision to ensure both a high quality core product, and
to encourage free experimentation in the Rust community, and it has
paid off well - we see great libraries coming out of the Rust
community, and as they mature they will be adopted into the Rust
cannon.

The convenience, flexibility, and robustness of the Rust system is
additionally going to vastly expand the audience of systems
programmers. With Rust, systems programming is easy and accessible.

This is one of the biggest revelations we've had in Rust's development
- that there are vast audiences that want to write low level code but
don't want to write C and C++. We see a lot of young programmers with
backgrounds in Ruby and JavaScript getting into Rust, and creating
their own high-performance systems software for the first time.

And this points to Rust's greatest strength - it's culture and
community. In Rust we are building a new systems programming culture,
and it is going to be expansive and welcoming and accessible, and it
is going to change the nature of systems programming for the better.

## NEXT

TODO

## PRED

TODO

## OUTRO

Once again my name is Brian Anderson, and this is my friend Alex
Crichton, and this is The End of Unsafety.

Thank you.
