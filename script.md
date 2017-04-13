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

We live in an Age of Unsafety.

This age began in 1972, with the C language, and with Unix, and today
it encompasses all that we see. Unsafety is at the foundation of the
computing world.

And now we are beset on all sides. The barbarians are at the gate.

The internet is no longer safe, and the tools of the past are no
longer up to the task of securing it.

That is why Rust exists.

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
created it, and how Rust evolved to provide solutions for
the use cases commonly reserved for C and C++ alone.

We'll also explain the technique that makes Rust so powerful, called
"ownership and borrowing".

## OV3

With that context, then we will try to convince you that Rust is
really exciting right now.

## OV4

Then we'll speculate about the coming years for Rust, and the end of
unsafety.

## Disclaimers

A quick disclaimer. In the Rust project we take great pride in being
civil, in not putting down the competition. But Rust is a direct
competitor to C and C++ in the marketplace, and this talk will say
much about the weaknesses of C and C++ in comparison to Rust. As
former C and C++ programmers ourselves we have the greatest respect
for their users and creators. We'll try to stick to the facts,
and we beg your forgiveness if we misspeak. Toward the end of this
talk we'll discuss some of Rust's own weaknesses.


<!-- The Age of Unsafety -->

## MEMERR

I want to take us back 

while functional, they all had a fatal flaw.

What do i mean by unsafe?

This is kind of the technical definition of unsafe: software bugs,
memory safety.

These classes of bugs you'll find in C and C++ programs, buffer
overflows, use after frees. Bad bugs. They can all lead to security
vulnerabilities. Viruses and malware, this is how they take over
your computer.

These languages are incredibly powerful, but they don't give you 


## OSSL

<missed>

I'm sure we've all heard of the heartbleed vulnerability. It ended
up 


<!-- The Creation of Rust -->

## CREAT

So now we're going to get to Rust.

In 2009 Brendan Eich, the creator of JavaScript, and co-founder of
Mozilla, was thinking about these problems a lot, and despairing.

## FX

Firefox, the web browser he had helped turn into a major force on the
internet, with over 100 million users, was in trouble.

Web browsers are massive pieces of software, exposed directly to the
internet, and constantly under attack.

## BLOC

This gives you an idea of the size of the Firefox codebase: 10 million
lines. And Chrome is even bigger at 12 millions lines. They aren't the
biggest code bases in the world, but they are big. And this is just
the parts written in C and C++. Any one of these lines of code could
be hiding a bug that leads to an exploit.

## BCVE

And they do. All the time. Firefox had more than 130 CVEs in 2016.
Not all of these were due to memory unsafety, but a lot were. We find
that when we do that analysis that anywhere from 20%, to 50% or more
of CVEs for any particular product are due to memory unsafety.

## WEBAUD

This is a quote from Robert O'Callahan, a distinguished Mozilla
engineer, from 2013 about the Web Audio stack. The Web Audio stack is
a large C++ codebase and when it was introduced to Firefox, it brought
along with it 34 critical security bugs, 100% of which were due to
memory unsafety.

## RUST

So Brendan was worried about this in 2009, and started talking with
his peers about finding solutions. And it just so happened that
Graydon Hoare had a pet project that was intented to solve these
problems. Graydon had previously been involved in the doomed
ECMAScript 4 effort, and before that had created the Monotone version
control system. And now he was working on a programming language
called "Rust".

## DORIG

Now, the Rust of 2009 was much different from the Rust of today.
Even then, the primary objective was to solve the memory safety
problem, but the assumptions were different.

Back then, even the Rust team thought the only viable way to solve the
memory safety problem was through a garbage collector, so Rust's heaps
were garbage collected, but that garbage collection was thread-local.
That way garbage collection in one thread would not interfere with
progress in other threads. This was in important early constraint,
and it influenced our ultimate solution.

Rust was, at the time, a green-threaded programming language in the
style of Go, with ML influences.

(next fragment)

But these assumptions did not hold.

## DACT

And the reason that both these original assumptions didn't hold
boils down to performance - for our use cases we can tolerate no
runtime abstraction costs, and both garbage collection, even if
it is single-threaded, and green-threading, impose significant
overhead.

But it took us a long time to come to this conclusion, and we only
came to it indirectly. For a long time we thought these costs would be
acceptable - it was only after reaching an important insight about the
design of Rust that we realized not only the importance of zero-cost
abstractions, but also the attainability of zero-cost abstractions.

## KEY

And the key question that drove that insight was this:

"How can I maintain memory safety in a concurrent program without a
global GC?"

## HEAP

Let me illustrate the problem. Here we have two isolated threads, each
with its own heap (on top), and stack (on bottom).

Now, imagine I create an object in thread A's heap.

(next fragment)

Here represented by a blue balloon.

Now, imagine that thread B wants that balloon, so I send it from
thread A to thread B.

(next fragment)

So far so good. But how should the language actually implement that?
Well, since the Rust of 2009 had isolated heaps, perhaps we make a
deep copy of the balloon, copying the balloon over to the other heap.

But what if the balloon itself contains pointers to other ballons?
And what if one of those contains a pointer back into the stack?
How do you deal with those?

These are hard problems to solve, and it's easy to end up back in a
situation like this...

## TANGLE

With pointers from multiple threads pointing into the same objects.

And then we need a global GC again.

## INS

For months we batted around this problem of sending objects between
threads without invalidating pointers, and without a garbage collector.

Around this time Niko Matsakis joined the team. Niko was an actual
trained type theorist, and he brought some good ideas.

Niko was looking at a research project called Cyclone and wondering
if we could learn from it. Cyclone was a safe dialect of C
that used static analysis to track the validity of pointers.

Cyclone's system was somewhat limited and did not directly solve
our multithreading problem.

