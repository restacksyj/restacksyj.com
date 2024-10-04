---
layout: ../../layouts/post.astro
title: "Writing my own language interpreter - Part 00"
pubDate: 2024-10-03
description: "Learning how parsing, ASTs and bytecode works"
author: "restacksyj"
excerpt: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
image:
  src:
  alt:
tags: ["java", "compiler"]
---

So recently I stumbled upon Crafting Interpreters book and it made me excited to try building
language interpreters of my own. I'll be documenting the whole journey in the upcoming blogs.
This is part 00.

> Notes from Crafting interpreter
#### Frontend of programming languages
1. Lexing ( tokens )
2. Parsing - builds a tree structure ( syntax trees / ast ) from the tokens
  a. reports syntax errors as well
3. binding or resolution
  a. where scope comes into play
  b. if statically typed, we type check if failed throw type error
4. attributes, symbol table

#### Intermediate representation

#### Optimization (huge part if compiled languages)
a. constant folding
languages like Lua and CPython spend most of their time optimizing runtime


#### Code Generation
assembly like instructions

---

#### Backend
Generating bytecode (Virtual machine code)
Runtime ( fully compiled language, code implementing runtime gets inserted directly into executable)


#### Single Pass Compilers
No code parsing, analysis and code gen; output code in the parser without using IRs

#### Tree walk interpreters
Begin executing code right after parsing into AST

#### Transpilers
source to source compiler,
consider you made a language -> compile to C -> then C compilation pipeline begins

#### JITs (Just in Time Compilation)
executing code by compiling to machine code

## Difference between Compilers and interpreters
Generating bytecode or machine code, you are compiling ( doesn't execute it )
when we say interpreter, takes source code and executes immediately ( runs from source )

---

Thanks Robert for the amazing book, can't wait to read more about interpreters on
[Crafting Interpreters](https://craftinginterpreters.com/introduction.html)
