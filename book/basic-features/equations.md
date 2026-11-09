# Equations

Equations can be included in two ways: inline or display mode. 

To make an inline equation, just put the LaTeX equation between \$-signs. For example, `$F = m \cdot a$` produces: $F = m \cdot a$. 

Display mode equations (the ones that take up a whole line), can be inserted using double \$-signs, like this:

    $$
        F = m \cdot a
    $$

which will produce:

$$
    F = m \cdot a
$$

```{tip}
The scientific rules dictate that quantities ($F$, $m$, $a$ etc.) should be printed in italics. Units, however, should not! One can use `\text{m}` in an equation to comply to this rule:

$$ F = m \cdot a = 10 \cdot 9.81 = 98 \text{N}$$

```

> **Warning**
> 
> Make sure there is a blank line *before* the display mode equations, otherwise it will render as inline and display the outer set of $$$ symbols. Also, the Euro symbol is not included in MathJax (see note below) and must be specified using `\unicode{0x20AC}` (note that it displays incorrectly in some Markdown renderers like VS Code).

To number the equations and refer in text, you need to provide a label to the equation. Just put the label between brackets and place it after the last \$\$, like this:

```md
$$
    F = m \cdot a
$$ (newtons_second_law)
```

Resulting in:

$$
    F = m \cdot a
$$ (show_newtons_second_law)

Equation {eq}`show_newtons_second_law` can now be referred to.

> **Note**
> 
> The TeachBook uses MathJax to display equations, which provides some LaTeX-like functionality, but not all! For example, the Euro symbol is missing, and packages like `siunitx` are not available (hint, use `\textrm{}` and `\textrm{}`). When something is not working, it's useful to search for MathJax-specific solutions (hint, include "mathjax" in your Google search).
> 