But also at the same time we became aware of another research project
at Microsoft called Singularity. It was an attempt to reimagine the
operating system in .NET. There wasn't a lot of information coming out
of Microsoft but what caught our eye was their approach to
concurrency. In Singularity they employed a novel technique to
transfer ownership of - and sole access to - entire regions of memory
between threads, by only copying a pointer.

(next fragment)

In a real sense Rust is Cyclone plus Singularity.

And the result in Rust is what we call "ownership and borrowing".

## OWN

This is kind of the key takeaway of this whole presentation. Ownership
and borrowing is what makes Rust, Rust.

In Rust, every value has a single, statically-known, owning path in the code,
at any time.

Points to values have limited duration, known as a "lifetime", that
is also statically tracked.

All pointers to all values are known statically.

Now there are actually are caveats and exceptions, but if you
understand this, you understand how Rust approaches the memory safety
problem.

## BAL

One of the neat things about ownership and borrowing as a
computational model, is that the concepts are familiar and
natural. Ownership and borrowing in Rust is similar to ownership and
borrowing of physical objects.

So this is the portion of the talk where Alex and I usually do a live
demonstration of balloon borrowing. Unfortunately, I failed to acquire
the necessary helium yesterday, so we're going to demonstrate
virtually instead.

## BOWN

First we'll demonstrate transfer of ownership.

Here I have two figures, stickboy and stickgirl, and they love
balloons.

(next)

Stickboy has a beautiful blue balloon, and stickgirl wants that
balloon. So stickboy is going to hand the balloon to stickgirl.

(next)

Oh she's real excited about that balloon, but stickboy is going
to want it back.

(next)

But stickboy doesn't really have any agency here, because he
gave that balloon to stickgirl. And she can do whatever she
wants with it.

(next)

## BSH

If stickboy wanted to keep his balloon what he really should have
done was have her borrow a reference to it, indicated in Rust
by the ampersand.

So here let's watch stickboy hand his green balloon to stickgirl.

(next)

This time, he's handing her the balloon, but holding onto it
himself. So when she's done peeking at it stickboy can just
pull it right back.

(next)

This type of reference is called a "shared reference", and
it's immutable, but there's one more type of reference in Rust.

## BMUT

The mutable reference, indicated by ampersand "mute".

In this example stickboy is going to pass the balloon to stickgirl.

(next)

And because it's a mutable reference, she can not only examine it,
but can mutate it as well.

(next)

So she's going to draw a cheerful face on stickboy's balloon.

(next)

And after stickboy yanks it back, while he's still in possession of
his treasured red balloon, it's been modified.

Since he still owns the balloon though, he's free to do what
he wants with it, including destroy it.

(next)

# ROWN

# RSH

# RMUT

# SUM

Here's a summary of ownership and borrowing.

This is how Rust thinks about all resources. A convenient way to think
of this is that Rust shared and mutable references provide
reader-writer locks over owned values. Rust has baked in access
control to all memory, and that access control is completely
determined statically, with no runtime overhead.

This system provides fine, deterministic, static, and foolproof
control over resources. And this control enables Rust's powerful
zero-cost abstractions.

<!-- Rust Today -->


<!-- The Future of Rust -->

## SFUT

So hopefully by now we've painted a fairly glowing picture of Rust.
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

But more than that, Rust's fundamental model - ownership and
borrowing - is effectively a new programming paradigm - it requires
users to adapt to a new way of thinking about how they manage the
resources in their code. Programmers who make that connection tend to
find the Rust model significantly clarifiies their own thinking about
code, but it does take investment on the programmers part, and an
openness to new ideas.

It's also possible that plain competition could win over Rust. In much
the same way C, a "worse is better" solution, dominated the market for
decades by working in all the right places, some other language may do
what Rust does just good enough. Or a new language might do Rust
better than Rust.

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

The big thing that Rust needs to make inroads at that level is binary
stability - that is, the capacity to do seamless upgrades of dynamic
libraries between point releases. Today Rust provides very strong
_source stability_, but not _binary stability_.

Another significant technical challenge for Rust in comparison to C is
its approach to generics. Rust uses a technique called
"monomorphisation", which simply means that each time the Rust
compiler instantiates a generic function it emits a fresh, optimized,
copy of the machine code. This results in large binary sizes that
C programmers are unaccustomed to.

C also provides some unique features that might not be used often, but
occasionally are used to achieve performance, things like
setjmp/longjmp, and computed goto. It's not clear whether Rust would
adopt such features to gain parity.

## SUC1

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

## SUC2

Another major systemic advantage we have built into Rust is the design
of its library ecosystem, and the separation between the language and
the libraries. Rust is quite modular, with much of its capabilities
being provided by libraries. For example, Rust knows nothing about
concurrency, but its libraries leverage ownership and borrowing to
provide very robust and foolproof concurrency abstractions.

The Rust standard library itself is quite small, providing core data
structures and operating system abstractions. Everything else is
provided via Cargo and the library ecosystem. This was a very
intentional decision to ensure both a high quality core product, and
to encourage free and rapid experimentation in the Rust community, and
it has paid off well - we see great libraries coming out of the Rust
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

## FUT

But that's just what _we're_ doing to enable Rust developers. What's
really going to happen over the next few years is that a lot of
world-class software is going to be written in Rust. And that software
is going to be reliable, reusable, and maintainable in ways that
software written in memory-unsafe languages is not. These programs are
going to enjoy significant advantages over their competition, and it
will become increasingly difficult to choose C and C++ over Rust.

The legacy of C and C++ will continue for many decades, but the
future is in safety. And the future is in Rust.

## FIN

Once again my name is Brian Anderson, and this is my friend Alex
Crichton, and this is The End of Unsafety.

Thank you.
