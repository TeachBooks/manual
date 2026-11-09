````{margin}
```{attributiongrey} Attribution
:class: attribution
This page reuses MIT licensed content from {cite:t}`sphinx-proof`. {fa}`quote-left`{ref}`Find out more here.<external_resources>`
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

# Sphinx proof

This extensions provides an easy way to add proofs, theorem, axioms and much more to your book. It is created by the Executable Books team and is [documented here](https://sphinx-proof.readthedocs.io/en/latest/).

TeachBooks has made some small modifications to the original extension, such that it works well with translated books; this modified version is located in the repository [github.com/TeachBooks/sphinx-proof](https://github.com/TeachBooks/sphinx-proof).

## What does it do?

This extension defines proofs, theorems, axioms and other similar concepts as new admonition types:

````{prf:example}
:label: my-example

Next, we shut down randomness in demand and assume that the demand shock
$\nu_t$ follows a deterministic path:


```{math}
\nu_t = \alpha + \rho \nu_{t-1}
```

Again, we’ll compute and display outcomes in some figures

```python
ex2 = SmoothingExample(C2=[[0], [0]])

x0 = [0, 1, 0]
ex2.simulate(x0)
```
````

More information can be found in the [official documentation](https://sphinx-proof.readthedocs.io/en/latest/index.html). It can be [configured in combination the TeachBooks extension to include examples with executable code and visuals](../_git/github.com_TeachBooks_sphinx-code-examples/main/MANUAL.ipynb).

## Installation
To use this extenstion, follow these steps:

**Step 1: Install the Package**

Install the TeachBooks' version of  `sphinx-exercise` package using `pip`:
```
pip install sphinx-proof @ git+https://github.com/TeachBooks/sphinx-proof.git
```
    
**Step 2: Add to `requirements.txt`**

Make sure that the package is included in your project's `requirements.txt` to track the dependency:
```
sphinx-proof @ git+https://github.com/TeachBooks/sphinx-proof.git
```

**Step 3: Enable in `_config.yml`**

In your `_config.yml` file, add the extension to the list of Sphinx extra extensions (**important**: underscore, not dash this time):
```
sphinx: 
    extra_extensions:
        .
        .
        .
        - sphinx_proof
        .
        .
        .
```
