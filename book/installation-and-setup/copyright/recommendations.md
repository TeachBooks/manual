(copyright_recommendations)=
# Recommendations

As authors, one important set of objectives is to make sure that we:
1. Avoid plagiarism and copyright infringement,
2. Properly attribute (reused) content, and
3. Indicate to readers where to find the original content,
4. Create a record for ourselves that clearly documents what we have used.

As item number 3 aligns with the standard approach of citation and references in academic writing, much of the work is already quite clear. At TeachBooks we use APA guidelines by default; instructions for implementing this in your book can be found on {ref}`this page<apa>`.

Addressing Items 1 and 2 can be overwhelming at first, but we have tried to illustrate them clearly in this manual. In particular, the sections in this chapter, especially this page, which collects best practices used by TeachBooks collaborators, along with explanations for why we do it that way. We try to present a standard way of referencing material and attributing authors clearly; however, this can vary widely based on your own content, book setup and discipline.

The recommendations illustrate:

1. An efficient and consistent approach to accomplish the objectives above, and
2. How you can implement this easily in the _source code of your own book._

We believe the approach outlined here is also a useful way for you as an author to _remember which material you have used in your book and find or update it later if changes are needed._ This is Item 4 in the list above, and hopefully avoids frustration in the future if you need to revise your book after a long period of inactivity and cannot remember what content was written by you, or written by others.

The recommendations on this page are designed for content that is available in two formats: _source code_ and a _public website._ Additionally, it is focused primarily on file formats and open content relevant to Jupyer Books, which means content written primarily in _text files_ (e.g., .md, .ipynb, etc.), also called _source code,_ shared with an open license and used to create a _website_ (e.g., HTML files accessible at a specific URL). Software is used to convert the source code into a website, however, this is generally not included in the creative content shared using the book license.

## Key Locations in the Book

Note that there are several types of pages and files that can be incorporated into your TeachBook which, together, accomplish our goals of proper attribution and referencing. These are summarized in the table and explained in more detail in the following sections, along with examples for implementation in a TeachBook..

```{list-table} Key Locations in the Book for Attribution and Referencing Best Practices
:header-rows: 1
:name: copyright_book_locations

* - Page Name
  - File Name
  - Example in this book
  - Purpose
* - {ref}`Content Page<copyright_recc_content>`
  - `*.md`, `*.ipynb`, etc.
  - {ref}`Licenses page <copyright_licenses>`
  - Identifies source and links to credits page.
* - {ref}`Credits and License Page<copyright_recc_credits>`
  - `credits.md`
  - [Credits page](credits)
  - Collets license and copyright information in one place.
* - {ref}`References Page<copyright_recc_references>`
  - `references.md`
  - [References page](../../references.md)
  - Documents all sources, as in any other published work.
* - {ref}`License Page<copyright_recc_license>`
  - `LICENSE`
  - File stored in repository [here](https://github.com/TeachBooks/manual/blob/release/LICENSE).
  - Document license terms; includes licenses of reused content.
```

(copyright_recc_content)=
### Content Pages
Make sure you show the source of your content where it is provided. We adopt a standard icon and link to help readers recognize this: {fa}`quote-left`{ref}`Find out more here.<external_resources>`. This can be used to provide attribution to authors for specific pages too

#### How to implement this in your book

Some examples can be found in this manual:
- [](../../external/deploy-book-workflow/README.md): a content page which is taken fully from another repository
- Figure {ref}`fig_license_types`: a single licensed figure added to a page taken from another website
- [](../copyright.md): a content page which adapts material from another website

##### Format as citation
Copy the following line into your content file

```md
> Written by `<author(s)>`
> This page reuses <license> content from {cite:t}`bib_id`. {fa}`quote-left`{ref}`Find out more here.<link to external resources section on credits and license page>`
```

This produces

> This page reuses CC BY content from {cite:t}`jason_moore`. {fa}`quote-left`{ref}`Find out more here.<external_resources>`

(custom_attribution)=
##### Format as custom admonition
The previous syntax might be used for other purposes as well. An alternative is a custom attribution admonition:

Therefore, use the following syntax:

````{margin}
```{attributiongrey} Attribution
:class: attribution
Written by <author(s)>
This page reuses CC BY 4.0 licensed content from {cite:t}`jason_moore`. {fa}`quote-left`{ref}`Find out more here.<external_resources>`
```
````

`````md
````{margin}
```{attributiongrey} Attribution
:class: attribution
Written by <author(s)>
This page reuses <license> content from {cite:t}`bib_id`. {fa}`quote-left`{ref}`Find out more here.<link to external resources section on credits and license page>`
```
````
`````

To make this possible we use the custom admonitions of [the custom named colors sphinx extension](https://teachbooks.io/manual/external/Sphinx-Named-Colors/README.html#admonitions) in combination with a custom css file. `_config.yml` needs to be configured as follows, making sure to add the `sphinx-named-colors` extension to your environment (e.g., `requirements.txt`):

```yaml
sphinx:
  config:
    named_colors_custom_colors: {'attributiongrey':[150,150,150]}
  extra_extensions:
    - sphinx_named_colors
```

To adapt the symbol of the admonition (to double quotes), you can add the following [custom CSS class](../../_static/attribution.css) to `book/_static/attribution.css`:

```css
/* Attribution */
div.attribution > .admonition-title::after {
  content: "\f10d";
}
```


(copyright_recc_credits)=
### Credits and License Page

This place describes all relevant information in one place regarding copyright and licenses, including reused content. This page should also be useful to the author returning to the book after a long period of inactivity.

#### How to implement this in your book

That's easy! Just copy the page [from out template](https://github.com/TeachBooks/template/blob/main/book/credits.md) and adapt to your purposes.

(copyright_recc_references)=
### References Page

Lists all references used in the book, including those not directly cited in the text (e.g., reused material).

A special case is made for material licensed under the public domain, for example, the "no rights reserved" [CC0 license](https://creativecommons.org/public-domain/cc0/). As these can include a large number of single files (e.g., images), each with their own link and author, by default we do not include these in the References Page, but we do list the source in the credits. This is especially useful for finding the material later, or allowing anyone who would like to reuse your content to find and cite the public domain source material directly.

One example in this manual is {ref}`fig_license_compatibility`, listed on the credits page {ref}`here<external_resources>`.

#### How to implement this in your book

Proper referencing typically involves setting up an entry in your `*.bib` file and using a citation key in the text on the content and Credits pages, which can be handled automatically if you are using the {ref}`APA references tool<apa>`. This also allows you to use the text (`t`) and parentheses (`p`) citation styles.

```
{cite:t}`cite_key`
{cite:p}`cite_key`
```

which produce these citations: text by {cite:t}`jason_moore`. And parentheses {cite:p}`jason_moore` when using {ref}`APA references tool<apa>`.

(copyright_recc_license)=
### License File

Specifies license and copyright of book, along with licenses of reused content also included in source code.

Entire file only included in source code. License type stated on Credits page and included in footer.


#### How to implement this in your book

Create a LICENSE file in the root of your repository (note that there is conventionally no extension in the file name). Platforms like GitHub and GitLab can help you with this via the home page of your repository (look for a button that says "Add a License").

The file should contain the full text of the license you have chosen for your book, along with any other licenses that apply to content you have reused. For example, the TeachBooks Manual uses a [CC BY 4.0 license](https://creativecommons.org/licenses/by/4.0/), which is included in the LICENSE file in the source code at [github.com/TeachBooks/manual](https://github.com/TeachBooks/manual/blob/release/LICENSE).

Note that although most of the license text can be created from a template by GitHub, you may still want to identify yourself as the author and/or the copyright holder at the top of the file. This provides clarity to readers and, if reusing your work, it is also easier for others to identify your license when including it in their own source code.

## Special Cases

Is there a special case you would like to know more about that is not covered here? Please let us know by creating an issue in the appropriate TeachBooks GitHub repository.

It can also be very useful to check what others commonly do in the open source community. Note, however, some discretion should be applied, as not everything you see on the internet is done properly. Our advice is to find a few good examples of people you can trust and copy them.

For example, when Robert and Tom are in this position, they often wonder WWJD? (What Would Jason Do?) Jason Moore has been making and (re)using open source material for a long time, and his GitHub repositories and websites at [github.com/moorepants](https://github.com/moorepants/) are a great source of inspiration! 