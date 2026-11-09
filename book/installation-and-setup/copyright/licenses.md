````{margin}
```{attributiongrey} Attribution
:class: attribution
This page reuses adapted CC BY content from {cite:t}`hall21`. {fa}`quote-left`{ref}`Find out more here.<external_resources>`
```
````

(copyright_licenses)=
# Licenses

Here we present an overview of various license types, with a particular focus on the preference of TeachBooks to use Permissive Open Licenses, regardless of whether material is _content, code or data_ (described below). 

```{admonition} Why permissive open licenses?
:class: tip

Since we (TeachBooks) authors have been working on making online books, we see the value in making content available for reuse. When preparing a new page or assignment, nothing makes us happier than seeing a CC BY license on something that we would like to (re)use ourselves. Why? Because we know that all we have to do is properly attribute the work and we can get on with our true passion: **teaching!**
```

This page is written expressly for content authors of online interactive textbooks (e.g., those including, but not restricted to, TeachBooks), which are composed of two parts:
1. An online document in the form of a website, accessible at a specific URL, and
2. The _source code,_ which defines the _content_ and is required to create the website.

This generally does _not_ include the software required to convert the _source code_ in the the _website._

```{note}
Because the source code of an online book defines the content, and only occasionally includes code required to create the website, one should consider the _source code_ of a book as _content_ and not _code._ When this is not the case, we recommend included a code-specific license and indicate the specific files to which the license applies in your repository.
```

If you are personally undecided on which license to choose for your work, we hope that the information in this chapter convinces you to also have a preference for permissive open licenses. If you are still unsure, we recommend reading the [blog post by {cite:t}`hall21`](https://agilescientific.com/blog/2021/2/17/which-open-licence-should-i-choose) that inspired this page. Another useful resource is the website [choosealicense.com](https://choosealicense.com/), which includes many more options than those described here. Finally, consider also the policies of your own university or organization; for example, [TU Delft polcies can be found here](https://www.tudelft.nl/en/library/support/library-for-researchers/publishing-outreach/open-access-policy-and-guidelines).


## License Types in Context

Have you ever been overwhelmed by the massive amount of information (and especially _opinions!_) available regarding licenses? We have too! However, you are in luck: by dividing all possible license types into _openness_ and _material type,_ it becomes much easier to understand the differences, and make a decision that fits your situation best.

% retrieved dec 17 2024 by robert; see bib file, credits page
% https://agilescientific.com/blog/2021/2/17/which-open-licence-should-i-choose
```{figure} ./figures/open_licenses.png
:name: fig_license_types

Overview of license types, emphasizing "openness" and subdivided by material type: content, code and data. Source: {cite:t}`hall21`, CC BY. {fa}`quote-left`{ref}`Find out more here.<external_resources>`
```

Although this figure only includes a few different license types, the way of dividing by _openness_ and _material type_ can be applied to any license. This is especially useful when you are unsure which license to choose, or when you are considering a license that is not included in the figure. Remember to check the website [choosealicense.com](https://choosealicense.com/), which includes many more options than those described here. You can also an immediate comparison in [the choosealicense.com appendix](https://choosealicense.com/appendix/).

### Open versus Not Open

We recommend using open licenses to allow other people to reuse your material, just like you'd like to reuse material from others.

### Content, Code and Data

For content, we use a CC BY 4.0 license, for Code we primarily use the BSD-3-Clause license. Both of these are open to allow reuse.

## A Note to the Wary

Are you thinking something like this?

> I've put a lot of work into my material, and I don't want people to take credit for it or use it without my knowledge. However, I do see the value of choosing a license, especially an open one. Maybe I will choose something like CC BY-NC-SA, which allows others to use my work but not for commercial purposes, and not allowing them to modify it. That way, I can still get credit for my work and others can use it for educational purposes.

This is a nice sentiment, but when it comes to books, we don't advise it for several reasons. The following sections anecdotally explain "not open" and "permissive" licenses are not preferred.

```{note}
Think you can improve on the examples described in the following sections? Make an Issue or Pull Request!
```

### Why is ND not preferred?

The "ND" license prohibits derivative works: in other words, the material cannot be modified and must be used in its entirety. This is problematic for a few reasons:
- What if you have a wonderful page describing Topic X, but there are a few contextual phrases that are undesired, for example: "this is required reading for Tuesday, December 17, 2024 in CIEM1000." That would be distracting for your own students, but you can't remove it.
- What is the point of including a website together with another website? It's easier to just link to your material directly.
- What if someone only wants a small part of your book? They can't use it.
- What if someone else makes similar material and releases it under CC BY and you include it in your own book under an ND license? It seems unfair not to also provide them an opportunity to benefit from your work. In addition, this is not allowed! You can’t put work under a more restrictive license (see also compatibility table below).
- Often someone creates a copy of your work and makes improvements. The Git system (e.g., forks, commits, pull requests, etc) make it very straightforward to also include these improvements back into your original work. This would not be possible if you did not allow for reuse in the first place! 

### Why is NC not preferred?

The "NC" license prohibits commercial use. It sounds nice, right?
> Great, I can guarantee that big for-profit companies can't use my work for their own gain. This is important to me at a public or non-profit institution.

To be honest, it is more trouble than it's worth, primarily because the law seems to be vague on what constitutes commercial use. Many universities require tuition to cover operating expenses, which is often broken down into by number of students, credits, courses, etc. This could be interpreted as a form of commercial use and thus prevent other educators from using your work, which is precisely the opposite of what you were trying to facilitate!

### Why is SA not preferred?

The "SA" license requires that any derivative works be released under the same license. If you have two sources, each of which has a different SA license, how can you include your work that incorporates that content under the same license? You can't! Once again, if your goal is to convince others to share your work in a responsible way, your effort is thwarted. As with NC, this type of license seems to be more trouble than it's worth.
A similar story holds for the other 'copyleft' lincenses, as all copyleft licences require that the original license is perserved in derivative work to some degree. 

### Summary of License Type Compatibility

The previous sections can be illustrated by examining a so-called "license compatibility chart," which illustrates whether or not you can reuse material from a specific license type in another. Upon examination, you will see that CC BY is the most permissive license, both in terms of what you can do with the work of others, as well as what others can do with your work. We hope you will consider this when choosing a license for your own work!

```{figure} ./figures/1280px-CC_License_Compatibility_Chart.png
:name: fig_license_compatibility

Compatibility between Creative Commons license types. Source: Kennisland, CC0. {fa}`quote-left`{ref}`Find out more here.<external_resources>`
```

## Examples from Related Applications

```{warning}
Work in progress.
```

### Code in a Book Repository

For example, a simple script to parse files in your repository. You can include a special license with this code.

### Educational Materials with Code

What if your _content_ includes code. This happens in many science and engineering courses where programming is a key part of the learning process.

For example, the [MUDE Team](https://mude.citg.tudelft.nl) is working towards releasing the files associated with assignments under an open license. Since the majority of the content is written in a storytelling style in Jupyter notebooks, a CC BY license is probably the best choice if only one license is applied to a single file. However, if released in bulk it may be better to follow the advice of [Matt Hall](https://agilescientific.com/blog/2021/2/17/which-open-licence-should-i-choose):

> You have to be practical; maybe it depends on whether you consider your notebooks to be 'content' or 'source code'. I sometimes put at the bottom of a notebook something like **Open source content. Text is CC-BY, code is Apache 2.0** and I think this makes my intent clear.
