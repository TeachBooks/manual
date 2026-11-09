````{margin}
```{attributiongrey} Attribution
:class: attribution
This page reuses MIT licensed content from {cite:t}`sphinx-exercise`. {fa}`quote-left`{ref}`Find out more here.<external_resources>`
```

```{admonition} User types
:class: tip
This section is useful for user type 3-5.
```
+++
{bdg-primary}`Sphinx Extension`
{bdg-link-light}`Included in TeachBooks Template <../external/template/README.html>`
{bdg-link-primary-line}`Included in TeachBooks Favourites <./favourites.html>`
````

# Sphinx exercise

This extensions provides an easy way to add exercises and solutions to your book. It is created by the Executable Books team and is [documented here](https://ebp-sphinx-exercise.readthedocs.io/en/latest/).

TeachBooks has made some small modifications to the original extension, such that it works well with translated books; this modified version is located in the repository [github.com/TeachBooks/sphinx-exercise](https://github.com/TeachBooks/sphinx-exercise).

## What does it do?

This extension defines exercises and solutions as new admonition types:

```{exercise}
:label: my-exercise

Recall that $n!$ is read as "$n$ factorial" and defined as
$n! = n \times (n - 1) \times \cdots \times 2 \times 1$.

There are functions to compute this in various modules, but let's
write our own version as an exercise.

In particular, write a function `factorial` such that `factorial(n)` returns $n!$
for any positive integer $n$.
```

````{solution} my-exercise
:label: my-solution

Here's one solution.

```{code-block} python
def factorial(n):
    k = 1
    for i in range(n):
        k = k * (i + 1)
    return k

factorial(4)
```
````

More information can be found in the [official documentation](https://ebp-sphinx-exercise.readthedocs.io/en/latest/).

## Installation
To use this extenstion, follow these steps:

**Step 1: Install the Package**

Install the TeachBooks' version of  `sphinx-exercise` package using `pip`:
```
pip install sphinx-exercise @ git+https://github.com/TeachBooks/sphinx-exercise.git
```
    
**Step 2: Add to `requirements.txt`**

Make sure that the package is included in your project's `requirements.txt` to track the dependency:
```
sphinx-exercise @ git+https://github.com/TeachBooks/sphinx-exercise.git
```

**Step 3: Enable in `_config.yml`**

In your `_config.yml` file, add the extension to the list of Sphinx extra extensions (**important**: underscore, not dash this time):
```
sphinx: 
    extra_extensions:
        .
        .
        .
        - sphinx_exercise
        .
        .
        .
```
